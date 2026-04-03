// skills.js

// --- 1. THE ENCYCLOPEDIA & LOGIC DB ---
window.SkillsDB = {
    passives: {
        // --- EXISTING PASSIVES ---
        "Shell Armor": {
            name: "Shell Armor",
            desc: "Increases base Defense by 10.",
            apply: function(bey) { bey.stats.defense = (bey.stats.defense || 0) + 10; }
        },
		"Recoil Rebounder": {
            name: "Recoil Rebounder",
            desc: "When a collision occurs, reduce knockback by 10% and RPM damage by 2%. Then, temporarily increase Speed and Attack by 6% for 7 seconds. Cooldown: 28s.",
            apply: function(bey) {}
        },
		"Mode Change": {
            name: "Mode Change",
            desc: "When RPM reaches below 50%, the blade base's mode change mechanism switches from a Flat tip to a Semi-Flat tip, decreasing Attack and Grip by 3%, but increasing Endurance and Stamina by 7% and Defense and Recoil Reduction by 2%.",
            apply: function(bey) {}
        },
		"Metal Ball Defense": {
            name: "Metal Ball Defense",
            desc: "While RPM is above 55%, increase Attack by 2%, Balance and Mobility by 4%, and Defense by 5%. When RPM dips below 55%, instead increase Recoil Reduction by 1%, Knockback Resistance by 3% and Defense and Endurance by 4%.",
            apply: function(bey) {}
        },
        "Engine Activation": {
            name: "Engine Activation",
            desc: "When RPM drops below 50%, activates for a massive 350 RPM burst and Mobility boost.",
            apply: function(bey) {} 
        },
        "Peak Performance": {
            name: "Peak Performance",
            desc: "After 8 seconds without a collision, gain a massive boost to Speed, Balance, and Endurance.",
            apply: function(bey) {} 
        },
        "High Speed Recoil Reduction": {
            name: "High Speed Recoil Reduction",
            desc: "While moving at high speed, gain +20 Recoil Reduction and bonus Defense/Endurance.",
            apply: function(bey) {} 
        },
        "Critical Counter": {
            name: "Critical Counter",
            desc: "Prepares a devastating counter-attack when struck. Cooldown: 24s.",
            apply: function(bey) {} 
        },
        "Offensive Guard": {
            name: "Offensive Guard",
            desc: "Reflects 8% of incoming HP and RPM damage back at the attacker. Cooldown: 18s.",
            apply: function(bey) {} 
        },
		"Impact Point": {
            name: "Impact Point",
            desc: "Impart an additional 5% knockback when impacting opponents.",
            apply: function(bey) {
				bey.stats = bey.stats || {};
                bey.stats.knockbackPower = (bey.stats.knockbackPower || 0) + 0.05; 
            }				
        },
		"Rolling Collision": {
            name: "Rolling Collision",
            desc: "Reduce knockback taken by 4% when impacting opponents.",
            apply: function(bey) {
				bey.stats = bey.stats || {};
                bey.stats.knockbackResist = (bey.stats.knockbackResist || 0) + 0.04; 
            }				
        },

        // --- NEW EQUIPMENT PASSIVES ---
        "Wing Guard": {
            name: "Wing Guard",
            desc: "Increases Defense by 5 and reduces knockback taken by 2%.",
            apply: function(bey) {
                bey.stats.defense = (bey.stats.defense || 0) + 5;
                bey.stats.knockbackResist = (bey.stats.knockbackResist || 0) + .02; 
            }
        },
		"Rollback Drift": {
            name: "Rollback Drift",
            desc: "When heavy knockback is taken, initiate a strong curved drift toward whatever direction is being held for the duration of the knockback. If no direction is held, the Beyblade will drift toward the center of the arena instead. Reduces RPM loss slightly on collision, and grants +5% Attack and +5% Endurance for 8 seconds after activation.",
            apply: function(bey) { 
            }
        },
        "Spin Steal": {
            name: "Spin Steal",
            desc: "When colliding with an opponent who has a higher RPM, instantly absorb some of their spin energy.",
            apply: function(bey) {} 
        },
        "Wall Rebound Assist": {
            name: "Wall Rebound Assist",
            desc: "Hitting the arena wall acts as a springboard, launching you back into the center with increased speed.",
            apply: function(bey) {} 
        },
        "Sour Saucer": {
            name: "Sour Saucer",
            desc: "A bizarre center of gravity grants +8 Grip, but creates highly unpredictable movement patterns. In addition, collision with an enemy temporarily reduces the enemy's Recoil Reduction by 6%.",
            apply: function(bey) {
                bey.stats.grip = (bey.stats.grip || 0) + 8;
            }
        },
        "Hyper Aggression": {
            name: "Hyper Aggression",
            desc: "While current RPM is above 80% of this beyblade's maximum, gain a 10% boost to Attack and an 8% boost to Speed, but reduce Defense by 8%.",
            apply: function(bey) {} 
        },
		"Alter Approach (Flat)": {
            name: "Alter Approach",
            desc: "Depending on manually prepared settings before the match starts, gain an additional 4% Attack and 3% Speed when a round begins. (Flat mode active).",
            apply: function(bey) {} 
        },
		"Alter Approach (Semi-Flat)": {
            name: "Alter Approach",
            desc: "Depending on manually prepared settings before the match starts, gain an additional 2% Defense, 3% Stamina, and 4% Endurance when a round begins. (Semi-Flat mode active).",
            apply: function(bey) {} 
        },
        "Centrifugal Synergy": {
            name: "Centrifugal Synergy",
            desc: "The dual-axis spin grants exceptional stability, increasing Endurance by 8.",
            apply: function(bey) {
                bey.stats.endurance = (bey.stats.endurance || 0) + 8;
            }
        },
        "Ball Bearing Stabilizer": {
            name: "Ball Bearing Stabilizer",
            desc: "When RPM drops below 50%, the ball bearings engage to completely eliminate visual wobble.",
            apply: function(bey) {} 
        },
        "Counterattack": {
            name: "Counterattack",
            desc: "Taking damage triggers a brief, high-speed dash toward the opponent.",
            apply: function(bey) {} 
        },
		"Boss Hostility": {
            name: "Boss Hostility",
            desc: "For Boss Beys, they are hostile.",
            apply: function(bey) {} 
        },

        // --- LAUNCHER & TOOL MODIFIERS ---
        "Launcher: RPM Boost": {
            name: "Launcher: RPM Boost",
            desc: "Upgrades the launcher gear ratio, passively granting a 10% bonus to initial launch RPM.",
            apply: function(bey) {
                bey.currentRpm *= 1.10;
                bey.maxRpm *= 1.10;
            }
        },
		"Launcher: Range Boost": {
            name: "Launcher: Range Boost",
            desc: "Upgrades the launch range from 42.5% to 55%.",
            apply: function(bey) {
                bey.stats = bey.stats || {};
                // We store this as a raw decimal. Default is 0.425, this boosts it to 0.55!
                bey.stats.launchRange = Math.max((bey.stats.launchRange || 0.425), 0.55);
            }
        },
        "Special Launch: Marvelous Launch": {
            name: "Marvelous Launch",
            desc: "Expands the sweet spots on the Ripcord gauge and unlocks an exclusive 'Marvelous' power tier.",
            apply: function(bey) {} 
        },
		"Special Launch: Power Shoot": {
            name: "Power Shoot",
            desc: "For every 1% of launch range beyond the standard 42.5%, gain 1% additional attack and 0.5% additional endurance for 15 seconds, and gain 1% additional RPM on launch.",
            // We just flag that they own the skill here. 
                // The actual buff math MUST happen in the arena exactly at the moment of launch!
                 apply: function(bey) {
				bey.hasPowerShoot = true; 
            }
		}
    },

    attacks: {
        // --- EXISTING ATTACKS ---
        "Heavy Ram": {
            name: "Heavy Ram", cd: 5,
            desc: "A brutal forward lunge that scales in power based on the Beyblade's Weight.",
            execute: function() {} 
        },
        "Sharp Shooter": {
            name: "Sharp Shooter", cd: 6,
            desc: "A high-velocity dash scaling off Speed that tracks the opponent's trajectory.",
            execute: function() {}
        },
        "Grindblade Lunge": {
            name: "Grindblade Lunge", cd: 8,
            desc: "Induces an intentional Wobble to hook the opponent into a damaging grapple.",
            execute: function() {}
        },

        // --- NEW EQUIPMENT ATTACKS ---
        "Aerial Lance": {
            name: "Aerial Lance", cd: 8,
            desc: "The beyblade leaps into the air. Colliding during a plunge deals heavy HP damage.",
            execute: function() {} 
        },
        "Smash Attack": {
            name: "Smash Attack", cd: 5,
            desc: "A heavy, straightforward burst of speed designed to slam the opponent.",
            execute: function() {}
        },
        "Spike Attack": {
            name: "Spike Attack", cd: 4,
            desc: "A razor-sharp, aggressive lunge that deals massive knockback but incurs slight self-recoil.",
            execute: function() {}
        },
        "Upper Attack": {
            name: "Upper Attack", cd: 6,
            desc: "Pulls back briefly before delivering a scooping upward dash.",
            execute: function() {}
        },
        "Barrage Attack": {
            name: "Barrage Attack", cd: 6,
            desc: "Executes a rapid flurry of high speed movements to overwhelm the opponent.",
            execute: function() {}
        },
		"Cyclone Loop": {
            name: "Cyclone Loop", cd: 6,
            desc: "Execute a tight offensive loop in the same direction as the beyblade's spin.",
            execute: function() {}
        },
		"Spin Burst": {
            name: "Spin Burst", cd: 8,
            desc: "Charge the force of the beyblade's spin energy into a projectile force. Beware, you are anchored while this skill charges. This skill is powered using RPM.",
			//no internal function, this is handled entirely by arena.html; tweak skill variables there
        },
        "Cross Smash": {
            name: "Cross Smash", cd: 6,
            desc: "A devastating, concentrated blow utilizing the secondary contact points of a Sub-Attack Ring.",
            execute: function() {}
        },
		"Cross Lance": {
            name: "Cross Lance", cd: 6,
            desc: "A devastating, concentrated spike attack utilizing the secondary contact points of a Sub-Attack Ring.",
            execute: function() {}
        },
        "Concentrate Defense": {
            name: "Concentrate Defense", cd: 7,
            desc: "Halts movement completely to brace for impact, massively reducing incoming damage for 2 seconds.",
            execute: function() {}
        },
		"Concentrate Impact": {
            name: "Concentrate Impact", cd: 8,
            desc: "Temporarily boost knockback power by 20% for 1.5 seconds.",
            execute: function() {}
        },
        "Meteor Dash": {
            name: "Meteor Dash", cd: 7,
            desc: "Draw out a wellspring of fighting spirit to mow down your foes, but be careful; using this much power has temporary drawbacks.",
            execute: function() {}
        },
		"Phantom Warp": {
            name: "Phantom Warp", cd: 8,
            desc: "Utilize a mysterious, dark power to teleport across the arena.",
            execute: function() {}
        }
    },

    ultimates: {
        "Storm Tornado": {
            name: "Storm Tornado",
            desc: "Summons a massive vortex that shreds 400 RPM from the opponent and drastically slows them.",
            execute: function(attacker, defender) {
                defender.currentRpm -= 400;
                defender.vx *= 0.2; 
                defender.vy *= 0.2;
                attacker.activeAura = "rgba(0, 255, 255, 1.0)";
                attacker.activeAuraDuration = 1000;
            }
        },
        "Flame Saber": {
            name: "Flame Saber",
            desc: "A concentrated strike of fire that burns 80 HP and violently knocks the opponent backward.",
            execute: function(attacker, defender) {
                defender.currentHp -= 80;
                defender.vx -= attacker.vx * 2;
                defender.vy -= attacker.vy * 2;
                attacker.activeAura = "rgba(255, 69, 0, 1.0)";
                attacker.activeAuraDuration = 1000;
            }
        },
        "Will 'O the Wisp": {
            name: "Will 'O the Wisp",
            desc: "Ignites the opponent in spectral flames, causing them to rapidly lose RPM over 4 seconds.",
            execute: function(attacker, defender) {
                defender.skillState.wispBurnTimer = 4000;
                attacker.activeAura = "rgba(148, 0, 211, 1.0)";
                attacker.activeAuraDuration = 1000;
            }
        }
    }
};

// --- 2. THE ACTIVE ENGINE ---
window.SkillEngine = {
    init: function(p1, cpu) {
        [p1, cpu].forEach(bey => {
            bey.skillState = {
                engineUsed: false,
                timeSinceCollision: 0,
                peakActive: false,
                highSpeedActive: false,
                critCd: 0,
                critActiveTimer: 0,
                guardCd: 0,
                z: 0, 
                isGrappled: false,
                grappleTicks: 0,
                grappleTimer: 0,
                escapeProgress: 0,
                lastJoyAngle: 0, 
                actionState: "NORMAL",
                hyperAggressionActive: false,
                haAtkBonus: 0,
                haSpdBonus: 0,
                haDefPenalty: 0,
				recoilRebounderCd: 0,
				recoilRebounderTimer: 0,
				rrSpdBonus: 0,
				rrAtkBonus: 0,
				rollbackTimer: 0,
				driftForceTimer: 0,
				rdAtkBonus: 0,
				rdEndBonus: 0,
				cycloneTimer: 0,
				cycloneTotalTime: 0,
				tpTimer: 0,
				tpTargetX: 0,
				tpTargetY: 0,
                
				meteorDebuffTimer: 0,
				meteorEndPenalty: 0,
                defenseBoostTimer: 0,
				impactBoostTimer: 0,
                barrageDashesLeft: 0,
				barrageDashTimer: 0,
				modeChangeActive: false,
				metalBallState: "NONE",
                wispBurnTimer: 0,
                lastHp: bey.currentHp,
                
                sourSaucerCd: 0,
                sourDebuffTimer: 0,
                sourDebuffAmount: 0,
                
				bossHostilityAuraTimer: 0,
				
                airLanceTimer: 0
            };
	
	
            // --- PRE-MATCH PASSIVE BUFFS ---
            // Applies permanent stat adjustments exactly once before the match begins!
            // ==========================================
            if (bey.passives) {
                if (bey.passives.includes("Alter Approach (Flat)")) {
                    bey.stats.attack += (bey.stats.attack || 0) * 0.04;
                    bey.stats.speed += (bey.stats.speed || 0) * 0.03;
                }
                
                if (bey.passives.includes("Alter Approach (Semi-Flat)")) {
                    bey.stats.defense += (bey.stats.defense || 0) * 0.02;
                    bey.stats.stamina += (bey.stats.stamina || 0) * 0.03;
                    bey.stats.endurance += (bey.stats.endurance || 0) * 0.04;
                }
				if (bey.passives.includes("Boss Hostility")) {
                    bey.skillState.bossHostilityAuraTimer = 90000; // 90 seconds in milliseconds!
					console.log("ETHEREAL CLOAK ACTIVATED! Timer set to 90s.");
                }
            }
            // ==========================================

        });
    },

    update: function(dt, p1, cpu, joyX, joyY) {
        
        let dist = Math.sqrt((cpu.x - p1.x)**2 + (cpu.y - p1.y)**2);
        let isColliding = dist < (p1.radius + cpu.radius + 2);

        [p1, cpu].forEach(bey => {
            let state = bey.skillState;
            let isPlayer = (bey === p1);
            let opponent = isPlayer ? cpu : p1;

            // --- CLEAR PREVIOUS FRAME'S PASSIVE AURA ---
            bey.passiveAura = null;
			bey.passiveAuraSize = null

            // --- REAPPLY CONSTANT PASSIVE GLOWS ---
            if (state.peakActive) bey.passiveAura = "rgba(255, 215, 0, 0.4)";
            if (state.highSpeedActive) bey.passiveAura = "rgba(200, 200, 200, 0.4)";
            if (state.hyperAggressionActive) bey.passiveAura = "rgba(255, 0, 0, 0.4)";
            if (state.critActiveTimer > 0) bey.passiveAura = "rgba(255, 165, 0, 0.4)";

            // --- PASSIVE: Ball Bearing Stabilizer ---
            if (bey.passives && bey.passives.includes("Ball Bearing Stabilizer")) {
                if (bey.currentRpm < bey.maxRpm * 0.5) {
                    bey.wobbleFactor = 0; 
                }
            }
			
			// --- PASSIVE: Mode Change ---
            if (bey.passives && bey.passives.includes("Mode Change")) {
                let isBelowHalf = bey.currentRpm < (bey.maxRpm * 0.50);
                
                if (isBelowHalf && !state.modeChangeActive) {
                    // Activate Mode Change! Change tip to Semi-Flat
                    bey.tipShape = "Semi-Flat"; 
                    
                    // Calculate the exact percentage adjustments
                    state.mcAtkPen = (bey.stats.attack || 0) * 0.03;
                    state.mcGripPen = (bey.stats.grip || 0) * 0.03;
                    state.mcEndBns = (bey.stats.endurance || 0) * 0.07;
                    state.mcStamBns = (bey.stats.stamina || 0) * 0.07;
                    state.mcDefBns = (bey.stats.defense || 0) * 0.02;
                    state.mcRecBns = (bey.stats.recoilReduction || 0) * 0.02;
                    
                    // Apply them
                    bey.stats.attack -= state.mcAtkPen;
                    bey.stats.grip -= state.mcGripPen;
                    bey.stats.endurance += state.mcEndBns;
                    bey.stats.stamina += state.mcStamBns;
                    bey.stats.defense += state.mcDefBns;
                    bey.stats.recoilReduction += state.mcRecBns;
                    
                    // Flash a green aura so the player knows the tip just dropped!
                    bey.activeAura = "rgba(0, 255, 100, 0.8)";
                    bey.activeAuraDuration = 600;
                    
                    state.modeChangeActive = true;
                } 
                else if (!isBelowHalf && state.modeChangeActive) {
                    // If they somehow regain RPM (Spin Steal, etc), revert it!
                    bey.tipShape = "Flat"; 
                    bey.stats.attack += state.mcAtkPen;
                    bey.stats.grip += state.mcGripPen;
                    bey.stats.endurance -= state.mcEndBns;
                    bey.stats.stamina -= state.mcStamBns;
                    bey.stats.defense -= state.mcDefBns;
                    bey.stats.recoilReduction -= state.mcRecBns;
                    
                    state.modeChangeActive = false;
                }
            }

            // --- PASSIVE: Metal Ball Defense ---
            if (bey.passives && bey.passives.includes("Metal Ball Defense")) {
                let isHighRpm = bey.currentRpm >= (bey.maxRpm * 0.55);
                let targetState = isHighRpm ? "HIGH" : "LOW";
                
                if (state.metalBallState !== targetState) {
                    
                    // 1. Strip away the OLD buffs before applying new ones
                    if (state.metalBallState === "HIGH") {
                        bey.stats.attack -= state.mbHighAtk;
                        bey.stats.balance -= state.mbHighBal;
                        bey.stats.mobility -= state.mbHighMob;
                        bey.stats.defense -= state.mbHighDef;
                    } else if (state.metalBallState === "LOW") {
                        bey.stats.recoilReduction -= state.mbLowRec;
                        // REMOVED WEIGHT, REPLACED WITH KNOCKBACK RESIST
                        bey.stats.knockbackResist -= state.mbLowKb; 
                        bey.stats.defense -= state.mbLowDef;
                        bey.stats.endurance -= state.mbLowEnd;
                    }
                    
                    // 2. Apply the NEW buffs
                    if (targetState === "HIGH") {
                        state.mbHighAtk = (bey.stats.attack || 0) * 0.02;
                        state.mbHighBal = (bey.stats.balance || 0) * 0.04;
                        state.mbHighMob = (bey.stats.mobility || 0) * 0.04;
                        state.mbHighDef = (bey.stats.defense || 0) * 0.05;
                        
                        bey.stats.attack += state.mbHighAtk;
                        bey.stats.balance += state.mbHighBal;
                        bey.stats.mobility += state.mbHighMob;
                        bey.stats.defense += state.mbHighDef;
                    } else { // LOW RPM STANCE
                        state.mbLowRec = (bey.stats.recoilReduction || 0) * 0.01;
                        // ADD FLAT 3% KNOCKBACK RESISTANCE (0.03)
                        state.mbLowKb = 0.03; 
                        state.mbLowDef = (bey.stats.defense || 0) * 0.04;
                        state.mbLowEnd = (bey.stats.endurance || 0) * 0.04;
                        
                        bey.stats.recoilReduction += state.mbLowRec;
                        bey.stats.knockbackResist = (bey.stats.knockbackResist || 0) + state.mbLowKb;
                        bey.stats.defense += state.mbLowDef;
                        bey.stats.endurance += state.mbLowEnd;
                        
                        bey.activeAura = "rgba(192, 192, 192, 0.8)";
                        bey.activeAuraDuration = 600;
                    }
                    
                    state.metalBallState = targetState;
                }
            }

            // --- PASSIVE: Sour Saucer ---
            if (bey.passives && bey.passives.includes("Sour Saucer")) {
                if (Math.random() < 0.05) {
                    bey.vx += (Math.random() - 0.5) * 1.5;
                    bey.vy += (Math.random() - 0.5) * 1.5;
                }
            }

			// --- CYCLONE LOOP PHYSICS ---
            if (state.actionState === "CYCLONE_LOOP") {
                if (state.cycloneTimer > 0) {
                    
                    // 1. Calculate how much to rotate this specific frame
                    // Math.PI * 2 equals a full 360 degrees
                    let rotAngle = (Math.PI * 2) * (dt / state.cycloneTotalTime);
                    
                    // 2. Read the Beyblade's actual spin direction!
                    // Right Spin (1) rotates Clockwise. Left Spin (-1) rotates Counter-Clockwise.
                    let spinDirection = bey.spinDir || 1;
                    rotAngle *= spinDirection;

                    // 3. The 2D Rotation Matrix
                    let cosA = Math.cos(rotAngle);
                    let sinA = Math.sin(rotAngle);
                    
                    let newVx = bey.vx * cosA - bey.vy * sinA;
                    let newVy = bey.vx * sinA + bey.vy * cosA;

                    // 4. Force the speed to stay at 16 so arena friction doesn't turn it into a spiral
                    let currentSpeed = Math.sqrt(newVx**2 + newVy**2);
                    let targetSpeed = 16; 
                    if (currentSpeed > 0) {
                        bey.vx = (newVx / currentSpeed) * targetSpeed;
                        bey.vy = (newVy / currentSpeed) * targetSpeed;
                    }

					// 5. Leave a fiery spark trail along the curve!
                    if (window.particles) {
                        window.particles.push({
                            x: bey.x + (Math.random() - 0.5) * 10, // Slight spread around the Bey
                            y: bey.y + (Math.random() - 0.5) * 10,
                            vx: (Math.random() - 0.5) * 2, // Slow drift for the sparks
                            vy: (Math.random() - 0.5) * 2,
                            life: 1.0, 
                            decay: 0.04 + Math.random() * 0.04, // Fades out over time
                            color: Math.random() > 0.5 ? '#ffcc00' : '#ff4400', // Gold or Orange
                            size: Math.random() * 3 + 2
                        });
                    }

                    state.cycloneTimer -= dt;
                } else {
                    // When the 400ms timer is up, the 360 loop is finished!
                    state.actionState = "NORMAL";
					// Instantly halve the momentum so it stabilizes!
                    bey.vx *= 0.5;
                    bey.vy *= 0.5;
                }
            }

            // --- THE COLLISION EVENT HOOKS ---
            if (isColliding) {
                state.timeSinceCollision = 0;
                if (state.peakActive) this.removePeak(bey);

                // PASSIVE: Spin Steal
                if (bey.passives && bey.passives.includes("Spin Steal")) {
                    if (opponent.currentRpm > bey.currentRpm) {
                        bey.currentRpm += 2;
                        opponent.currentRpm -= 2;
                        if (Math.random() < 0.1) {
                            bey.activeAura = "rgba(0, 255, 255, 0.8)";
                            bey.activeAuraDuration = 400;
                        }
                    }
                }
				
				// PASSIVE: Recoil Rebounder
                if (bey.passives && bey.passives.includes("Recoil Rebounder")) {
                    if (state.recoilRebounderCd <= 0) {
                        // 1. Set the Timers (7s buff, 28s cooldown)
                        state.recoilRebounderTimer = 7000; 
                        state.recoilRebounderCd = 28000;
                        
                        // 2. Calculate the 6% stat boosts
                        state.rrSpdBonus = (bey.stats.speed || 0) * 0.06;
                        state.rrAtkBonus = (bey.stats.attack || 0) * 0.06;
                        
                        // 3. Apply the Buffs! (+Speed, +Attack, +10% KB Resist, +2% RPM Resist)
                        bey.stats.speed = (bey.stats.speed || 0) + state.rrSpdBonus;
                        bey.stats.attack = (bey.stats.attack || 0) + state.rrAtkBonus;
                        bey.stats.knockbackResist = (bey.stats.knockbackResist || 0) + 0.10;
                        bey.stats.rpmDamageResist = (bey.stats.rpmDamageResist || 0) + 0.02;
                        
                        // Glow orange so the player knows the rebounder is active
                        bey.activeAura = "rgba(255, 140, 0, 0.7)";
                        bey.activeAuraDuration = 7000;
                    }
                }

                // PASSIVE: Counterattack
                if (bey.passives && bey.passives.includes("Counterattack")) {
                    if (bey.currentHp < state.lastHp) {
                        if (Math.random() < 0.15) { 
                            let dirX = opponent.x - bey.x;
                            let dirY = opponent.y - bey.y;
                            let d = Math.max(1, Math.sqrt(dirX*dirX + dirY*dirY));
                            bey.vx = (dirX/d) * 8;
                            bey.vy = (dirY/d) * 8;
                            bey.activeAura = "rgba(255, 0, 0, 0.8)";
                            bey.activeAuraDuration = 400;
                        }
                    }
                }
                
				
                // PASSIVE: Sour Saucer (Collision Debuff)
                if (bey.passives && bey.passives.includes("Sour Saucer")) {
                    if (state.sourSaucerCd <= 0) {
                        opponent.stats.recoilReduction = (opponent.stats.recoilReduction || 0) - 6;
                        opponent.skillState.sourDebuffAmount += 6; 
                        opponent.skillState.sourDebuffTimer = 7000; 
                        state.sourSaucerCd = 21000; 
                        
                        // Opponent glows sickly green while debuffed
                        opponent.activeAura = "rgba(0, 255, 0, 0.6)";
                        opponent.activeAuraDuration = 7000;
                    }
                }
                
            } else {
                state.timeSinceCollision += dt;
            }
            
            state.lastHp = bey.currentHp;

            // --- TIMED EFFECTS ---
            if (state.wispBurnTimer > 0) {
                state.wispBurnTimer -= dt;
                bey.currentRpm -= 0.5; 
                // Gentle purple flicker while burning
                if (Math.random() < 0.2) { bey.passiveAura = "rgba(148, 0, 211, 0.6)"; }
            }

            if (state.defenseBoostTimer > 0) {
                state.defenseBoostTimer -= dt;
                if (state.defenseBoostTimer <= 0) {
                    bey.stats.defense -= 50; 
                    bey.stats.recoilReduction -= 50;
                }
            }
			
			if (state.impactBoostTimer > 0) {
                state.impactBoostTimer -= dt;
                if (state.impactBoostTimer <= 0) {
                    bey.stats.recoilReduction -= 20;
					bey.stats.knockbackPower -= 0.2; 
                }
            }
			
			// --- RECOIL REBOUNDER CLEANUP ---
            if (state.recoilRebounderCd > 0) state.recoilRebounderCd -= dt;
            
            if (state.recoilRebounderTimer > 0) {
                state.recoilRebounderTimer -= dt;
                if (state.recoilRebounderTimer <= 0) {
                    // Time's up! Strip the buffs away.
                    bey.stats.speed -= state.rrSpdBonus;
                    bey.stats.attack -= state.rrAtkBonus;
                    bey.stats.knockbackResist -= 0.10;
                    bey.stats.rpmDamageResist -= 0.02;
                }
            }
			
			// --- METEOR DASH DEBUFF CLEANUP ---
            if (state.meteorDebuffTimer > 0) {
                state.meteorDebuffTimer -= dt;
                
                // When the 7 seconds are up, give the Endurance back!
                if (state.meteorDebuffTimer <= 0) {
                    bey.stats.endurance += state.meteorEndPenalty;
                    state.meteorEndPenalty = 0; // Reset the tracker
                }
            }
			
			// --- PASSIVE: ROLLBACK DRIFT STEERING & CLEANUP ---
            if (state.rollbackTimer > 0) {
                state.rollbackTimer -= dt;
                
                // The actual "Drift" physics (only lasts a fraction of a second after a heavy hit)
                if (state.driftForceTimer > 0) {
                    state.driftForceTimer -= dt;
                    
                    let driftX = 0, driftY = 0;
                    let liveJoyX = isPlayer ? joyX : 0;
                    let liveJoyY = isPlayer ? joyY : 0;

                    // If a direction is held, target that direction!
                    if (liveJoyX !== 0 || liveJoyY !== 0) {
                        driftX = liveJoyX;
                        driftY = liveJoyY;
                    } else {
                        // If no direction is held, drift back toward the exact center of the arena
                        let cx = window.innerWidth / 2;
                        let cy = window.innerHeight / 2;
                        let dcX = cx - bey.x;
                        let dcY = cy - bey.y;
                        let dist = Math.max(1, Math.sqrt(dcX*dcX + dcY*dcY));
                        driftX = dcX / dist;
                        driftY = dcY / dist;
                    }

                    // Apply a strong, persistent force to fight the knockback trajectory
                    bey.vx += driftX * 1.2; 
                    bey.vy += driftY * 1.2;
                }

                // When the 8 seconds are up, strip the buffs!
                if (state.rollbackTimer <= 0) {
                    bey.stats.attack -= state.rdAtkBonus;
                    bey.stats.endurance -= state.rdEndBonus;
                    bey.stats.rpmDamageResist -= 0.04;
                }
            }

            if (state.barrageDashesLeft > 0) {
                state.barrageDashTimer -= dt;
                
                // When the timer hits 0, fire the next dash!
                if (state.barrageDashTimer <= 0) {
                    let dX, dY;
                    
                    // Grab the LIVE joystick input (or 0 if it's the CPU)
                    let liveJoyX = isPlayer ? joyX : 0;
                    let liveJoyY = isPlayer ? joyY : 0;

                    // If the player is pushing a direction, dash that way!
                    if (liveJoyX !== 0 || liveJoyY !== 0) {
                        dX = liveJoyX;
                        dY = liveJoyY;
                    } else {
                        // If no direction is pressed (or it's the CPU), auto-target the opponent
                        let oppX = opponent.x - bey.x;
                        let oppY = opponent.y - bey.y;
                        let dist = Math.max(1, Math.sqrt(oppX*oppX + oppY*oppY));
                        dX = oppX / dist;
                        dY = oppY / dist;
                    }

                    // Overwrite velocity for a sudden, sharp dash
                    bey.vx = dX * 7; 
                    bey.vy = dY * 7;

                    // Deduct one dash, and set the timer for 200ms for the next one
                    state.barrageDashesLeft--;
                    state.barrageDashTimer = 200; 
                }
            }
            
            if (state.sourSaucerCd > 0) state.sourSaucerCd -= dt;
            
            if (state.sourDebuffTimer > 0) {
                state.sourDebuffTimer -= dt;
                if (state.sourDebuffTimer <= 0) {
                    bey.stats.recoilReduction += state.sourDebuffAmount;
                    state.sourDebuffAmount = 0;
                }
            }
			
			// --- BOSS HOSTILITY WISPY AURA ---
            if (state.bossHostilityAuraTimer > 0) {
                state.bossHostilityAuraTimer -= dt;
                
                // 1. The Solid Base Aura (Stays on as long as the timer is running)
                bey.passiveAura = "rgba(214, 17, 17, 0.8)"; // Red base glow
				bey.passiveAuraSize = 0.50;
                
                // 2. The Wispy Particles (Peeling off the base glow)
                if (Math.random() < 0.15 && window.particles) {
                    let ang = Math.random() * Math.PI * 2;
                    let driftSpeed = Math.random() * 1.015 + 0.5; 
                    let activeRadius = (bey.visualRadius || bey.radius || 15) + 4;
					let spawnAngle = Math.random() * Math.PI * 2;
					let edgeX = bey.x + Math.cos(spawnAngle) * activeRadius;
                    let edgeY = bey.y + Math.sin(spawnAngle) * activeRadius;
					let outwardVx = Math.cos(spawnAngle) * driftSpeed;
                    let outwardVy = Math.sin(spawnAngle) * driftSpeed;
                    
                    window.particles.push({
                        x: edgeX, // Start exactly on the perimeter
                        y: edgeY,
                        vx: (bey.vx * 0.4) + outwardVx, 
                        vy: (bey.vy * 0.4) + outwardVy,
                        life: 1.0, 
                        decay: 0.02 + Math.random() * 0.02, 
                        color: '#861720', // Dark red wisps!
                        size: Math.random() * 3 + 2 
                    });
                }
            }

            // --- RESTORED COOLDOWNS & ORIGINAL PASSIVES ---
            if (state.critCd > 0) state.critCd -= dt;
            if (state.critActiveTimer > 0) {
                state.critActiveTimer -= dt;
                if (state.critActiveTimer <= 0) state.critActive = false;
            }
            if (state.guardCd > 0) state.guardCd -= dt;

            if (bey.passives && bey.passives.includes("Engine Activation") && !state.engineUsed) {
                if (bey.currentRpm <= bey.maxRpm * 0.5) {
                    bey.currentRpm += 350;
                    bey.stats.mobility = (bey.stats.mobility || 0) + 6;
                    state.engineUsed = true;
                    bey.activeAura = "rgba(0, 255, 255, 0.9)";
                    bey.activeAuraDuration = 2000;
                }
            }

            if (bey.passives && bey.passives.includes("Peak Performance")) {
                if (state.timeSinceCollision >= 8000 && !state.peakActive) {
                    bey.stats.speed = (bey.stats.speed || 0) + 6;
                    bey.stats.balance = (bey.stats.balance || 0) + 10;
                    bey.stats.endurance = (bey.stats.endurance || 0) + 12;
                    state.peakActive = true;
                }
            }

            if (bey.passives && bey.passives.includes("High Speed Recoil Reduction")) {
                let currentVel = Math.sqrt(bey.vx**2 + bey.vy**2);
                let threshold = (bey.stats.speed || 0) * 0.00425 * 0.7; 
                
                if (currentVel >= threshold && !state.highSpeedActive) {
                    bey.stats.recoilReduction = (bey.stats.recoilReduction || 0) + 20;
                    state.highSpeedActive = true;
                } else if (currentVel < threshold && state.highSpeedActive) {
                    bey.stats.recoilReduction -= 20;
                    state.highSpeedActive = false;
                }
            }
            
            if (bey.passives && bey.passives.includes("Hyper Aggression")) {
                let isAboveThreshold = bey.currentRpm > (bey.maxRpm * 0.80);
                
                if (isAboveThreshold && !state.hyperAggressionActive) {
                    state.haAtkBonus = (bey.stats.attack || 0) * 0.10;
                    state.haSpdBonus = (bey.stats.speed || 0) * 0.08;
                    state.haDefPenalty = (bey.stats.defense || 0) * 0.08;
                    
                    bey.stats.attack = (bey.stats.attack || 0) + state.haAtkBonus;
                    bey.stats.speed = (bey.stats.speed || 0) + state.haSpdBonus;
                    bey.stats.defense = (bey.stats.defense || 0) - state.haDefPenalty;
                    
                    state.hyperAggressionActive = true;
                } 
                else if (!isAboveThreshold && state.hyperAggressionActive) {
                    bey.stats.attack -= state.haAtkBonus;
                    bey.stats.speed -= state.haSpdBonus;
                    bey.stats.defense += state.haDefPenalty;
                    
                    state.hyperAggressionActive = false;
                }
            }

// --- PHANTOM WARP PHYSICS & PARTICLES ---
            if (state.actionState === "TELEPORT_OUT") {
                bey.vx = 0; bey.vy = 0; // Completely freeze
                state.tpTimer -= dt;
                
                // When the dissolve timer hits 0...
                if (state.tpTimer <= 0) {
                    state.actionState = "TELEPORT_AIM";
                    state.tpTimer = 3000; // You have 3 seconds to aim before it forces the teleport!
                    
                    // 💥 EXPLODE INTO BLACK PARTICLES!
                    if (window.particles) {
                        for(let i=0; i<40; i++) {
                            let ang = Math.random() * Math.PI * 2;
                            let spd = Math.random() * 3 + 1;
                            window.particles.push({
                                x: bey.x, y: bey.y,
                                vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,
                                life: 1.0, decay: 0.03 + Math.random() * 0.02, 
                                color: '#000000', size: Math.random() * 4 + 2
                            });
                        }
                    }
                    // Banish the actual Beyblade to the shadow realm so it can't be hit while aiming
                    bey.x = -9999; bey.y = -9999;
                }
            } 
            else if (state.actionState === "TELEPORT_AIM") {
                state.tpTimer -= dt;
                
                // Move the Reticle with the Joystick!
                if (isPlayer) {
                    state.tpTargetX += joyX * 10;
                    state.tpTargetY += joyY * 10;
                } else {
                    // CPU just picks a spot behind the player
                    state.tpTargetX = opponent.x + (opponent.vx * 10);
                    state.tpTargetY = opponent.y + (opponent.vy * 10);
                }

                // Clamp the reticle so you can't teleport outside the stadium
                let cx = window.innerWidth / 2; let cy = window.innerHeight / 2;
                let maxR = Math.min(window.innerWidth, window.innerHeight) / 2 * 0.85;
                let rDx = state.tpTargetX - cx; let rDy = state.tpTargetY - cy;
                let rDist = Math.sqrt(rDx*rDx + rDy*rDy);
                if (rDist > maxR) {
                    state.tpTargetX = cx + (rDx/rDist) * maxR;
                    state.tpTargetY = cy + (rDy/rDist) * maxR;
                }

                // Auto-trigger if time runs out, or CPU fires instantly
                if (state.tpTimer <= 0 || (!isPlayer && state.tpTimer < 2500)) {
                    this.executeAttack("Phantom Warp", bey, opponent); 
                }
            }
            else if (state.actionState === "TELEPORT_IN") {
                bey.vx = 0; bey.vy = 0; // Stay frozen while reforming
                state.tpTimer -= dt;
                
                // 🌀 SUCK BLACK PARTICLES INWARD!
                if (state.tpTimer > 200 && Math.random() < 0.6) {
                    if (window.particles) {
                        let ang = Math.random() * Math.PI * 2;
                        let dist = Math.random() * 40 + 20; // Spawn them 20-60 pixels away
                        window.particles.push({
                            x: bey.x + Math.cos(ang) * dist, 
                            y: bey.y + Math.sin(ang) * dist,
                            // Negative velocity means they fly exactly toward the center!
                            vx: -Math.cos(ang) * 4, vy: -Math.sin(ang) * 4, 
                            life: 1.0, decay: 0.06, color: '#000000', size: Math.random() * 4 + 2
                        });
                    }
                }

                if (state.tpTimer <= 0) {
                    state.actionState = "NORMAL"; // Fully reformed!
                }
            }

            // --- AERIAL LANCE (Hang Time & Plunge) ---
            if (state.actionState === "AIRBORNE_LANCE") {
                state.z = 25; 
                if (state.airLanceTimer > 0) state.airLanceTimer -= dt;
                
                if (state.airLanceTimer <= 0) {
                    state.actionState = "PLUNGING";
                    bey.activeAura = "rgba(255, 255, 255, 1.0)";
                    bey.activeAuraDuration = 400;
                }
            } else if (state.actionState === "PLUNGING") {
                state.z -= 4.0; 
                if (state.z <= 0) {
					// Ground-Pound Shockwave Effect!
                    if (window.particles) {
                        for (let i = 0; i < 15; i++) {
                            // Calculate an evenly spaced 360-degree circle
                            let angle = (Math.PI * 2 / 15) * i; 
                            let speed = 5 + Math.random() * 3; // Fast, violent outward burst
                            
                            window.particles.push({
                                x: bey.x,
                                y: bey.y,
                                vx: Math.cos(angle) * speed,
                                vy: Math.sin(angle) * speed,
                                life: 1.0, 
                                decay: 0.02 + Math.random() * 0.02, // Fades quickly
                                color: Math.random() > 0.5 ? '#00ffff' : '#ffffff', // Cyan and White
                                size: Math.random() * 4 + 2 // Chunky impact dust
                            });
                        }
                    }
                    state.z = 0;
                    state.actionState = "NORMAL";
                    
                    let distToOpp = Math.sqrt((opponent.x - bey.x)**2 + (opponent.y - bey.y)**2);
                    if (distToOpp < (bey.radius + opponent.radius + 15)) { 
                        let plungeDmg = (bey.stats.attack || 10) * 1.8; 
                        opponent.currentHp -= plungeDmg;
                        
                        let pushX = opponent.x - bey.x;
                        let pushY = opponent.y - bey.y;
                        let pushDist = Math.max(1, Math.sqrt(pushX*pushX + pushY*pushY));
                        opponent.vx += (pushX/pushDist) * 3;
                        opponent.vy += (pushY/pushDist) * 3;

                        opponent.activeAura = "rgba(255, 0, 0, 0.8)";
                        opponent.activeAuraDuration = 400;
                    }
                }
            }

            // Standard Gravity
            if (state.z > 0 && state.actionState !== "GRAPPLING" && state.actionState !== "AIRBORNE_LANCE" && state.actionState !== "PLUNGING") {
                state.z -= 0.5; 
                if (state.z <= 0) {
                    state.z = 0;
                    if (state.actionState === "AIRBORNE") state.actionState = "NORMAL";
                }
            }

            if (state.isGrappled) {
                let attacker = isPlayer ? cpu : p1;
                state.grappleTimer += dt;

                attacker.x = bey.x;
                attacker.y = bey.y;
                attacker.skillState.z = 10; 

                if (state.grappleTimer >= 1500) {
                    state.grappleTimer = 0;
                    state.grappleTicks++;
                    
                    let tickDmgHp = (attacker.stats.attack * 0.1) * 0.28;
                    let tickDmgRpm = (attacker.stats.attack * 0.3) * 0.28;
                    bey.currentHp -= Math.max(0.1, tickDmgHp - ((bey.stats.defense||0)*0.05*0.28));
                    bey.currentRpm -= Math.max(0.5, tickDmgRpm - ((bey.stats.endurance||0)*0.1*0.28));
                    
                    bey.activeAura = "rgba(255, 0, 0, 0.6)";
                    bey.activeAuraDuration = 200;

                    if (state.grappleTicks >= 5) {
                        this.disengageGrapple(attacker, bey);
                    }
                }

                if (isPlayer) {
                    document.getElementById('grapple-ui').style.display = 'block';
                    if (joyX !== 0 || joyY !== 0) {
                        let currentAngle = Math.atan2(joyY, joyX);
                        let angleDiff = Math.abs(currentAngle - state.lastJoyAngle);
                        if (angleDiff > 0.1 && angleDiff < 3.0) {
                            state.escapeProgress += 2 + ((bey.stats.mobility||0) * 0.1); 
                        }
                        state.lastJoyAngle = currentAngle;
                    }
                    document.getElementById('grapple-meter').style.width = Math.min(100, state.escapeProgress) + "%";
                } else {
                    state.escapeProgress += (0.5 + ((bey.stats.mobility||0) * 0.05));
                }

                if (state.escapeProgress >= 100) {
                    this.disengageGrapple(attacker, bey);
                }
            }
        });
    },

    onCollision: function(p1, cpu, impactSpeed) {
        if (p1.skillState.peakActive) this.removePeak(p1);
        if (cpu.skillState.peakActive) this.removePeak(cpu);
        p1.skillState.timeSinceCollision = 0;
        cpu.skillState.timeSinceCollision = 0;

        if (p1.skillState.z > 5 || cpu.skillState.z > 5) {
            if (p1.skillState.actionState === "LUNGE_HOP" && p1.skillState.z > 0 && !cpu.skillState.isGrappled) {
                this.engageGrapple(p1, cpu);
            } else if (cpu.skillState.actionState === "LUNGE_HOP" && cpu.skillState.z > 0 && !p1.skillState.isGrappled) {
                this.engageGrapple(cpu, p1);
            }
            return false; 
        }
        return true; 
    },

    onDamageTaken: function(victim, attacker, hpDmg, rpmDmg) {
        let state = victim.skillState;
        if (victim.passives && victim.passives.includes("Critical Counter") && state.critCd <= 0 && !state.critActive) {
            state.critActiveTimer = 4000; 
            state.critActive = true;
        }

        if (victim.passives && victim.passives.includes("Offensive Guard") && state.guardCd <= 0) {
            let reflectHp = hpDmg * 0.08;
            let reflectRpm = rpmDmg * 0.08;
            attacker.currentHp -= reflectHp;
            attacker.currentRpm -= reflectRpm;
            state.guardCd = 18000; 
            victim.activeAura = "rgba(128, 0, 128, 0.8)";
            victim.activeAuraDuration = 600;
        }
    },

    applyCriticalCounterDamage: function(attacker, defender, baseHpDmg, baseRpmDmg) {
        let state = attacker.skillState;
        if (state.critActive) {
            if (baseHpDmg > baseRpmDmg) {
                defender.currentHp -= (baseHpDmg * 1.2);
            } else {
                defender.currentRpm -= (baseRpmDmg * 1.2);
            }
            defender.activeAura = "rgba(255, 0, 0, 0.8)";
            defender.activeAuraDuration = 500;
            
            state.critActive = false;
            state.critActiveTimer = 0;
            state.critCd = 24000; 
            return true; 
        }
        return false;
    },

    removePeak: function(bey) {
        bey.stats.speed -= 6;
        bey.stats.balance -= 10;
        bey.stats.endurance -= 12;
        bey.skillState.peakActive = false;
    },

    engageGrapple: function(attacker, defender) {
        defender.skillState.isGrappled = true;
        defender.skillState.grappleTicks = 0;
        defender.skillState.grappleTimer = 0;
        defender.skillState.escapeProgress = 0;
        attacker.skillState.actionState = "GRAPPLING";
        attacker.stats.recoilReduction = (attacker.stats.recoilReduction || 0) + 4;
        
        defender.activeAura = "rgba(255, 0, 0, 0.8)";
        defender.activeAuraDuration = 800;
    },

    disengageGrapple: function(attacker, defender) {
        defender.skillState.isGrappled = false;
        attacker.skillState.actionState = "NORMAL";
        attacker.stats.recoilReduction -= 4; 
        
        let ui = document.getElementById('grapple-ui');
        if (ui) ui.style.display = 'none';

        let dx = attacker.x - defender.x;
        let dy = attacker.y - defender.y;
        let dist = Math.max(1, Math.sqrt(dx*dx + dy*dy));
        attacker.vx = (dx/dist) * 8; 
        attacker.vy = (dy/dist) * 8;
        attacker.skillState.z = 15; 
    },

    executeAttack: function(attackName, attacker, defender, inputX = 0, inputY = 0) {
        let dx = defender.x - attacker.x;
        let dy = defender.y - attacker.y;
        let dist = Math.max(1, Math.sqrt(dx*dx + dy*dy));
        let dirX = dx / dist;
        let dirY = dy / dist;

        if (attackName === "Aerial Lance") {
            let state = attacker.skillState;
            
            if (state.actionState === "AIRBORNE_LANCE") {
                state.airLanceTimer = 0; 
                return;
            }

            attacker.vx = -dirX * 4;
            attacker.vy = -dirY * 4;
            attacker.activeAura = "rgba(0, 255, 255, 0.8)";
            attacker.activeAuraDuration = 600;
            
            setTimeout(() => {
                attacker.vx = dirX * 5;
                attacker.vy = dirY * 5;
                state.z = 25; 
                state.actionState = "AIRBORNE_LANCE";
                state.airLanceTimer = 2000; 
            }, 300);
        }
		
		else if (attackName === "Phantom Warp") {
            let state = attacker.skillState;

            // PHASE 2: Reappear at the target!
            if (state.actionState === "TELEPORT_AIM") {
                state.actionState = "TELEPORT_IN";
                state.tpTimer = 600; // 0.6 seconds to reform the silhouette
                
                // Move the actual physical hitboxes to the new location instantly
                attacker.x = state.tpTargetX;
                attacker.y = state.tpTargetY;
                attacker.vx = 0; attacker.vy = 0;
				
				// 🔊 PLAY TELEPORT IN SOUND!
                let tpInSfx = new Audio('./audio/sounds/PhantomWarp_In.wav');
                tpInSfx.volume = 0.5;
                tpInSfx.play().catch(e => console.log("Audio blocked:", e));
				
				
            } 
            // PHASE 1: Start the dissolve!
            else if (state.actionState !== "TELEPORT_OUT" && state.actionState !== "TELEPORT_IN") {
                state.actionState = "TELEPORT_OUT";
                state.tpTimer = 600; // 0.6 seconds to dissolve into particles
                
                // Freeze the Beyblade in place
                attacker.vx = 0; attacker.vy = 0;
                
                // Set the initial aiming reticle to where the Bey currently is
                state.tpTargetX = attacker.x;
                state.tpTargetY = attacker.y;
				
				// 🔊 PLAY TELEPORT OUT SOUND!
                let tpOutSfx = new Audio('./audio/sounds/PhantomWarp_Out.wav');
                tpOutSfx.volume = 0.5;
                tpOutSfx.play().catch(e => console.log("Audio blocked:", e));
            }
        }
		
        else if (attackName === "Smash Attack") {
            let dashX = 0; 
            let dashY = 0;

            if (inputX !== 0 || inputY !== 0) {
                dashX = inputX;
                dashY = inputY;
            } 
            else {
                dashX = dirX;
                dashY = dirY;
            }

            let dashPower = 6; 
            attacker.vx += dashX * dashPower;
            attacker.vy += dashY * dashPower;
            
            attacker.activeAura = "rgba(0, 150, 255, 1.0)"; 
            attacker.activeAuraDuration = 600;
            attacker.tempRecoilReduction = 3; 
            attacker.tempDefense = 30; 
        }
		else if (attackName === "Meteor Dash") {
            
			// 🔊 PLAY BOOST DASH SOUND!
            let dashSfx = new Audio('./audio/sounds/SuperPowerDash.wav');
            dashSfx.volume = 0.5;
            dashSfx.play().catch(e => console.log("Audio blocked:", e));
			
			let dashX = 0; 
            let dashY = 0;

            if (inputX !== 0 || inputY !== 0) {
                dashX = inputX;
                dashY = inputY;
            } 
            else {
                dashX = dirX;
                dashY = dirY;
            }

            let dashPower = 7; 
            attacker.vx += dashX * dashPower;
            attacker.vy += dashY * dashPower;
            
            attacker.tempAttack = 8;
            attacker.tempRecoilReduction = 3; 
            attacker.tempDefense = 25;
			attacker.activeAuraDuration = 400;
			// --- THE 5% ENDURANCE DEBUFF ---
            // 1. Calculate 5% of their actual endurance stat
            let penalty = (attacker.stats.endurance || 0) * 0.05;
            
            // 2. Save that exact number so we know how much to give back later
            attacker.skillState.meteorEndPenalty = penalty;
            
            // 3. Subtract it from their live stats
            attacker.stats.endurance = (attacker.stats.endurance || 0) - penalty;
            
            // 4. Start the 7-second countdown!
            attacker.skillState.meteorDebuffTimer = 7000; 
            
            // --- THE ANIMATION OVERLAY ---
            attacker.activeOverlayAnim = {
                basePath: "./images/beyblade_parts/arena_props/effects/boostdash",
                frameCount: 3,
                ext: ".png",
                duration: 600,
                frameSpeed: 80,
                currentFrame: 1,
                timer: 0,
                opacity: 0.65 // <--- WE WILL USE THIS IN PART 2!
            };
        }
        else if (attackName === "Spike Attack") {
            let dashX = 0; 
            let dashY = 0;

            if (inputX !== 0 || inputY !== 0) {
                dashX = inputX;
                dashY = inputY;
            } 
            else {
                dashX = dirX;
                dashY = dirY;
            }
			
			let dashPower = 6; 
            attacker.vx += dashX * dashPower;
            attacker.vy += dashY * dashPower;
            attacker.currentHp -= 2; 
            attacker.activeAura = "rgba(255, 0, 0, 0.8)";
            attacker.activeAuraDuration = 600;
			attacker.tempAttack = 2;
            attacker.tempRecoilReduction = 1.5; 
            attacker.tempDefense = 20; 
        }
        else if (attackName === "Cross Smash") {
            let dashX = 0; 
            let dashY = 0;

            if (inputX !== 0 || inputY !== 0) {
                dashX = inputX;
                dashY = inputY;
            } 
            else {
                dashX = dirX;
                dashY = dirY;
            }

            let dashPower = 6; 
            attacker.vx += dashX * dashPower;
            attacker.vy += dashY * dashPower;
            
            attacker.activeAura = "rgba(3, 66, 215, 0.8)"; 
            attacker.activeAuraDuration = 600;
			attacker.tempAttack = 2
            attacker.tempRecoilReduction = 1; 
            attacker.tempDefense = 22;
        }
		else if (attackName === "Cross Lance") {
            let dashX = 0; 
            let dashY = 0;

            if (inputX !== 0 || inputY !== 0) {
                dashX = inputX;
                dashY = inputY;
            } 
            else {
                dashX = dirX;
                dashY = dirY;
            }
			
			let dashPower = 6; 
            attacker.vx += dashX * dashPower;
            attacker.vy += dashY * dashPower;
            attacker.currentHp -= 3; 
            attacker.activeAura = "rgba(176, 0, 0, 0.8)";
            attacker.activeAuraDuration = 600;
			attacker.tempAttack = 3; 
            attacker.tempDefense = 15; 
        }
        else if (attackName === "Barrage Attack") {
			attacker.skillState.barrageDashesLeft = 4;
			attacker.skillState.barrageDashTimer = 0;
            attacker.skillState.barrageTimer = 1500; 
            attacker.activeAura = "rgba(255, 255, 0, 0.8)";
            attacker.activeAuraDuration = 1500;
        }
        else if (attackName === "Concentrate Defense") {
            attacker.vx *= 0.1;
            attacker.vy *= 0.1;
			attacker.tempSpeed = 1 - attacker.stats.speed;
			attacker.tempMobility = 2 - attacker.stats.mobility;
            attacker.stats.defense += 50;
            attacker.stats.recoilReduction += 50;
            attacker.skillState.defenseBoostTimer = 2000;
            attacker.activeAura = "rgba(0, 0, 255, 0.8)";
            attacker.activeAuraDuration = 2000;
        }
		else if (attackName === "Concentrate Impact") {
			attacker.tempSpeed = 1;
			attacker.tempMobility = 1;
            attacker.activeAura = "rgba(236, 155, 56, 0.8)";
            attacker.activeAuraDuration = 1500;
			
			// PREVENT DOUBLE-BUFFING: Only apply the math if the buff isn't already active!
            if (!(attacker.skillState.impactBoostTimer > 0)) {
                // SAFE MATH: Fallback to 0 if the stat doesn't exist yet
                attacker.stats.recoilReduction = (attacker.stats.recoilReduction || 0) + 20;
                attacker.stats.knockbackPower = (attacker.stats.knockbackPower || 0) + 0.2;
            }
            
            // Set (or refresh) the timer
            attacker.skillState.impactBoostTimer = 1500;
        }
        else if (attackName === "Heavy Ram") {
            let weightMod = (attacker.stats.weight || 10) * 0.3;
            let dashPower = 6; 
            attacker.vx += dirX * dashPower;
            attacker.vy += dirY * dashPower;
            attacker.activeAura = "rgba(139, 69, 19, 0.8)";
            attacker.activeAuraDuration = 600;
			attacker.tempAttack = weightMod;
			attacker.tempEndurance = 3;
        }
else if (attackName === "Sharp Shooter") {
            // 1. Predict where the opponent is GOING to be (heading them off)
            // We look roughly 15 frames into the future based on their current speed
            let futureX = defender.x + (defender.vx * 15);
            let futureY = defender.y + (defender.vy * 15);
            
            // 2. Calculate the trajectory to that FUTURE position
            let leadDx = futureX - attacker.x;
            let leadDy = futureY - attacker.y;
            let leadDist = Math.max(1, Math.sqrt(leadDx*leadDx + leadDy*leadDy));
            let interceptX = leadDx / leadDist;
            let interceptY = leadDy / leadDist;

            // 3. Convert Speed stat into raw dash power
            let speedBonus = (attacker.stats.speed || 10) * 0.2;
            let dashPower = 6 + speedBonus; // Base 6 + speed scaling
            
            // 4. Fire the intercept dash! 
            // We overwrite (rather than +=) so it sharply corrects your path to nail the target
            attacker.vx = interceptX * dashPower; 
            attacker.vy = interceptY * dashPower;
            
            // 5. Visuals
            attacker.activeAura = "rgba(128, 0, 128, 0.8)";
            attacker.activeAuraDuration = 600;
        }
        else if (attackName === "Upper Attack") {
            attacker.vx = -dirX * 5;
            attacker.vy = -dirY * 5;
            attacker.activeAura = "rgba(0, 255, 0, 0.8)";
            attacker.activeAuraDuration = 600;
            setTimeout(() => {
                attacker.vx = dirX * 6;
                attacker.vy = dirY * 6;
                attacker.skillState.actionState = "UPPER_DASHING";
            }, 300);
        }
		else if (attackName === "Cyclone Loop") {
            let dashPower = 14; // Very fast initial burst
            
            // Dash toward the joystick input, or default to the opponent
            let dashX = (inputX !== 0 || inputY !== 0) ? inputX : dirX;
            let dashY = (inputX !== 0 || inputY !== 0) ? inputY : dirY;

            attacker.vx = dashX * dashPower;
            attacker.vy = dashY * dashPower;

            // Trigger the state machine
            attacker.skillState.actionState = "CYCLONE_LOOP";
            attacker.skillState.cycloneTimer = 400; // 0.4 seconds to complete the circle
            attacker.skillState.cycloneTotalTime = 400; 

            // Mint green wind aura
            attacker.activeAura = "rgba(0, 255, 150, 0.9)";
            attacker.activeAuraDuration = 400;
        }
        else if (attackName === "Grindblade Lunge") {
            attacker.wobbleFactor = 0.8; 
            attacker.activeAura = "rgba(255, 20, 147, 0.8)";
            attacker.activeAuraDuration = 800;
            setTimeout(() => {
                attacker.wobbleFactor = 0;
                attacker.vx = dirX * 6;
                attacker.vy = dirY * 6;
                attacker.skillState.z = 15; 
                attacker.skillState.actionState = "LUNGE_HOP";
            }, 500);
        }
    }
};