// opponents.js
window.opponentsDB = [
   
      {
        id: "opp_toma_tutorial",
        name: "Toma",
        portrait: "Toma_Tsukishiro.png",
        dialogueBG: "beystadium_park.png",
        aiType: "STANDARD_AGGRESSIVE",
        beyName: "Fenrir F",
        bitBeast: "None",
		bitChip: "bc_04",
		attackRing: "ar_13",
		weightDisk: "wd_03",
		spinGear: "sg_01",
		bladeBase: "bb_11",
        alwaysUnlocked: false,
        arenaStyle: { stadiumType: "Basic", stadiumId: "basic_nopockets" }, 
        stats: { 
            hp: 130, rpm: 1220, attack: 21, defense: 12, stamina: 16, endurance: 9, speed: 12, weight: 60, mobility: 10, grip: 24, balance: 11, recoil: 10, recoilReduction: 7, spiritCharge: 5, cdr: 1 },
        passives: [],
        attacks: [],
        ultimate: null, 
    },
   
   {
        id: "opp_miko1",
        name: "Miko",
        portrait: "Miko_Nanami.png",
        dialogueBG: "beystadium_park.png",
        aiType: "STANDARD_AGGRESSIVE",
        beyName: "Sakura Blossom Mochi",
        bitBeast: "None",
		bitChip: "bc_05",
		attackRing: "ar_12",
		weightDisk: "wd_07",
		spinGear: { id: "sg_01", styleId: "SG_basic_pink" },
		bladeBase: "bb_10",
        alwaysUnlocked: false,
        arenaStyle: { stadiumType: "Park Stadium", stadiumId: "parkstadium_threepockets" }, 
        stats: { 
            hp: 130, rpm: 1220, attack: 21, defense: 12, stamina: 16, endurance: 13, speed: 12, weight: 60, mobility: 10, grip: 24, balance: 11, recoil: 10, recoilReduction: 7, spiritCharge: 5, cdr: 1 },
        passives: [],
        attacks: [{ name: "Smash Attack", cd: 5 }],
        ultimate: null, 
        dialogue: [
            "Oh! <player>!",
            "Fancy meeting you here! Say, are you in the mood for a beybattle?"
        ],
        winDialogue: [
            "Wh-wha?! I won!?",
            "I mean, I won! Wooooh!",
			"I'm stronger than I gave myself credit for. Don't take it to heart, okay <player>?"
        ],
        loseDialogue: [
            "Hee hee, just goes to show! Practice makes perfect!",
            "Okay! I'm gonna practice nonstop until the next time we meet up!"
        ],
        aiScript: function(cpu, player, engine) {
            let dist = Math.sqrt((cpu.x - player.x)**2 + (cpu.y - player.y)**2);
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Smash Attack"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 150) {
                engine.executeAttack("Smash Attack", cpu, player);
                let cdrMod = 1.0 - ((cpu.stats.cdr || 0) / 100);
                ramSkill.currentCd = ramSkill.baseCd * cdrMod; 
            }
        }
    },
	
	   {
        id: "opp_toma1",
        name: "Toma",
        portrait: "Toma_Tsukishiro.png",
        dialogueBG: "beystadium_park.png",
        aiType: "STANDARD_AGGRESSIVE",
        beyName: "Fenrir F",
        bitBeast: "None",
		bitChip: "bc_04",
		attackRing: "ar_13",
		weightDisk: "wd_03",
		spinGear: { id: "sg_01", styleId: "SG_basic_purple" },
		bladeBase: "bb_11",
        alwaysUnlocked: false,
        arenaStyle: { stadiumType: "Park Stadium", stadiumId: "parkstadium_threepockets" },
        stats: { 
            hp: 140, rpm: 1250, attack: 21, defense: 15, stamina: 16, endurance: 11, speed: 13, weight: 64, mobility: 11, grip: 12, balance: 13, recoil: 8, recoilReduction: 6, spiritCharge: 5, cdr: 1 },
        passives: [],
        attacks: [{ name: "Sharp Shooter", cd: 6 }],
        ultimate: null, 
        dialogue: [
            "No way I'm losin' to you this time, <player>!",
            "Ready to Blade? Let it rip!"
        ],
        winDialogue: [
            "Hehe, as if I could lose with this killer build.",
            "Looks like this one goes to me! Yeah!"
        ],
        loseDialogue: [
            "Haha... yeah, guess I saw that one coming halfway through.",
            "You win! Next time we battle, though, you're going down!"
        ],
        aiScript: function(cpu, player, engine) {
            let dist = Math.sqrt((cpu.x - player.x)**2 + (cpu.y - player.y)**2);
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Sharp Shooter"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 180) {
                engine.executeAttack("Sharp Shooter", cpu, player);
                let cdrMod = 1.0 - ((cpu.stats.cdr || 0) / 100);
                ramSkill.currentCd = ramSkill.baseCd * cdrMod; 
            }
        }
    },


    {
        id: "opp_matt1",
        name: "Matt",
        portrait: "Matt.png",
        dialogueBG: "beystadium_official.png",
        aiType: "STANDARD_AGGRESSIVE",
        beyName: "Godblade",
        bitBeast: "None",
		bitChip: "bc_03",
		attackRing: "prototype_bossbey",
		weightDisk: "wd_14",
		spinGear: "sg_01",
		bladeBase: "bb_15",
        alwaysUnlocked: true,
        arenaStyle: { stadiumType: "Super Duel", stadiumId: "superduel_nowalls" },
		bgmTrack: "./audio/music/Battle_Target_Acquired.wav", 
        bgmLoopPoint: 20.758687,		
        stats: { 
            hp: 800, rpm: 4500, attack: 25, defense: 19, stamina: 17, endurance: 10, speed: 12, weight: 62, mobility: 11, grip: 21, balance: 10, recoil: 11, recoilReduction: 7, spiritCharge: 5, cdr: 2 },
        passives: [],
        attacks: [{ name: "Smash Attack", cd: 5 }],
        ultimate: null, 
        dialogue: [
            "Oh, you're looking to test something?",
            "Well, I can be your guinea pig, sure. Let's see what's new!",
        ],
        winDialogue: [
            "Yeah, I guess whatever you got couldn't beat my 4500 RPM and 800 HP.",
            "Better luck next time, nerd."
        ],
        loseDialogue: [
            "Nice over-powered junk bey. Moron.",
            "Keep bug testing."
        ],
        aiScript: function(cpu, player, engine) {
            let dist = Math.sqrt((cpu.x - player.x)**2 + (cpu.y - player.y)**2);
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Smash Attack"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 150) {
                engine.executeAttack("Smash Attack", cpu, player);
                let cdrMod = 1.0 - ((cpu.stats.cdr || 0) / 100);
                ramSkill.currentCd = ramSkill.baseCd * cdrMod; 
            }
        }
    },


    {
        id: "opp_daichi1",
        name: "Daichi",
        portrait: "Daichi.png",
        dialogueBG: "beystadium_park.png",
        aiType: "STANDARD_AGGRESSIVE",
        beyName: "Strata Dragoon",
        bitBeast: "Strata Dragoon",
		bitChip: "bc_03",
		attackRing: "ar_11",
		subAttackRing: "sar_01",
		weightDisk: "wd_14",
		spinGear: "sg_05",
		bladeBase: "bb_09",
        alwaysUnlocked: false,
        arenaStyle: { stadiumType: "Park Stadium", stadiumId: "parkstadium_threepockets" },
        stats: { 
            hp: 116, rpm: 1270, attack: 25, defense: 12, stamina: 17, endurance: 14, speed: 12, weight: 61, mobility: 10, grip: 21, balance: 10, recoil: 15, recoilReduction: 5, spiritCharge: 5, cdr: 1 },
        passives: [],
        attacks: [{ name: "Smash Attack", cd: 5 }],
        ultimate: null, 
        dialogue: [
            "Hey! You think your Beyblade has what it takes to beat me?!",
            "I've been training in the mountains! Strata Dragoon is gonna crush you!",
            "Don't cry when your Bey is in pieces! Let's go!"
        ],
        winDialogue: [
            "Hah! Told ya Strata Dragoon and I are the strongest!",
            "Go back to the garage and build a better Bey!"
        ],
        loseDialogue: [
            "What?! No way... Strata Dragoon lost?!",
            "Ugh, you just got lucky! Next time we'll smash you!"
        ],
        aiScript: function(cpu, player, engine) {
            let dist = Math.sqrt((cpu.x - player.x)**2 + (cpu.y - player.y)**2);
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Smash Attack"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 150) {
                engine.executeAttack("Smash Attack", cpu, player);
                let cdrMod = 1.0 - ((cpu.stats.cdr || 0) / 100);
                ramSkill.currentCd = ramSkill.baseCd * cdrMod; 
            }
        }
    },
	
	
	{
        id: "opp_carlos1",
        name: "Carlos",
        portrait: "Carlos.png",
        dialogueBG: "beystadium_park.png",
        aiType: "STANDARD_AGGRESSIVE",
        beyName: "Spin Cutter",
        bitBeast: "None",
		bitChip: "bc_04",
		attackRing: "ar_32",
		weightDisk: "wd_18",
		spinGear: { id: "sg_01", styleId: "SG_basic_yellow" },
		bladeBase: { id: "bb_03", styleId: "flatbase_yellow" },
        alwaysUnlocked: true,
        arenaStyle: { stadiumType: "Park Stadium", stadiumId: "parkstadium_twopockets" }, 
        stats: { 
            hp: 136, rpm: 1200, attack: 29, defense: 10, stamina: 16, endurance: 15, speed: 12, weight: 75, mobility: 2, grip: 24, balance: 9, recoil: 17, recoilReduction: 4, spiritCharge: 5, cdr: 1 },
        passives: [],
        attacks: [{ name: "Smash Attack", cd: 5 }],
        ultimate: null, 
        dialogue: [
            "Looking to take me on?",
            "Sure, I've got some time to kill. You ready to get crushed?"
        ],
        winDialogue: [
            "Way to go, loser. Don't cry too hard, though.",
            "Nobody ever beats me, hahaha!",
			"...What do you mean, not tournament legal?"
        ],
        loseDialogue: [
            "You beat Spin Cutter? But I modified it to be unbeatable...",
            "Maybe you aren't some nobody after all.",
			"Hey, keep this battle between us, okay? No one in the Blade Sharks has to know about this."
        ],
        aiScript: function(cpu, player, engine) {
            let dist = Math.sqrt((cpu.x - player.x)**2 + (cpu.y - player.y)**2);
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Smash Attack"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 150) {
                engine.executeAttack("Smash Attack", cpu, player);
                let cdrMod = 1.0 - ((cpu.stats.cdr || 0) / 100);
                ramSkill.currentCd = ramSkill.baseCd * cdrMod; 
            }
        }
    },
	

	{
        id: "opp_max1",
        name: "Max",
        portrait: "Max.png",
        dialogueBG: "beystadium_official.png",
        aiType: "STANDARD_AGGRESSIVE",
        beyName: "Draciel Metal Ball Defenser",
        bitBeast: "None",
		bitChip: "bc_04",
		attackRing: { id: "ar_21", styleId: "protoshell_maxdesign" },
		weightDisk: "wd_04",
		spinGear: { id: "sg_01", styleId: "SG_basic_green2" },
		bladeBase: "bb_17",
        alwaysUnlocked: false,
        arenaStyle: { stadiumType: "Official Blue", stadiumId: "offblue_threepockets" }, 
        stats: { 
            hp: 155, rpm: 1320, attack: 25, defense: 27, stamina: 19, endurance: 15, speed: 2, weight: 75, mobility: -2, grip: 24, balance: 6, recoil: 8, recoilReduction: 6, spiritCharge: 8, cdr: 3 },
        passives: ["Metal Ball Defense"],
        attacks: [{ name: "Concentrate Defense", cd: 7 }],
        ultimate: null, 
        dialogue: [
            "Hi there! It's great to meet a new Blader!",
            "I gotta warn ya, Draciel's defense is absolute. It's not about hitting hard, it's about outlasting your opponent.",
            "Give it everything you've got! We won't hold back!"
        ],
        winDialogue: [
            "Woohoo! Yeah, Draciel! Great job! And you, too!",
            "It's too bad ya didn't win this time, but we can battle again any time you feel like it!", // ADDED COMMA
            "Draciel's impregnable defense means it never gets tired from battle!"
        ],
        loseDialogue: [
            "Whoooaa! No way! You're the real deal! You beat me and Draciel fair and square!", // ADDED COMMA
            "Let's square up again some time soon! I've got to sure up Draciel's defenses so we don't lose to you again!"
        ],
        aiScript: function(cpu, player, engine) {
            let dist = Math.sqrt((cpu.x - player.x)**2 + (cpu.y - player.y)**2);
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Concentrate Defense"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 150) {
                engine.executeAttack("Concentrate Defense", cpu, player);
                let cdrMod = 1.0 - ((cpu.stats.cdr || 0) / 100);
                ramSkill.currentCd = ramSkill.baseCd * cdrMod; 
            }
        }
    },
	
	
		{
        id: "opp_rei1",
        name: "Rei",
        portrait: "Rei.png",
        dialogueBG: "beystadium_official.png",
        aiType: "STANDARD_AGGRESSIVE",
        beyName: "Driger Manual Balancer",
        bitBeast: "None",
		bitChip: "bc_04",
		attackRing: "ar_30",
		weightDisk: "wd_01",
		spinGear: { id: "sg_01", styleId: "SG_basic_gray" },
		bladeBase: "bb_19",
        alwaysUnlocked: false,
        arenaStyle: { stadiumType: "Official Blue", stadiumId: "offblue_threepockets" }, 
        stats: { 
            hp: 165, rpm: 1390, attack: 25, defense: 12, stamina: 22, endurance: 25, speed: 5, weight: 68, mobility: 7, grip: 22, balance: 7, recoil: 15, recoilReduction: 9, spiritCharge: 8, cdr: 3 },
        passives: ["Alter Approach (Semi-Flat)"],
        attacks: [{ name: "Barrage Attack", cd: 5 }],
        ultimate: null, 
        dialogue: [
            "Another challenger? Not tryin' to be mean, but I could beat everyone around here with my eyes closed if I really wanted to.",
            "What makes you any different?",
            "Don't hold back, I need some entertainment!"
        ],
        winDialogue: [
            "...Well, that was... kinda lame. Better luck next time and all that.",
            "If you keep improving, you'll eventually be someone I gotta watch out for.", // ADDED COMMA
            "But for now... guess I'll take a nap?"
        ],
        loseDialogue: [
            "Your power is wild! I'm impressed!", // ADDED COMMA
            "Next time we meet, I'll be even stronger, so don't you go slacking off, <player>!"
        ],
        aiScript: function(cpu, player, engine) {
            let dist = Math.sqrt((cpu.x - player.x)**2 + (cpu.y - player.y)**2);
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Barrage Attack"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 135) {
                engine.executeAttack("Barrage Attack", cpu, player);
                let cdrMod = 1.0 - ((cpu.stats.cdr || 0) / 100);
                ramSkill.currentCd = ramSkill.baseCd * cdrMod; 
            }
        }
    },
	
	
	{
        id: "opp_kai1",
        name: "Kai",
        portrait: "Kai.png",
        dialogueBG: "beystadium_official.png",
        aiType: "STANDARD_AGGRESSIVE",
        beyName: "Dranzer Auto Change Balancer",
        bitBeast: "None",
		bitChip: "bc_04",
		attackRing: "ar_22",
		weightDisk: "wd_01",
		spinGear: { id: "sg_01", styleId: "SG_basic_blue2" },
		bladeBase: "bb_16",
        alwaysUnlocked: false,
        arenaStyle: { stadiumType: "Official Blue", stadiumId: "offblue_threepockets" }, 
        stats: { 
            hp: 140, rpm: 1360, attack: 26, defense: 9, stamina: 19, endurance: 20, speed: 16, weight: 69, mobility: 17, grip: 22, balance: 19, recoil: 16, recoilReduction: 6, spiritCharge: 8, cdr: 3 },
        passives: ["Mode Change"],
        attacks: [{ name: "Sharp Shooter", cd: 6 }],
        ultimate: null, 
        dialogue: [
            "I hope you're prepared to do more than just stand there and look stupid.",
            "Don't blink, <player>. This will be over before you even realize you've lost.",
        ],
        winDialogue: [
            "Tch, is that it? What a waste of my time.",
            "Try finding a hobby you're actually good at.", // ADDED COMMA
        ],
        loseDialogue: [
            "Not bad. But don't get used to this feeling.", // ADDED COMMA
            "I'll be back, and next time, Dranzer and I won't be so merciful."
        ],
        aiScript: function(cpu, player, engine) {
            let dist = Math.sqrt((cpu.x - player.x)**2 + (cpu.y - player.y)**2);
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Sharp Shooter"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 160) {
                engine.executeAttack("Sharp Shooter", cpu, player);
                let cdrMod = 1.0 - ((cpu.stats.cdr || 0) / 100);
                ramSkill.currentCd = ramSkill.baseCd * cdrMod; 
            }
        }
    },
	
	
	
		{
        id: "opp_tyson1",
        name: "Tyson",
        portrait: "Tyson.png",
        dialogueBG: "beystadium_official.png",
        aiType: "STANDARD_AGGRESSIVE",
        beyName: "Dragoon Grip Attacker",
        bitBeast: "None",
		bitChip: "bc_04",
		attackRing: "ar_25",
		weightDisk: "wd_02",
		spinGear: { id: "sg_01", styleId: "SG_basic_dragoongripattack_white" },
		bladeBase: "bb_18",
        alwaysUnlocked: false,
        arenaStyle: { stadiumType: "Official Blue", stadiumId: "offblue_threepockets" }, 
        stats: { 
            hp: 135, rpm: 1410, attack: 32, defense: 9, stamina: 23, endurance: 14, speed: 16, weight: 64, mobility: 25, grip: 29, balance: 5, recoil: 20, recoilReduction: 5, spiritCharge: 8, cdr: 3 },
        passives: ["Hyper Aggression"],
        attacks: [{ name: "Smash Attack", cd: 5 }],
        ultimate: null, 
        dialogue: [
            "Yo! I'm Tyson! It's nice to meet ya! You look strong.",
			"So, you ready for a killer battle?",
            "Show me what ya got!",
        ],
        winDialogue: [
            "Looks like I win! No hard feelings, right? That was a great battle!",
            "I'm gonna keep reaching higher and higher. Every battle launches me higher.", // ADDED COMMA
			"See ya at the top?",
        ],
        loseDialogue: [
            "You don't get stronger by accepting how everyone else does things.", // ADDED COMMA
            "You get stronger by finding your own path. That's how champions are made.",
			"Next battle, I'll give you 1000%!",
        ],
        aiScript: function(cpu, player, engine) {
            let dist = Math.sqrt((cpu.x - player.x)**2 + (cpu.y - player.y)**2);
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Smash Attack"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 150) {
                engine.executeAttack("Smash Attack", cpu, player);
                let cdrMod = 1.0 - ((cpu.stats.cdr || 0) / 100);
                ramSkill.currentCd = ramSkill.baseCd * cdrMod; 
            }
        }
    },



    {
        id: "opp_mirorbey",
        name: "Miror Bey",
        portrait: "MirorBey.png",
        dialogueBG: "beystadium_park.png",
        aiType: "STANDARD_AGGRESSIVE", // Default logic, will be overwritten by player stats
        beyName: "Copycat", // Placeholder
        bitBeast: "Unknown", // Placeholder
        alwaysUnlocked: true,
        arenaStyle: { stadiumType: "Park Stadium", stadiumId: "parkstadium_threepockets" }, 
        stats: {}, // Placeholder
        passives: [],
        attacks: [],
        ultimate: null,
        dialogue: [
            "Did you say your name was <player> or something?",
            "Well, Darling, you can call me Miror Bey, or Miror B. for short! Hue hue!",
            "I've grown so frightfully tired of waiting for a good battle. Let's work up some perspiration, eh?"
        ],
        winDialogue: [
            "Fuhohoho! I gather you realize, now, that it's futile to challenge me?",
            "I can take anything you've got and turn it up a notch-notch-notch, baby!", // ADDED COMMA
            "But... it is kind of boring around here, so challenge me again soon, okay, Darling? Catch ya later!"
        ],
        loseDialogue: [
            "Ooh, this just won't do...! I'm an awesome dancer, but I'm not as awesome at beybattles.",
            "Count this one as your win, baby. Congrats. But don't let your guard down. The better you get...", // ADDED COMMA
            "The better I get! Fuhohoho! Aight, hit the road. Get outta here. It's time for my dance class."
        ],
        
        // NEW: Dynamic Mirror AI!
        aiScript: function(cpu, player, engine) {
            let dist = Math.sqrt((cpu.x - player.x)**2 + (cpu.y - player.y)**2);
            
            // Loop through whatever attacks Miror B stole from the player
            cpu.activeAttacks.forEach(skill => {
                // If it's ready, and the player is somewhat close... fire it!
                if (skill.currentCd <= 0 && dist < 200) {
                    engine.executeAttack(skill.name, cpu, player);
                    let cdrMod = 1.0 - ((cpu.stats.cdr || 0) / 100);
                    skill.currentCd = skill.baseCd * cdrMod;
                }
            });
        }
    }
];