// stadiums.js
window.stadiumsDB = [
    {
        stadiumType: "Basic",
        styles: [
            {
                stadiumId: "basic_nopockets",
                name: "Basic Stadium: Collision Zone",
                size: "average",
                desc: "A simplistic Beystadium with no openings for ring outs. This is a direct duel.",
                physics: { friction: 0.99, radiusMod: 0.9 },
                ringOutZones: [], // No pockets
                visuals: { wall: { color: "#222" }, ramp: { color: "#2a2a2a" }, basin: { color: "#333" }, lines: "#555", pocketLines: "#111" }
            },
            {
                stadiumId: "basic_threepockets",
                name: "Basic Stadium: Tri-Pocket",
                size: "average",
                desc: "A standard arena featuring three distinct ring-out pockets.",
                physics: { friction: 0.99, radiusMod: 0.9 },
                ringOutZones: [
                    { start: 4.5, end: 4.9 }, // Top
                    { start: 0.5, end: 1.0 }, // Bottom right
                    { start: 2.1, end: 2.6 }  // Bottom left
                ],
                visuals: { wall: { color: "#222" }, ramp: { color: "#2a2a2a" }, basin: { color: "#333" }, lines: "#555", pocketLines: "#111" }
            },
            {
                stadiumId: "basic_twopocket",
                name: "Basic Stadium: Dual Chasm",
                size: "average",
                desc: "An aggressive arena with two massive side-pockets.",
                physics: { friction: 0.99, radiusMod: 0.9 },
                ringOutZones: [
                    { start: 5.8, end: 0.5 }, // Right pocket (Wraps over 0)
                    { start: 2.7, end: 3.5 }  // Left pocket
                ],
                visuals: { wall: { color: "#222" }, ramp: { color: "#2a2a2a" }, basin: { color: "#333" }, lines: "#555", pocketLines: "#111" }
            }
        ]
    },
    {
        stadiumType: "Official Blue",
        styles: [
            {
                stadiumId: "offblue_nopockets",
                name: "Lockdown Battle Zone",
                size: "average",
                desc: "Standard, official style arena in Blue. Meant for head-to-head challenge without ring outs.",
                physics: { friction: 0.99, radiusMod: 0.9 },
                ringOutZones: [], 
                visuals: {
                    1:1 perfectly square image!
                    floorImgUrl: "./images/stadiums/official_blue/floor_offblue.png", 
                    
                    // The dynamic 3D rim colors
                    wallColor: "#404f93",  // The inner vertical drop
                    ledgeColor: "#4a5bab", // The flat top of the stadium rim
                }
            }
			{
                stadiumId: "offblue_threepockets",
                name: "Tri-Pocket Battle Zone",
                size: "average",
                desc: "Standard, official style arena in Blue. Features 3 Wall Pockets, allowing for ring outs.",
                physics: { friction: 0.99, radiusMod: 0.9 },
                ringOutZones: [
                    { start: 4.5, end: 4.9 }, // Top
                    { start: 0.5, end: 1.0 }, // Bottom right
                    { start: 2.1, end: 2.6 }  // Bottom left
                ], 
                visuals: {
                    1:1 perfectly square image!
                    floorImgUrl: "./images/stadiums/official_blue/floor_offblue.png", 
                    
                    // The dynamic 3D rim colors
                    wallColor: "#404f93",  // The inner vertical drop
                    ledgeColor: "#4a5bab", // The flat top of the stadium rim
                }
            }
        ]
    }
];