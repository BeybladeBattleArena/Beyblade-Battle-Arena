// skills.js

// --- 1. THE ENCYCLOPEDIA & LOGIC DB ---
window.SkillsDB = {
    passives: {
        // --- EXISTING PASSIVES ---
        "Shell Armor": {
            name: "Shell Armor",
            desc: "Increases base Defense by 3.",
            apply: function(bey) { bey.stats.defense = (bey.stats.defense || 0) + 3; }
        },
		"Recoil Rebounder": {
            name: "Recoil Rebounder",
            desc: "When a collision occurs, reduce knockback by 10% and RPM damage by 2%. Then, temporarily increase Speed and Attack by 6% for 7 seconds. Cooldown: 28s.",
            apply: function(bey) {}
        },
		"Smash Route": {
            name: "Smash Route",
            desc: "Smash Attacks that move from the outside ridge to the inside of the stadium basin gain an additional 8% Knockback Power.",
            apply: function(bey) {}
        },
		"Pace Control": {
            name: "Pace Control",
            desc: "For the opening 15 seconds of the match, RPM loss over time from stadium floor friction is reduced by 10%.",
            apply: function(bey) {} 
        },
		"Revengeance": {
            name: "Revengeance",
            desc: "If struck by an opponent while not actively engaging them, scoring a counter-collision of your own within 3 seconds boosts Knockback Power by 15% for 15 seconds.",
            apply: function(bey) {} 
        },
		"Redirection": {
            name: "Redirection",
            desc: "On collision, imparts a lateral force that alters the opponent's knockback trajectory, pushing them to the side in the direction of this Beyblade's spin.",
            apply: function(bey) {}
        },
		"Static Survival": {
            name: "Static Survival",
            desc: "While remaining close to the center of the stadium, gain an additional 10% Defense and 10% Endurance.",
            apply: function(bey) {}
        },
		"Mode Change": {
            name: "Mode Change",
            desc: "When RPM reaches below 50%, the blade base's mode change mechanism switches from a Flat tip to a Semi-Flat tip, decreasing Attack and Grip by 3%, but increasing Endurance and Stamina by 7% and Defense and Recoil Reduction by 2%.",
            apply: function(bey) {}
        },
		"Feral Friction": {
            name: "Feral Friction",
            desc: "Upon collision with an enemy, gain 2 Mobility, 5% Attack, and 2% Recoil Reduction. This effect wears off in 4 seconds unless another collision occurs. Does not stack.",
            apply: function(bey) {}
        },
		"Relentless": {
            name: "Relentless",
            desc: "Scoring a chain of collisions within 3 seconds of each other grants +2% Attack and +1% Recoil Reduction per hit (Max 5 stacks). If 5 seconds pass without a collision, all stacks are lost.",
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
		"Ridge Rider": {
            name: "Ridge Rider",
            desc: "While traveling on the outer ridge (outside the stadium basin), gain an additional 12% Mobility and 8% Speed.",
            apply: function(bey) {} // Active logic handled in the update loop
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
            apply: function(bey) {}
        },
		"Evasive Contact": {
            name: "Evasive Contact",
            desc: "Glancing collisions (sideswipes and off-center hits) deal 10% less damage to this Beyblade's RPM.",
            apply: function(bey) {} // Active logic handled in the collision hook
        },
        "Spin Steal": {
            name: "Spin Steal",
            desc: "When colliding with an opponent who spins in the opposite direction and has a higher RPM, instantly absorb some of their spin energy.",
            apply: function(bey) {} 
        },
        "Wall Rebound Assist": {
            name: "Wall Rebound Assist",
            desc: "Hitting the arena wall acts as a springboard, launching you back into the center with increased speed.",
            apply: function(bey) {} 
        },
		"Rebound Guard": {
            name: "Rebound Guard",
            desc: "Self-bounce is reduced slightly on clean, direct hits to the opponent.",
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
            desc: "While current RPM is above 80%, gain a 10% boost to Attack and an 8% boost to Speed, but reduce Defense by 8%.",
            apply: function(bey) {} 
        },
		"Late Surge": {
            name: "Late Surge",
            desc: "When RPM goes below 60%, gain an additional 2% Speed and 5% Knockback Power.",
            apply: function(bey) {} 
        },
		"Impact Dampening": {
            name: "Impact Dampening",
            desc: "Specialized shock-absorbing material in the blade base permanently increases Defense by 2%, slightly reducing HP loss from all impacts.",
            apply: function(bey) {
                bey.stats.defense = (bey.stats.defense || 0) + ((bey.stats.defense || 0) * 0.02);
            }
        },
		"Alter Approach (Flat)": {
            name: "Alter Approach (Flat)",
            desc: "Depending on manually prepared settings before the match starts, gain an additional 4% Attack and 3% Speed when a round begins. (Flat mode active).",
            apply: function(bey) {} 
        },
		"Alter Approach (Semi-Flat)": {
            name: "Alter Approach (Semi-Flat)",
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
		"Charge Dash": {
            name: "Charge Dash", cd: 8,
            desc: "Hold the skill button to charge power. Releasing unleashes a dash that scales in speed, attack, and knockback over 3 levels.",
            execute: function(attacker, defender) {
                // Brake hard so the beyblade doesn't wander off while charging
                attacker.vx *= 0.5;
                attacker.vy *= 0.5;
            }
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
            desc: "A heavy, straightforward burst of speed designed to slam the opponent. Great for knockouts.",
            execute: function() {}
        },
        "Spike Attack": {
            name: "Spike Attack", cd: 4,
            desc: "A razor-sharp, aggressive lunge that deals higher damage but incurs slightly higher self-recoil.",
            execute: function() {}
        },
        "Upper Attack": {
            name: "Upper Attack", cd: 6,
            desc: "Pulls back briefly before delivering a scooping upward dash. Potentially destabilizes the opponent.",
            execute: function() {}
        },
        "Barrage Attack": {
            name: "Barrage Attack", cd: 6,
            desc: "Executes a rapid flurry of high speed movements to overwhelm the opponent.",
            execute: function() {}
        },
		"Cyclone Loop": {
            name: "Cyclone Loop", cd: 6,
            desc: "Execute a tight offensive loop in the same direction as the beyblade's forward spin.",
            execute: function() {}
        },
		"Ridge Uppercut": {
            name: "Ridge Uppercut", cd: 8,
            desc: "Winds up briefly in reverse before launching a tilted, forward dash. Opponents struck are popped into the air and briefly stunned.",
            execute: function() {}
        },
		"Spin Burst": {
            name: "Spin Burst", cd: 8,
            desc: "Charge the force of the beyblade's spin energy into a projectile. Beware, you are anchored while this skill charges. This skill is powerful, buy requires the beyblade's RPM to power it.",
			//no internal function, this is handled entirely by arena.html; tweak skill variables there
        },
		"Extreme Speed": {
            name: "Extreme Speed", cd: 7,
            desc: "A blindingly fast, bullet-like dash that leaves very little time for the opponent to react.",
            execute: function() {} 
        },
		"Side Swipe": {
            name: "Side Swipe", cd: 6,
            desc: "Leap a short distance in the chosen direction, hesitate briefly, and then follows up with a longer distance leap in a new chosen direction.",
            execute: function() {} 
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
                
				smashBoostTimer: 0,
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
				feralTimer: 0,
                feralActive: false,
                ffAtkBonus: 0,
                ffRecBonus: 0,
				revWindowTimer: 0,
                revBuffTimer: 0,
                revActive: false,
                pcTimer: 0,
                pcActive: false,
                rgTimer: 0,
                rgActive: false,
                ecTimer: 0,
                ecActive: false,
				rrActive: false,
                rrSpdBonus: 0,
                rrMobBonus: 0,
				redirectCd: 0,
				smashRouteTimer: 0,
                smashRouteActive: false,
				ssActive: false,
                ssDefBonus: 0,
                ssEndBonus: 0,
				relStacks: 0,
                relWindowTimer: 0,
                relDropTimer: 0,
                relAtkTotal: 0,
                relRecTotal: 0,
				sideSwipeTimer: 0,
				chargeTimer: 0,
                chargeLevel: 1,
                chargeDashBuffTimer: 0,
                cdAtkBuff: 0,
                cdKbBuff: 0,
				esDashTimer: 0,
                esStopTimer: 0,
				ruTimer: 0,
                ruTargetX: 0,
                ruTargetY: 0,
                airborneStunTimer: 0,
                isAirborneStunned: false,
                visualTiltX: 0, // Your renderer can read these to tilt the sprite!
                visualTiltY: 0,
                
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
				// NEW: Pace Control 15-Second Wind Up!
                if (bey.passives.includes("Pace Control")) {
                    bey.skillState.pcTimer = 15000; // 15 seconds
                    bey.skillState.pcActive = true;
                    
                    // We set a multiplier to 0.90 (which reduces the friction by 10%)
                    bey.stats.passiveRPMDrainMod = 0.90; 
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
                    
                    // 1. Normalize the spin directions (fallback to 1/Right Spin if undefined)
                    let mySpin = bey.spinDir || 1;
                    let oppSpin = opponent.spinDir || 1;
                    
                    // 2. The Check: Are they spinning in opposite directions?
                    if (mySpin !== oppSpin) {
                        
                        // 3. The original RPM check
                        if (opponent.currentRpm > bey.currentRpm) {
                            bey.currentRpm += 2;
                            opponent.currentRpm -= 2;
                            
                            // Flash a cyan aura occasionally to show the steal happening
                            if (Math.random() < 0.1) {
                                bey.activeAura = "rgba(0, 255, 255, 0.8)";
                                bey.activeAuraDuration = 400;
                            }
                        }
                    }
                }
				
				// PASSIVE: Redirection
                if (bey.passives && bey.passives.includes("Redirection")) {
                    
                    // Only trigger once per collision event
                    if (state.redirectCd <= 0) {
                        
                        // 1. Calculate the standard "Normal" vector (center-to-center)
                        let dx = opponent.x - bey.x;
                        let dy = opponent.y - bey.y;
                        let dist = Math.max(1, Math.sqrt(dx*dx + dy*dy));
                        let nx = dx / dist;
                        let ny = dy / dist;
                        
                        // 2. Read the spin direction (1 for Right/CW, -1 for Left/CCW)
                        let mySpin = bey.spinDir || 1; 
                        
                        // 3. Calculate the Tangent Vector (90 degrees sideways)
                        // By multiplying by mySpin, it automatically flips the sideways push for Left-Spin beys!
                        let tangentX = -ny * mySpin;
                        let tangentY = nx * mySpin;
                        
                        // 4. Calculate the redirection force (Base of 4, plus scaling off Knockback Power)
                        let redirectForce = 4 + ((bey.stats.knockbackPower || 0) * 8);
                        
                        // 5. Shove the opponent sideways!
                        opponent.vx += tangentX * redirectForce;
                        opponent.vy += tangentY * redirectForce;
                        
                        // Set a 400ms cooldown so it doesn't multi-trigger during overlapping frames
                        state.redirectCd = 400;
                        
                        // Optional: A quick white flash to visually emphasize the parry/deflection
                        bey.activeAura = "rgba(255, 255, 255, 0.7)";
                        bey.activeAuraDuration = 200;
                    }
                }
				
				// PASSIVE: Revengeance
                if (bey.passives && bey.passives.includes("Revengeance")) {
                    
                    // --- VECTOR MATH: WHO IS HITTING WHO? ---
                    // 1. Get the physical distance and angles between the two Beyblades
                    let dx = opponent.x - bey.x;
                    let dy = opponent.y - bey.y;
                    let dist = Math.max(1, Math.sqrt(dx*dx + dy*dy));
                    
                    // 2. Normalize our speed and calculate our "Heading" vs the Opponent
                    let mySpeed = Math.max(0.1, Math.sqrt(bey.vx**2 + bey.vy**2));
                    let myHeading = ((bey.vx/mySpeed) * (dx/dist)) + ((bey.vy/mySpeed) * (dy/dist));
                    
                    // 3. Normalize their speed and calculate their "Heading" vs Us
                    let oppSpeed = Math.max(0.1, Math.sqrt(opponent.vx**2 + opponent.vy**2));
                    let oppHeading = ((opponent.vx/oppSpeed) * (-dx/dist)) + ((opponent.vy/oppSpeed) * (-dy/dist));
                    
                    // A heading > 0.5 means the Beyblade is traveling within roughly 60 degrees of dead-center toward the target.
                    let isMovingToward = myHeading > 0.5; 
                    let isOppMovingToward = oppHeading > 0.5;

                    // --- THE REVENGE LOGIC ---
                    // SCENARIO A: We have the 3-second window open, AND we just hit them back!
                    if (state.revWindowTimer > 0 && isMovingToward) {
                        
                        // Apply the 15% knockback buff!
                        if (!state.revActive) {
                            bey.stats.knockbackPower = (bey.stats.knockbackPower || 0) + 0.15;
                            state.revActive = true;
                        }
                        
                        state.revBuffTimer = 15000; // Start the 15-second buff
                        state.revWindowTimer = 0;   // Close the revenge window
                        
                        // Glow dark red to signal the anger buff!
                        bey.activeAura = "rgba(139, 0, 0, 0.8)"; 
                        bey.activeAuraDuration = 1000;
                    }
                    // SCENARIO B: We just got sucker-punched!
                    // Opponent is moving toward us, and we are NOT moving toward them.
                    else if (isOppMovingToward && !isMovingToward) {
                        state.revWindowTimer = 3000; // Open the 3-second window to strike back!
                    }
                }
				
				// PASSIVE: Relentless
                if (bey.passives && bey.passives.includes("Relentless")) {
                    
                    // 1. Did we hit them within the 3-second combo window?
                    if (state.relWindowTimer > 0) {
                        
                        // 2. Do we have less than 5 stacks? Add one!
                        if (state.relStacks < 5) {
                            
                            // Find the true base stats (current stat minus what this skill already added)
                            let baseAtk = (bey.stats.attack || 0) - state.relAtkTotal;
                            let baseRec = (bey.stats.recoilReduction || 0) - state.relRecTotal;
                            
                            let atkBonus = baseAtk * 0.02;
                            let recBonus = baseRec * 0.01;
                            
                            // Apply the stats!
                            bey.stats.attack = (bey.stats.attack || 0) + atkBonus;
                            bey.stats.recoilReduction = (bey.stats.recoilReduction || 0) + recBonus;
                            
                            // Log the totals so we can delete them later
                            state.relAtkTotal += atkBonus;
                            state.relRecTotal += recBonus;
                            
                            state.relStacks++;
                        }
                    }
                    
                    // 3. ALWAYS refresh the 3-second combo window on EVERY hit!
                    state.relWindowTimer = 3000; 
                    
                    // 4. If we have ANY stacks, refresh the 5-second survival timer!
                    if (state.relStacks > 0) {
                        state.relDropTimer = 5000;
                        
                        // Flash a fiery red aura that gets larger with more stacks!
                        bey.activeAura = "rgba(255, 30, 0, 0.8)";
                        bey.activeAuraDuration = 200 + (state.relStacks * 50); 
                    }
                }
				
				// PASSIVE: Evasive Contact
                if (bey.passives && bey.passives.includes("Evasive Contact")) {
                    
                    // 1. Calculate distance and angles
                    let dx = opponent.x - bey.x;
                    let dy = opponent.y - bey.y;
                    let dist = Math.max(1, Math.sqrt(dx*dx + dy*dy));
                    
                    // 2. Calculate the OPPONENT'S heading toward us
                    // We use -dx and -dy because we want to know their angle relative to our center
                    let oppSpeed = Math.max(0.1, Math.sqrt(opponent.vx**2 + opponent.vy**2));
                    let oppHeading = ((opponent.vx/oppSpeed) * (-dx/dist)) + ((opponent.vy/oppSpeed) * (-dy/dist));
                    
                    // 3. If their heading is less than 0.6, they are grazing/sideswiping us!
                    if (oppHeading < 0.6) {
                        
                        // Give them 200ms of extra RPM Damage Resistance 
                        state.ecTimer = 200; 
                        
                        if (!state.ecActive) {
                            // Boost RPM Damage Resistance by 10% (0.10)
                            bey.stats.rpmDamageResist = (bey.stats.rpmDamageResist || 0) + 0.10;
                            state.ecActive = true;
                            
                            // Flash a swift, elusive blue aura to show the graze
                            bey.activeAura = "rgba(0, 100, 255, 0.6)";
                            bey.activeAuraDuration = 200;
                        }
                    }
                }
				
				// PASSIVE: Rebound Guard
                if (bey.passives && bey.passives.includes("Rebound Guard")) {
                    
                    // 1. Calculate the distance and angle to the opponent
                    let dx = opponent.x - bey.x;
                    let dy = opponent.y - bey.y;
                    let dist = Math.max(1, Math.sqrt(dx*dx + dy*dy));
                    
                    // 2. Calculate our heading
                    let mySpeed = Math.max(0.1, Math.sqrt(bey.vx**2 + bey.vy**2));
                    let myHeading = ((bey.vx/mySpeed) * (dx/dist)) + ((bey.vy/mySpeed) * (dy/dist));
                    
                    // 3. If heading > 0.75, it's a clean, direct strike!
                    if (myHeading > 0.75) {
                        
                        // Give them 200ms (roughly 12 frames) of extra Knockback Resist 
                        // This guarantees the physics engine sees the buff while resolving the bounce!
                        state.rgTimer = 200; 
                        
                        if (!state.rgActive) {
                            // Boost knockback resistance by 6%
                            bey.stats.knockbackResist = (bey.stats.knockbackResist || 0) + 0.06;
                            state.rgActive = true;
                            
                            // Flash a sharp silver aura to show the guard absorbing the shock
                            bey.activeAura = "rgba(192, 192, 192, 0.8)";
                            bey.activeAuraDuration = 200;
                        }
                    }
                }
				
				// PASSIVE: Feral Friction
                if (bey.passives && bey.passives.includes("Feral Friction")) {
                    
                    // 1. ALWAYS refresh the timer on hit, whether the buff is new or old!
                    state.feralTimer = 4000; 

                    // 2. If the buff ISN'T active yet, do the math and turn it on!
                    if (!state.feralActive) {
                        // Calculate the percentages
                        state.ffAtkBonus = (bey.stats.attack || 0) * 0.05;
                        state.ffRecBonus = (bey.stats.recoilReduction || 0) + 2;

                        // Apply the flat stats and the percentages
                        bey.stats.mobility = (bey.stats.mobility || 0) + 2;
                        bey.stats.attack = (bey.stats.attack || 0) + state.ffAtkBonus;
                        bey.stats.recoilReduction = (bey.stats.recoilReduction || 0) + state.ffRecBonus;
                        
                        state.feralActive = true;
                    }
                    
                    // Give it a fierce reddish-orange glow while active!
                    bey.activeAura = "rgba(255, 69, 0, 0.6)";
                    bey.activeAuraDuration = state.feralTimer; 
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
			
			if (state.smashBoostTimer > 0) {
                state.smashBoostTimer -= dt;
                if (state.smashBoostTimer <= 0) {
					bey.stats.knockbackPower -= 0.3; 
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
			
			// --- REVENGEANCE TIMERS & CLEANUP ---
            if (state.revWindowTimer > 0) {
                state.revWindowTimer -= dt;
            }

            if (state.revBuffTimer > 0) {
                state.revBuffTimer -= dt;
                
                // When the 15 seconds run out, strip the knockback buff!
                if (state.revBuffTimer <= 0 && state.revActive) {
                    bey.stats.knockbackPower -= 0.15;
                    state.revActive = false;
                }
            }
			
			// --- FERAL FRICTION CLEANUP ---
            if (state.feralTimer > 0) {
                state.feralTimer -= dt;
                
                // If the timer hits 0 AND the buff is still attached, strip it away!
                if (state.feralTimer <= 0 && state.feralActive) {
                    bey.stats.mobility -= 2;
                    bey.stats.attack -= state.ffAtkBonus;
                    bey.stats.recoilReduction -= state.ffRecBonus;
                    
                    state.feralActive = false;
                }
            }
			
			// --- REBOUND GUARD CLEANUP ---
            if (state.rgTimer > 0) {
                state.rgTimer -= dt;
                
                if (state.rgTimer <= 0 && state.rgActive) {
                    bey.stats.knockbackResist -= 0.06;
                    state.rgActive = false;
                }
            }
			
			// --- PACE CONTROL TIMER & CLEANUP ---
            if (state.pcTimer > 0) {
                state.pcTimer -= dt;
                
                // Optional: A slow, calming green pulse so the player knows Pace Control is active!
                if (Math.random() < 0.05) {
                    bey.activeAura = "rgba(0, 255, 100, 0.3)";
                    bey.activeAuraDuration = 400;
                }

                // When the 15 seconds run out, return floor friction to normal (1.0)
                if (state.pcTimer <= 0 && state.pcActive) {
                    bey.stats.passiveRPMDrainMod = 1.0;
                    state.pcActive = false;
                }
            }
			
			// --- EVASIVE CONTACT CLEANUP ---
            if (state.ecTimer > 0) {
                state.ecTimer -= dt;
                
                if (state.ecTimer <= 0 && state.ecActive) {
                    bey.stats.rpmDamageResist -= 0.10;
                    state.ecActive = false;
                }
            }
			
			// --- REDIRECTION COOLDOWN ---
            if (state.redirectCd > 0) {
                state.redirectCd -= dt;
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
			
			// --- RELENTLESS TIMERS & CLEANUP ---
            if (state.relWindowTimer > 0) {
                state.relWindowTimer -= dt;
            }

            if (state.relDropTimer > 0) {
                state.relDropTimer -= dt;
                
                // If 5 seconds pass without a hit, they lose momentum! Strip all stacks.
                if (state.relDropTimer <= 0 && state.relStacks > 0) {
                    
                    bey.stats.attack -= state.relAtkTotal;
                    bey.stats.recoilReduction -= state.relRecTotal;
                    
                    // Reset the trackers back to zero
                    state.relStacks = 0;
                    state.relAtkTotal = 0;
                    state.relRecTotal = 0;
                }
            }
			
			// --- SMASH ROUTE CLEANUP ---
            if (state.smashRouteTimer > 0) {
                state.smashRouteTimer -= dt;
                
                if (state.smashRouteTimer <= 0 && state.smashRouteActive) {
                    bey.stats.knockbackPower -= 0.08;
                    state.smashRouteActive = false;
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
			
			// --- PASSIVE: Static Survival ---
            if (bey.passives && bey.passives.includes("Static Survival")) {
                
                // 1. Find the exact center of the arena
                let cx = window.innerWidth / 2;
                let cy = window.innerHeight / 2;
                
                // 2. Calculate the Beyblade's distance from the center
                let distFromCenter = Math.sqrt((bey.x - cx)**2 + (bey.y - cy)**2);
                
                // 3. Define the "Center Zone" (the inner 25% of the arena's radius)
                let maxR = Math.min(window.innerWidth, window.innerHeight) / 2 * 0.85;
                let centerRadius = maxR * 0.25; 
                
                let isInsideCenter = distFromCenter <= centerRadius;
                
                // 4. Toggle the Buffs!
                if (isInsideCenter && !state.ssActive) {
                    
                    // Calculate the 10% bonuses
                    state.ssDefBonus = (bey.stats.defense || 0) * 0.10;
                    state.ssEndBonus = (bey.stats.endurance || 0) * 0.10;
                    
                    // Apply them
                    bey.stats.defense = (bey.stats.defense || 0) + state.ssDefBonus;
                    bey.stats.endurance = (bey.stats.endurance || 0) + state.ssEndBonus;
                    
                    state.ssActive = true;
                } 
                else if (!isInsideCenter && state.ssActive) {
                    
                    // Strip the exact bonuses away if they get knocked out of the center!
                    bey.stats.defense -= state.ssDefBonus;
                    bey.stats.endurance -= state.ssEndBonus;
                    
                    state.ssActive = false;
                }
                
                // Optional: A steady, golden protective glow while fortified in the center
                if (state.ssActive && Math.random() < 0.1) {
                    bey.passiveAura = "rgba(255, 215, 0, 0.4)"; 
                }
            }
			
			// --- PASSIVE: Ridge Rider ---
            if (bey.passives && bey.passives.includes("Ridge Rider")) {
                
                // 1. Find the center of the arena
                let cx = window.innerWidth / 2;
                let cy = window.innerHeight / 2;
                
                // 2. Calculate the Beyblade's distance from the exact center
                let distFromCenter = Math.sqrt((bey.x - cx)**2 + (bey.y - cy)**2);
                
                // 3. Define the "Basin". (Assuming the arena fills 85% of the screen, we'll say the outer 50% is the ridge)
                let maxR = Math.min(window.innerWidth, window.innerHeight) / 2 * 0.85;
                let basinRadius = maxR * 0.50; // Anything further out than this is the Ridge!
                
                let isOutsideBasin = distFromCenter > basinRadius;
                
                // 4. Toggle the Buffs!
                if (isOutsideBasin && !state.rrActive) {
                    
                    // Calculate the bonuses
                    state.rrSpdBonus = (bey.stats.speed || 0) * 0.08;
                    state.rrMobBonus = (bey.stats.mobility || 0) * 0.12;
                    
                    // Apply them
                    bey.stats.speed = (bey.stats.speed || 0) + state.rrSpdBonus;
                    bey.stats.mobility = (bey.stats.mobility || 0) + state.rrMobBonus;
                    
                    state.rrActive = true;
                } 
                else if (!isOutsideBasin && state.rrActive) {
                    
                    // Strip the exact bonuses away once they dip back into the center
                    bey.stats.speed -= state.rrSpdBonus;
                    bey.stats.mobility -= state.rrMobBonus;
                    
                    state.rrActive = false;
                }
                
                // Optional: A faint orange wind trail while actively riding the ridge
                if (state.rrActive && Math.random() < 0.2) {
                    bey.passiveAura = "rgba(255, 140, 0, 0.4)";
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
			
			if (bey.passives && bey.passives.includes("Late Surge")) {
                let isBelowThreshold = bey.currentRpm < (bey.maxRpm * 0.60);
                
                if (isBelowThreshold && !state.lateSurgeActive) {
                    // 1. Calculate the bonus (using a unique 'ls' variable name)
                    state.lsSpdBonus = (bey.stats.speed || 0) * 0.02;
                    
                    // 2. ACTUALLY APPLY THE BONUS!
                    bey.stats.speed += state.lsSpdBonus;
                    bey.stats.knockbackPower = (bey.stats.knockbackPower || 0) + 0.05;
                    
                    // 3. Mark as active
                    state.lateSurgeActive = true;
                    
                    // Optional: Give it a visual aura so the player knows it kicked in!
                    // bey.activeAura = "rgba(255, 255, 0, 0.6)";
                    // bey.activeAuraDuration = 600;
                } 
                else if (!isBelowThreshold && state.lateSurgeActive) {
                    // 1. Remove the exact bonuses we added
                    bey.stats.speed -= state.lsSpdBonus;
                    bey.stats.knockbackPower -= 0.05;
                    
                    // 2. Mark as inactive
                    state.lateSurgeActive = false;
                }
            }
			
			// --- CHARGE DASH PHYSICS & VISUALS ---
            if (state.actionState === "CHARGING_DASH") {
                // Apply constant friction so the Beyblade stays relatively anchored
                bey.vx *= 0.9;
                bey.vy *= 0.9;

                state.chargeTimer += dt;

                // 1. Determine Charge Level (1s for Medium, 2s for Powerful)
                if (state.chargeTimer >= 2000) {
                    state.chargeLevel = 3;
                } else if (state.chargeTimer >= 1000) {
                    state.chargeLevel = 2;
                } else {
                    state.chargeLevel = 1;
                }

                // 2. Handle Visuals Based on Level
                let rad = bey.visualRadius || bey.radius || 15;

                if (state.chargeLevel === 1) { // WEAK
                    bey.activeAura = "rgba(255, 255, 0, 0.4)"; // Faint Yellow
                    bey.activeAuraSize = 1.2;
                } 
                else if (state.chargeLevel === 2) { // MEDIUM
                    bey.activeAura = "rgba(255, 165, 0, 0.7)"; // Strong Orange
                    bey.activeAuraSize = 1.5;
                } 
                else if (state.chargeLevel === 3) { // POWERFUL
                    bey.activeAura = "rgba(255, 69, 0, 1.0)"; // Blazing Red-Orange
                    bey.activeAuraSize = 1.8;

                    // Level 3 Electrical Crackles!
                    if (Math.random() < 0.25 && window.particles) {
                        let ang = Math.random() * Math.PI * 2;
                        
                        // Spawn exactly on the rim of the beyblade
                        let sparkX = bey.x + Math.cos(ang) * rad;
                        let sparkY = bey.y + Math.sin(ang) * rad;

                        window.particles.push({
                            x: sparkX, y: sparkY,
                            // Fly erratically outward to look like a spark
                            vx: (Math.random() - 0.5) * 8 + (Math.cos(ang) * 2),
                            vy: (Math.random() - 0.5) * 8 + (Math.sin(ang) * 2),
                            life: 1.0,
                            decay: 0.1, // Fades very fast to simulate a lightning flash
                            color: '#00ffff', // Cyan lightning color
                            size: Math.random() * 2 + 1
                        });
                    }
                }
                
                // Keep refreshing the aura so it stays locked on while charging
                bey.activeAuraDuration = 100; 
            }

            // --- CHARGE DASH BUFF CLEANUP ---
            if (state.chargeDashBuffTimer > 0) {
                state.chargeDashBuffTimer -= dt;
                
                // Once the dash ends, strip the exact math buffs we applied
                if (state.chargeDashBuffTimer <= 0) {
                    bey.stats.attack -= state.cdAtkBuff;
                    bey.stats.knockbackPower -= state.cdKbBuff;
                    state.cdAtkBuff = 0;
                    state.cdKbBuff = 0;
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
					
					// Start the cooldown now that the teleport is finished!
                    if (window.startSkillCooldown) window.startSkillCooldown(bey, "Phantom Warp");
                }
            }
			
			// --- SIDE SWIPE PHYSICS & TIMING ---
            if (state.actionState === "SIDE_SWIPE_PAUSE") {
                // Optional: Slightly bleed velocity here to sell the "hesitation"
                bey.vx *= 0.92; 
                bey.vy *= 0.92;

                state.sideSwipeTimer -= dt;
                
                // The 300ms pause is over! Fire the second leap!
                if (state.sideSwipeTimer <= 0) {
                    let dX, dY;
                    
                    // Grab the LIVE joystick input for the exact frame the second dash fires
                    let liveJoyX = isPlayer ? joyX : 0;
                    let liveJoyY = isPlayer ? joyY : 0;

                    // If the player is holding a direction, dash that way
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

                    // The second leap is 1.5x the length of the original (5 * 1.5 = 7.5)
                    let secondDashPower = 7;
                    bey.vx = dX * secondDashPower; 
                    bey.vy = dY * secondDashPower;

                    // A brighter flash to emphasize the heavier second hit
                    bey.activeAura = "rgba(50, 255, 100, 1.0)";
                    bey.activeAuraDuration = 400;

                    // Return to normal physics
                    state.actionState = "NORMAL";
                }
            }
			
			// --- EXTREME SPEED PHYSICS & AFTER-IMAGES ---
            if (state.actionState === "EXTREME_SPEED_DASH") {
                state.esDashTimer -= dt;

                // SPAWN AFTER-IMAGES!
                // We drop a phantom clone roughly every frame or two while dashing
                if (Math.random() < 0.6 && window.particles) {
                    window.particles.push({
                        x: bey.x, 
                        y: bey.y,
                        vx: 0, vy: 0, // After-images stand completely still
                        life: 1.0, 
                        decay: 0.08, // Fade out very quickly like a ghost
                        color: 'rgba(200, 200, 255, 0.5)', // Ghostly pale blue/white
                        // Make the particle the exact size of the Beyblade to look like a clone!
                        size: bey.visualRadius || bey.radius || 15 
                    });
                }

                // Phase 1 Over: Slam the Brakes!
                if (state.esDashTimer <= 0) {
                    state.actionState = "EXTREME_SPEED_STOP";
                    bey.vx = 0;
                    bey.vy = 0;
                }
            } 
            else if (state.actionState === "EXTREME_SPEED_STOP") {
                // Phase 2: The Anchor
                // Force velocity to 0 every frame so impacts don't move it while anchored
                bey.vx = 0;
                bey.vy = 0;
                
                state.esStopTimer -= dt;

                // Time's up! Return to normal physics
                if (state.esStopTimer <= 0) {
                    state.actionState = "NORMAL";
                }
            }
			
// --- RIDGE UPPERCUT PHYSICS ---
            if (state.actionState === "RIDGE_UPPERCUT_WINDUP") {
                state.ruTimer -= dt;
                
                // Windup over! Fire the forward dash!
                if (state.ruTimer <= 0) {
                    state.actionState = "RIDGE_UPPERCUT_DASH";
                    state.ruTimer = 400; // The dash lasts 400ms max (unless it hits something early)
                    
                    bey.vx = state.ruTargetX * 5;
                    bey.vy = state.ruTargetY * 5;
                    
                    bey.activeAura = "rgba(255, 100, 0, 0.9)"; // Fierce orange impact glow
                    bey.activeAuraDuration = 400;
                }
            }
            else if (state.actionState === "RIDGE_UPPERCUT_DASH") {
                state.ruTimer -= dt;
                
                // --- THE SUBTLE TILT LOGIC ---
                // We apply the tilt during the "midpoint" of the dash (between 100ms and 300ms)
                if (state.ruTimer <= 300 && state.ruTimer >= 100) {
                    // Apply a 15% tilt strictly on the axis we are traveling in
                    state.visualTiltX = state.ruTargetX * 0.15; 
                    state.visualTiltY = state.ruTargetY * 0.15;
                } else {
                    // Flatten out at the very end
                    state.visualTiltX = 0; 
                    state.visualTiltY = 0;
                }
                
                // Dash missed or timed out naturally
                if (state.ruTimer <= 0) {
                    state.actionState = "NORMAL";
                    state.visualTiltX = 0;
                    state.visualTiltY = 0;
                }
            }

            // --- AIRBORNE STUN PHYSICS ---
            if (state.actionState === "AIRBORNE_STUN") {
                state.airborneStunTimer -= dt;
                
                // By forcing the state to AIRBORNE_STUN, standard player joystick inputs 
                // won't work on them, acting as a perfect CC (Crowd Control) stun!

                // Standard gravity handles the fall, but we enforce the end of the stun strictly
                if (state.airborneStunTimer <= 0) {
                    state.actionState = "NORMAL";
                    state.isAirborneStunned = false;
                    state.z = 0; // Force them flat on the stadium floor
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

        // 1. --- THE UPPERCUT LAUNCH CHECK MUST BE FIRST ---
        if (p1.skillState.actionState === "RIDGE_UPPERCUT_DASH" && !cpu.skillState.isAirborneStunned) {
            this.applyUppercutLaunch(p1, cpu);
            return false; // Skip standard bounce physics, we are popping them up!
        } 
        else if (cpu.skillState.actionState === "RIDGE_UPPERCUT_DASH" && !p1.skillState.isAirborneStunned) {
            this.applyUppercutLaunch(cpu, p1);
            return false; 
        }

        // 2. --- THEN THE Z-HEIGHT / GRAPPLE CHECK ---
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
	
	applyUppercutLaunch: function(attacker, defender) {
        let defState = defender.skillState;
        let atkState = attacker.skillState;

        // 1. Stun the defender
        defState.actionState = "AIRBORNE_STUN";
        defState.airborneStunTimer = 400; 
        defState.isAirborneStunned = true;
        
        // 2. THE FIX: Use the native Z variable your game already understands!
        defender.z = 25; 
        
        // 3. Shove them backwards in the direction of the uppercut
        defender.vx = attacker.vx * 1.5;
        defender.vy = attacker.vy * 1.5;
        
        // Deal a flat chunk of HP/RPM damage
        defender.currentHp -= 4;
        defender.currentRpm -= 20;
        
        // 4. Anchor the Attacker to sell the heavy impact
        atkState.ruTimer = 0; 
        atkState.actionState = "NORMAL";
        atkState.visualTiltX = 0;
        atkState.visualTiltY = 0;
        attacker.vx *= 0.2; 
        attacker.vy *= 0.2;

        // Visual flash for the heavy hit
        defender.activeAura = "rgba(255, 0, 0, 0.8)";
        defender.activeAuraDuration = 400;
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
			
			// PREVENT DOUBLE-BUFFING: Only apply the math if the buff isn't already active!
            if (!(attacker.skillState.smashBoostTimer > 0)) {
                // SAFE MATH: Fallback to 0 if the stat doesn't exist yet
                attacker.stats.knockbackPower = (attacker.stats.knockbackPower || 0) + 0.3;
            }
            
            // Set (or refresh) the timer
            attacker.skillState.impactBoostTimer = 1900;
            
            attacker.activeAura = "rgba(0, 150, 255, 1.0)"; 
            attacker.activeAuraDuration = 600;
            attacker.tempRecoilReduction = 3; 
            attacker.tempDefense = 30;

			// --- PASSIVE: SMASH ROUTE ---
            if (attacker.passives && attacker.passives.includes("Smash Route")) {
                
                // 1. Calculate the Ridge/Basin boundary
                let cx = window.innerWidth / 2;
                let cy = window.innerHeight / 2;
                let maxR = Math.min(window.innerWidth, window.innerHeight) / 2 * 0.85;
                let basinRadius = maxR * 0.50; 
                
                let distFromCenter = Math.sqrt((attacker.x - cx)**2 + (attacker.y - cy)**2);
                
                // 2. Are we starting the dash from OUTSIDE the basin?
                if (distFromCenter > basinRadius) {
                    
                    // 3. Vector pointing from the attacker to the exact center
                    let toCx = cx - attacker.x;
                    let toCy = cy - attacker.y;
                    let toCDist = Math.max(1, Math.sqrt(toCx*toCx + toCy*toCy));
                    let dirToC_X = toCx / toCDist;
                    let dirToC_Y = toCy / toCDist;
                    
                    // 4. Normalize the dash direction
                    let dashDist = Math.max(1, Math.sqrt(dashX*dashX + dashY*dashY));
                    let normDashX = dashX / dashDist;
                    let normDashY = dashY / dashDist;
                    
                    // 5. DOT PRODUCT: Are we dashing INWARD? 
                    // (Any number greater than 0 means we are heading toward the center side of the stadium)
                    let headingInward = (normDashX * dirToC_X) + (normDashY * dirToC_Y);
                    
                    if (headingInward > 0) {
                        
                        // Apply the 8% Knockback buff for the 600ms dash duration!
                        if (!attacker.skillState.smashRouteActive) {
                            attacker.stats.knockbackPower = (attacker.stats.knockbackPower || 0) + 0.08;
                            attacker.skillState.smashRouteActive = true;
                        }
                        attacker.skillState.smashRouteTimer = 450; 
                        
                        // Overwrite the aura to a fierce Orange so the player knows the route was successful!
                        attacker.activeAura = "rgba(255, 140, 0, 1.0)";
                    }
                }
            }
				
        }
		
		else if (attackName === "Extreme Speed") {
            // --- ⚙️ ADJUSTABLE PARAMETERS ⚙️ ---
            let dashSpeed = 25;     // Velocity of the dash (Very high!)
            let dashDuration = 150; // How long the high-speed dash lasts (150ms = very short)
            let stopDuration = 400; // How long the beyblade freezes in place afterward (400ms)
            // -----------------------------------

            // 1. Calculate direction (Joystick or auto-target)
            let dashX = (inputX !== 0 || inputY !== 0) ? inputX : dirX;
            let dashY = (inputX !== 0 || inputY !== 0) ? inputY : dirY;

            // 2. Apply the massive speed burst
            attacker.vx = dashX * dashSpeed;
            attacker.vy = dashY * dashSpeed;

            // 3. Trigger the State Machine
            attacker.skillState.actionState = "EXTREME_SPEED_DASH";
            attacker.skillState.esDashTimer = dashDuration;
            
            // We store the stop duration here so the update loop knows how long to freeze it later!
            attacker.skillState.esStopTimer = stopDuration; 

            // 4. Ensure no normal aura plays
            attacker.activeAuraDuration = 0; 
        }
		
		else if (attackName === "Charge Dash") {
            let state = attacker.skillState;
            
            // Switch the beyblade into the charging state
            state.actionState = "CHARGING_DASH";
            state.chargeTimer = 0;
            state.chargeLevel = 1;
            
            // Brake hard so the beyblade doesn't wander off while charging
            attacker.vx *= 0.2;
            attacker.vy *= 0.2;
            
            // Optional: A quick white flash to show the charge has initiated
            attacker.activeAura = "rgba(255, 255, 255, 0.8)";
            attacker.activeAuraDuration = 200;
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
		else if (attackName === "Side Swipe") {
            // First Leap: Use the initial cast direction
            let dashX = (inputX !== 0 || inputY !== 0) ? inputX : dirX;
            let dashY = (inputX !== 0 || inputY !== 0) ? inputY : dirY;

            let initialDashPower = 9; 
            attacker.vx = dashX * initialDashPower;
            attacker.vy = dashY * initialDashPower;

            // Visual flair for the first dash
            attacker.activeAura = "rgba(50, 200, 100, 0.7)";
            attacker.activeAuraDuration = 400;

            // Trigger the State Machine for the second phase!
            attacker.skillState.actionState = "SIDE_SWIPE_PAUSE";
            attacker.skillState.sideSwipeTimer = 400; // Wait exactly 300ms
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
		else if (attackName === "Ridge Uppercut") {
            let state = attacker.skillState;
            
            // 1. Calculate the initial direction
            let dashX = (inputX !== 0 || inputY !== 0) ? inputX : dirX;
            let dashY = (inputX !== 0 || inputY !== 0) ? inputY : dirY;

            // 2. Windup: Coast backwards slightly 
            attacker.vx = -dashX * 2;
            attacker.vy = -dashY * 2;
            
            // 3. Store the actual forward direction for Phase 2
            state.ruTargetX = dashX;
            state.ruTargetY = dashY;
            
            // 4. Trigger the State Machine
            state.actionState = "RIDGE_UPPERCUT_WINDUP";
            state.ruTimer = 200; // 200ms reverse windup
            
            attacker.activeAura = "rgba(200, 200, 200, 0.6)"; // Pale grey gathering wind
            attacker.activeAuraDuration = 200;
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
            attacker.activeAuraDuration = 2000;
			
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
    },
	
	releaseCharge: function(attacker, defender, joyX = 0, joyY = 0) {
        let state = attacker.skillState;
        
        // Safety check: Only fire if they were actually charging
        if (state.actionState !== "CHARGING_DASH") return; 

        // 1. Calculate Dash Direction
        let dX, dY;
        if (joyX !== 0 || joyY !== 0) {
            // Dash in joystick direction
            let dist = Math.sqrt(joyX*joyX + joyY*joyY);
            dX = joyX / dist; dY = joyY / dist;
        } else {
            // Auto-target the opponent if no joystick input
            let oppX = defender.x - attacker.x;
            let oppY = defender.y - attacker.y;
            let dist = Math.max(1, Math.sqrt(oppX*oppX + oppY*oppY));
            dX = oppX / dist; dY = oppY / dist;
        }

        // 2. Assign Stats based on Charge Level
        let dashPower = 5;
        let atkBuffPct = 0;
        let kbBuffPct = 0.06;

        if (state.chargeLevel === 2) {
            dashPower = 6.5;
            atkBuffPct = 0.08;
            kbBuffPct = 0.12;
        } else if (state.chargeLevel === 3) {
            dashPower = 7.5;
            atkBuffPct = 0.15;
            kbBuffPct = 0.18;
        }

        // 3. Save the math so we can safely remove it later
        state.cdAtkBuff = (attacker.stats.attack || 0) * atkBuffPct;
        state.cdKbBuff = kbBuffPct;

        // 4. Apply the Buffs!
        attacker.stats.attack = (attacker.stats.attack || 0) + state.cdAtkBuff;
        attacker.stats.knockbackPower = (attacker.stats.knockbackPower || 0) + state.cdKbBuff;

        // 5. Fire the Dash!
        attacker.vx = dX * dashPower;
        attacker.vy = dY * dashPower;

        // Give them 1.5 seconds (1500ms) of buffed stats to make sure the hit connects
        state.chargeDashBuffTimer = 1500; 

        // 6. Reset the State Machine
        state.actionState = "NORMAL";
        state.chargeTimer = 0;
        state.chargeLevel = 1;
        
        // Let the aura linger briefly as a "trail"
        attacker.activeAuraDuration = 400; 
		
		// Start the cooldown now that the dash has been unleashed!
        if (window.startSkillCooldown) window.startSkillCooldown(attacker, "Charge Dash");
    }
	
};