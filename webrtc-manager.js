// webrtc-manager.js
import { rtdb } from './firebase-config.js';
import { ref, update, onValue, push, set, onDisconnect } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

export class WebRTCManager {
    constructor() {
        this.peerConnection = null;
        this.dataChannel = null;
        this.roomId = null;
        this.role = null;
        this.roomRef = null;
        
        // Free Google STUN servers to bypass basic firewalls and get public IPs
        this.configuration = {
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' }
            ]
        };
    }

    async initConnection(roomId, role) {
        this.roomId = roomId;
        this.role = role;
        this.roomRef = ref(rtdb, `rooms/${roomId}`);
        
        this.peerConnection = new RTCPeerConnection(this.configuration);

        // 1. Setup the High-Speed Data Channel
        if (this.role === 'HOST') {
            // Host creates the channel
            this.dataChannel = this.peerConnection.createDataChannel('beyBattleData', {
                ordered: false, 
                maxRetransmits: 0 
            });
            this.setupDataChannelListeners();
        } else {
            // Guest waits for the channel to arrive
            this.peerConnection.ondatachannel = (event) => {
                this.dataChannel = event.channel;
                this.setupDataChannelListeners();
            };
        }

        // 2. Gather Network Paths (ICE Candidates) and send to Firebase
        this.peerConnection.onicecandidate = async (event) => {
            if (event.candidate) {
                const candidateRef = push(ref(rtdb, `rooms/${roomId}/${this.role === 'HOST' ? 'hostCandidates' : 'guestCandidates'}`));
                await set(candidateRef, event.candidate.toJSON());
            }
        };

        // 3. Monitor the actual P2P Link Status
        this.peerConnection.onconnectionstatechange = () => {
            console.log(`[WebRTC] Connection State: ${this.peerConnection.connectionState}`);
            if (this.peerConnection.connectionState === 'connected') {
                console.log("🔥 P2P LINK ESTABLISHED! TRANSITIONING TO ARENA 🔥");
                // Stop listening to the lobby Firebase room, we don't need it anymore!
                setTimeout(() => {
                    window.navigateTo('arena.html');
                }, 1000);
            }
        };

        // 4. Start the Handshake Sequence
        if (this.role === 'HOST') {
            await this.createOffer();
        } else {
            this.listenForOffer();
        }
        
        this.listenForRemoteCandidates();
    }

    // --- HOST LOGIC ---
    async createOffer() {
        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        
        // Push offer to Firebase for Guest to see
        await update(this.roomRef, { offer: { type: offer.type, sdp: offer.sdp } });
        console.log("[WebRTC] Host created Offer.");

        // Listen for the Guest's Answer
        onValue(ref(rtdb, `rooms/${this.roomId}/answer`), async (snapshot) => {
            const answer = snapshot.val();
            if (answer && !this.peerConnection.currentRemoteDescription) {
                console.log("[WebRTC] Host received Answer.");
                const rtcSessionDescription = new RTCSessionDescription(answer);
                await this.peerConnection.setRemoteDescription(rtcSessionDescription);
            }
        });
    }

    // --- GUEST LOGIC ---
    listenForOffer() {
        onValue(ref(rtdb, `rooms/${this.roomId}/offer`), async (snapshot) => {
            const offer = snapshot.val();
            if (offer && !this.peerConnection.currentRemoteDescription) {
                console.log("[WebRTC] Guest received Offer. Creating Answer...");
                const rtcSessionDescription = new RTCSessionDescription(offer);
                await this.peerConnection.setRemoteDescription(rtcSessionDescription);

                const answer = await this.peerConnection.createAnswer();
                await this.peerConnection.setLocalDescription(answer);
                
                // Push answer back to Firebase for Host to see
                await update(this.roomRef, { answer: { type: answer.type, sdp: answer.sdp } });
            }
        });
    }

    // --- SHARED LOGIC ---
    listenForRemoteCandidates() {
        const targetNode = this.role === 'HOST' ? 'guestCandidates' : 'hostCandidates';
        onValue(ref(rtdb, `rooms/${this.roomId}/${targetNode}`), (snapshot) => {
            const candidates = snapshot.val();
            if (candidates) {
                Object.values(candidates).forEach(async (candidate) => {
                    try {
                        await this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
                    } catch (e) {
                        console.error("[WebRTC] Error adding received ICE candidate", e);
                    }
                });
            }
        });
    }

setupDataChannelListeners() {
        this.dataChannel.binaryType = "arraybuffer"; // NEW: Tell WebRTC to use raw memory
        
        this.dataChannel.onopen = () => console.log("[WebRTC] High-Speed Data Channel OPEN!");
        this.dataChannel.onclose = () => console.log("[WebRTC] High-Speed Data Channel CLOSED.");
        
        this.dataChannel.onmessage = (event) => {
            // physics handled in arena
        };
    }

    // NEW: Smart helper to send either raw binary or JSON strings
    sendData(data) {
        if (this.dataChannel && this.dataChannel.readyState === 'open') {
            if (data instanceof ArrayBuffer) {
                this.dataChannel.send(data); // Send raw binary
            } else {
                this.dataChannel.send(JSON.stringify(data)); // Fallback for complex setup data
            }
        }
    }

// Export a single global instance
export const rtcManager = new WebRTCManager();