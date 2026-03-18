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

        // --- NEW EQUIPMENT PASSIVES ---
        "Wing Guard": {
            name: "Wing Guard",
            desc: "Increases Defense by 5 and reduces knockback taken.",
            apply: function(bey) {
                bey.stats.defense = (bey.stats.defense || 0) + 5;
                bey.stats.weight = (bey.stats.weight || 10) + 5; 
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

        // --- LAUNCHER & TOOL MODIFIERS ---
        "Launcher: RPM Boost": {
            name: "Launcher: RPM Boost",
            desc: "Upgrades the launcher gear ratio, passively granting a 10% bonus to initial launch RPM.",
            apply: function(bey) {
                bey.currentRpm *= 1.10;
                bey.maxRpm *= 1.10;
            }
        },
        "Special Launch: Marvelous Launch": {
            name: "Marvelous Launch",
            desc: "Expands the sweet spots on the Ripcord gauge and unlocks an exclusive 'Marvelous' power tier.",
            apply: function(bey) {} 
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
            name: "Barrage Attack", cd: 5,
            desc: "Executes a rapid flurry of erratic, zig-zag movements to overwhelm the opponent.",
            execute: function() {}
        },
        "Cross Smash": {
            name: "Cross Smash", cd: 6,
            desc: "A devastating, concentrated blow utilizing the secondary contact points of a Sub-Attack Ring.",
            execute: function() {}
        },
        "Concentrate Defense": {
            name: "Concentrate Defense", cd: 7,
            desc: "Halts movement completely to brace for impact, massively reducing incoming damage for 2 seconds.",
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
                
                defenseBoostTimer: 0,
                barrageTimer: 0,
                wispBurnTimer: 0,
                lastHp: bey.currentHp,
                
                sourSaucerCd: 0,
                sourDebuffTimer: 0,
                sourDebuffAmount: 0,
                
                airLanceTimer: 0
            };
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

            // --- PASSIVE: Sour Saucer ---
            if (bey.passives && bey.passives.includes("Sour Saucer")) {
                if (Math.random() < 0.05) {
                    bey.vx += (Math.random() - 0.5) * 1.5;
                    bey.vy += (Math.random() - 0.5) * 1.5;
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

            if (state.barrageTimer > 0) {
                state.barrageTimer -= dt;
                if (Math.random() < 0.4) {
                    bey.vx += (Math.random() - 0.5) * 12;
                    bey.vy += (Math.random() - 0.5) * 12;
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
                attacker.vx = dirX * 18;
                attacker.vy = dirY * 18;
                state.z = 25; 
                state.actionState = "AIRBORNE_LANCE";
                state.airLanceTimer = 2000; 
            }, 300);
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
            attacker.tempRecoilReduction = 2; 
            attacker.tempDefense = 30; 
        }
        else if (attackName === "Spike Attack") {
            attacker.vx += dirX * 12;
            attacker.vy += dirY * 12;
            attacker.currentHp -= 2; 
            attacker.activeAura = "rgba(255, 0, 0, 0.8)";
            attacker.activeAuraDuration = 600;
        }
        else if (attackName === "Cross Smash") {
            attacker.vx += dirX * 14;
            attacker.vy += dirY * 14;
            attacker.activeAura = "rgba(255, 165, 0, 0.8)";
            attacker.activeAuraDuration = 600;
        }
        else if (attackName === "Barrage Attack") {
            attacker.skillState.barrageTimer = 1500; 
            attacker.activeAura = "rgba(255, 255, 0, 0.8)";
            attacker.activeAuraDuration = 1500;
        }
        else if (attackName === "Concentrate Defense") {
            attacker.vx *= 0.1;
            attacker.vy *= 0.1;
            attacker.stats.defense += 50;
            attacker.stats.recoilReduction += 50;
            attacker.skillState.defenseBoostTimer = 2000;
            attacker.activeAura = "rgba(0, 0, 255, 0.8)";
            attacker.activeAuraDuration = 2000;
        }
        else if (attackName === "Heavy Ram") {
            let weightMod = (attacker.stats.weight || 1.1) * 0.1;
            attacker.vx += dirX * (1.1 + weightMod);
            attacker.vy += dirY * (1.1 + weightMod);
            attacker.activeAura = "rgba(139, 69, 19, 0.8)";
            attacker.activeAuraDuration = 600;
        }
        else if (attackName === "Sharp Shooter") {
            let moveVel = Math.sqrt(attacker.vx**2 + attacker.vy**2);
            let mX = moveVel > 0.5 ? attacker.vx / moveVel : dirX;
            let mY = moveVel > 0.5 ? attacker.vy / moveVel : dirY;
            
            let maxSpeedBoost = (attacker.stats.speed || 10) * 0.00425 * 1.15; 
            attacker.vx = mX * maxSpeedBoost * 20; 
            attacker.vy = mY * maxSpeedBoost * 20;
            attacker.activeAura = "rgba(128, 0, 128, 0.8)";
            attacker.activeAuraDuration = 600;
        }
        else if (attackName === "Upper Attack") {
            attacker.vx = -dirX * 5;
            attacker.vy = -dirY * 5;
            attacker.activeAura = "rgba(0, 255, 0, 0.8)";
            attacker.activeAuraDuration = 600;
            setTimeout(() => {
                attacker.vx = dirX * 12;
                attacker.vy = dirY * 12;
                attacker.skillState.actionState = "UPPER_DASHING";
            }, 300);
        }
        else if (attackName === "Grindblade Lunge") {
            attacker.wobbleFactor = 0.8; 
            attacker.activeAura = "rgba(255, 20, 147, 0.8)";
            attacker.activeAuraDuration = 800;
            setTimeout(() => {
                attacker.wobbleFactor = 0;
                attacker.vx = dirX * 10;
                attacker.vy = dirY * 10;
                attacker.skillState.z = 15; 
                attacker.skillState.actionState = "LUNGE_HOP";
            }, 500);
        }
    }
};