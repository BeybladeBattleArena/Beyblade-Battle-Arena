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
            hp: 130, rpm: 1220, attack: 21, defense: 12, stamina: 16, speed: 12, weight: 60, mobility: 10, grip: 24, balance: 11, recoil: 10, recoilReduction: 7, spiritCharge: 5, cdr: 1 },
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
            hp: 130, rpm: 1220, attack: 21, defense: 12, stamina: 16, speed: 12, weight: 60, mobility: 10, grip: 24, balance: 11, recoil: 10, recoilReduction: 7, spiritCharge: 5, cdr: 1 },
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
            hp: 140, rpm: 1250, attack: 21, defense: 15, stamina: 16, speed: 13, weight: 64, mobility: 11, grip: 12, balance: 13, recoil: 8, recoilReduction: 6, spiritCharge: 5, cdr: 1 },
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
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Upper Attack"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 150) {
                engine.executeAttack("Upper Attack", cpu, player);
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
		attackRing: "ar_19",
		weightDisk: "wd_14",
		spinGear: "sg_01",
		bladeBase: "bb_15",
        alwaysUnlocked: true,
        arenaStyle: { stadiumType: "Super Duel", stadiumId: "superduel_nowalls" }, 
        stats: { 
            hp: 800, rpm: 4500, attack: 25, defense: 19, stamina: 17, speed: 12, weight: 62, mobility: 11, grip: 21, balance: 10, recoil: 11, recoilReduction: 7, spiritCharge: 5, cdr: 2 },
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
            hp: 116, rpm: 1170, attack: 21, defense: 12, stamina: 17, speed: 12, weight: 61, mobility: 10, grip: 21, balance: 10, recoil: 15, recoilReduction: 5, spiritCharge: 5, cdr: 1 },
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
            hp: 136, rpm: 1200, attack: 29, defense: 10, stamina: 16, speed: 12, weight: 75, mobility: 2, grip: 24, balance: 9, recoil: 17, recoilReduction: 4, spiritCharge: 5, cdr: 1 },
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
        dialogueBG: "beystadium_park.png",
        aiType: "CENTER_DEFEND", 
        beyName: "Draciel Metal Ball Defenser",
        bitBeast: "Draciel",
        alwaysUnlocked: false,
        arenaStyle: { stadiumType: "Park Stadium", stadiumId: "parkstadium_threepockets" }, 
        stats: { hp: 180, rpm: 1350, attack: 14, defense: 55, stamina: 36, speed: 8, weight: 76, mobility: 5, grip: 11, balance: 19, recoil: 8, recoilReduction: 4, spiritCharge: 5, cdr: 1 },
        passives: [],
        attacks: [{ name: "Heavy Attack", cd: 5 }],
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
            let ramSkill = cpu.activeAttacks.find(a => a.name === "Heavy Attack"); // Changed to match his actual attack!
            if (ramSkill && ramSkill.currentCd <= 0 && dist < 150) {
                engine.executeAttack("Heavy Attack", cpu, player);
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