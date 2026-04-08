// equipment.js
window.equipmentDB = {
    
	
	bitChips: [
          { id: "starter_bc", name: "Polta", type: "Bit Chip", tags: ["Smash Attack"], image: "./images/beyblade_parts/BC/StandardBitChip_IfritRed.png", topDownImage: "./images/beyblade_parts/BC/StandardBitChip_IfritRed.png", stats: { spiritCharge: 8, cdr: 3, recoilReduction: 1, hp: 30, defense: 5, endurance: 5, weight: 2 }, ultimate: { name: "Will 'O the Wisp", desc: "Generate a ghostly fireball as an arena hazard." } },
        { id: "bc_01", name: "Dragoon", type: "Bit Chip", stats: { spiritCharge: 12, cdr: 5, recoilReduction: 2, hp: 40, attack: 7, weight: 2 }, ultimate: { name: "Storm Tornado", desc: "Huge RPM damage" } },
        { id: "bc_02", name: "Dranzer", type: "Bit Chip", stats: { spiritCharge: 10, cdr: 3, recoilReduction: 2, hp: 50, endurance: 10, weight: 2 }, ultimate: { name: "Flame Saber", desc: "High HP damage" } },
		{ id: "bc_03", 
		name: "Strata Dragoon", 
		type: "Bit Chip", 
		tags: [], 
		image: "./images/beyblade_parts/BC/StandardBitChip_StrataDragoonPurple.png", 
		topDownImage: "./images/beyblade_parts/BC/StandardBitChip_StrataDragoonPurple.png", 
		stats: { spiritCharge: 12, cdr: 5, recoilReduction: 2, hp: 20, attack: 4, weight: 2, mobility: 1 }, 
		ultimate: { name: "Storm Tornado", desc: "Huge RPM damage" } 
		},
		{ id: "bc_04", 
		name: "Fenrir F", 
		type: "Bit Chip", 
		tags: [], 
		image: "./images/beyblade_parts/BC/StandardBitChip_FenrirBlue.png", 
		topDownImage: "./images/beyblade_parts/BC/StandardBitChip_FenrirBlue.png", 
		stats: { spiritCharge: 11, cdr: 4, recoilReduction: 1, hp: 30, attack: 3, weight: 2, mobility: 2, speed: 1 }, 
		ultimate: { name: "Storm Tornado", desc: "Huge RPM damage" } 
		},
		{ id: "bc_05", 
		name: "Sakura Blossom", 
		type: "Bit Chip", 
		tags: [], 
		image: "./images/beyblade_parts/BC/StandardBitChip_SakuraBlossomPink.png", 
		topDownImage: "./images/beyblade_parts/BC/StandardBitChip_SakuraBlossomPink.png", 
		stats: { spiritCharge: 10, cdr: 6, hp: 25, attack: 2, weight: 2, mobility: 2, speed: 2 }, 
		ultimate: { name: "Storm Tornado", desc: "Huge RPM damage" } 
		},
		{ id: "bc_06", 
		name: "Polta", 
		type: "Bit Chip", 
		tags: [], 
		image: "./images/beyblade_parts/BC/StandardBitChip_PoltaRed.png", 
		topDownImage: "./images/beyblade_parts/BC/StandardBitChip_PoltaRed.png", 
		stats: { spiritCharge: 8, cdr: 3, recoilReduction: 1, hp: 30, defense: 5, endurance: 5, weight: 2 }, 
		ultimate: { name: "Will 'O the Wisp", desc: "Generate a ghostly fireball as an arena hazard." } 
		},
		{ id: "bc_07", 
		name: "Crested Carapace Bit Chip", 
		type: "Bit Chip", 
		tags: [], 
		image: "./images/beyblade_parts/BC/StandardBitChip_CrestedCarapaceGreen.png", 
		topDownImage: "./images/beyblade_parts/BC/StandardBitChip_CrestedCarapaceGreen.png", 
		stats: { spiritCharge: 8, cdr: 3, recoilReduction: 1, hp: 30, defense: 5, endurance: 5, weight: 2 }, 
		ultimate: { name: "Storm Tornado", desc: "Huge RPM damage" } 
		},
    ],
	
	
    attackRings: [
{ 
            id: "starter_ar", // Generalized ID
            name: "Delta Wing", // Generalized Name
            type: "Attack Ring", 
            tags: ["Starter", "Delta", "Wing", "Smash Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/DeltaWing.png",  
            stats: { attack: 21, defense: 10, endurance: 12, recoil: 14, weight: 14, recoilReduction: 5 },
			passives: ["Wing Guard"], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "delta_wing",
                    styleName: "Delta Wing Orange", 
                    styleColorSample: "#df6b2a", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/AR/DeltaWing.png", 
                    topDownImage: "./images/beyblade_parts/AR/DeltaWing.png" 
                },
            ]
},
{ 
            id: "godring_test", // Generalized ID
            name: "The God Ring", // Generalized Name
            type: "Attack Ring", 
            tags: ["Development", "Test", "God", "Ring", "Not for Resale"], 
			fallbackImage: "./images/beyblade_parts/AR/GodRing.png",  
            stats: { attack: 24, weight: 15, hp: 800, rpm: 2000, speed: 3, mobility: 5, endurance: 1, recoil: 2, recoilReduction: 1 },
			passives: [], 
			attacks: [{ name: "Heavy Ram", cd: 5 }, { name: "Cyclone Loop", cd: 6 }, { name: "Sharp Shooter", cd: 6 }, { name: "Grindblade Lunge", cd: 8 }, { name: "Aerial Lance", cd: 8 }, { name: "Smash Attack", cd: 5 }, { name: "Spike Attack", cd: 4 }, { name: "Upper Attack", cd: 6 }, { name: "Barrage Attack", cd: 6 }, { name: "Cross Smash", cd: 6 }, { name: "Concentrate Defense", cd: 7 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "godring_1",
                    styleName: "The God Ring", 
                    styleColorSample: "#FFFFFF", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/AR/GodRing.png", 
                    topDownImage: "./images/beyblade_parts/AR/GodRing.png" 
                },
            ]
},
{ 
            id: "godring_test2", // Generalized ID
            name: "The God Ring 2", // Generalized Name
            type: "Attack Ring", 
            tags: ["Development", "Test", "God", "Ring", "Not for Resale"], 
			fallbackImage: "./images/beyblade_parts/AR/GodRing.png",  
            stats: { attack: 24, weight: 15, hp: 800, rpm: 3000, speed: 3, mobility: 5, endurance: 1, recoil: 2, recoilReduction: 1 },
			passives: [], 
			attacks: [{ name: "Side Swipe", cd: 6 }, { name: "Charge Dash", cd: 8 }, { name: "Cyclone Loop", cd: 6 }, { name: "Extreme Speed", cd: 7 }, { name: "Meteor Dash", cd: 7 }, { name: "Spin Burst", cd: 8 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "godring_2",
                    styleName: "The God Ring 2", 
                    styleColorSample: "#000000", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/AR/GodRing2.png", 
                    topDownImage: "./images/beyblade_parts/AR/GodRing2.png" 
                },
            ]
},
{ 
            id: "ar_01", // Generalized ID
            name: "Cross Dragon", // Generalized Name
            type: "Attack Ring", 
            tags: ["Dragoon", "Cross", "Spike", "Dragon", "Spike Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/CrossDragon.png", 
            stats: { attack: 28, defense: 9, recoil: 22, weight: 10, recoilReduction: 2 },
			passives: [], 
			attacks: [{ name: "Spike Attack", cd: 4 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "cross_dragon",
                    styleName: "Cross Dragon White (Spin Dragoon)", 
                    styleColorSample: "#efefeb", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/AR/CrossDragon.png", 
                    topDownImage: "./images/beyblade_parts/AR/CrossDragon.png" 
                },
				{ 
                    styleId: "megaro_arm",
                    styleName: "Cross Dragon Black (Megaro Arm)", 
                    styleColorSample: "#645b5c", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/CrossDragon_MegaroArm.png", 
                    topDownImage: "./images/beyblade_parts/AR/CrossDragon_MegaroArm.png" 
                },
                { 
                    styleId: "noxia_dragon",
                    styleName: "Noxia Cross Dragon", 
                    styleColorSample: "#5c4969", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/AR/CrossDragon_Noxia.png", 
                    topDownImage: "./images/beyblade_parts/AR/CrossDragon_Noxia.png" 
                },
                { 
                    styleId: "luminia_dragon",
                    styleName: "Luminia Cross Dragon", 
                    styleColorSample: "#e5f2dc", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/AR/CrossDragon_Luminia.png", 
                    topDownImage: "./images/beyblade_parts/AR/CrossDragon_Luminia.png" 
                }
            ]
},
{ 
            id: "ar_02", // Generalized ID
            name: "Tri-Cutter", // Generalized Name
            type: "Attack Ring", 
            tags: ["Tri-Cutter", "Spike", "Spike Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/TriCutter.png",
            stats: { attack: 18, defense: 14, recoil: 19, weight: 9, mobility: 5, speed: 4, stamina: 2 },
			radius: 13,
			passives: [], 
			attacks: [{ name: "Spike Attack", cd: 4 }],
						
			//The Array of Unlockable Designs
            styles: [
			    { 
                    styleId: "saizo_black",
                    styleName: "Tri-Cutter Black (Saizo)", 
                    styleColorSample: "#2b2b2b", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/TriCutter.png", 
                    topDownImage: "./images/beyblade_parts/AR/TriCutter.png" 
                },
                { 
                    styleId: "polta_red",
                    styleName: "Tri-Cutter Red (Polta)", 
                    styleColorSample: "#ce2008", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/AR/TriCutter_Red.png", 
                    topDownImage: "./images/beyblade_parts/AR/TriCutter_Red.png" 
                },
                { 
                    styleId: "polta_red_crystal",
                    styleName: "Tri-Cutter Red Photonic Crystal Vers", 
                    styleColorSample: "#5c4969", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/AR/TriCutter_Red_PhotonicCrystalVers.png", 
                    topDownImage: "./images/beyblade_parts/AR/TriCutter_Red_PhotonicCrystalVers.png" 
                },
            ]
},
{ 
            id: "ar_03", // Generalized ID
            name: "Wing Cross", // Generalized Name
            type: "Attack Ring", 
            tags: ["Wing Cross", "Wing", "Spin Steal"], 
			fallbackImage: "./images/beyblade_parts/AR/WingCross.png",
            stats: { attack: 18, defense: 4, recoil: 18, weight: 13, mobility: 2, endurance: 3, stamina: 4 },
			passives: ["Spin Steal"], 
			attacks: [],
						
			//The Array of Unlockable Designs
            styles: [
			    { 
                    styleId: "frostic_dranzer",
                    styleName: "Wing Cross Blue (Frostic Dranzer)", 
                    styleColorSample: "#214e9b", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/AR/WingCross.png", 
                    topDownImage: "./images/beyblade_parts/AR/WingCross.png" 
                },
                { 
                    styleId: "gekiryu_oh",
                    styleName: "Wing Cross Cyan (Gekiryu-oh)", 
                    styleColorSample: "#1a93b7", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/WingCross_GekiryuOh.png", 
                    topDownImage: "./images/beyblade_parts/AR/WingCross_GekiryuOh.png" 
                },
            ]
},
{ 
            id: "ar_04", // Generalized ID
            name: "Fossil Jaw", // Generalized Name
            type: "Attack Ring", 
            tags: ["Fossil", "Jaw", "Rex", "Smash Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/FossilJaw.png",  
            stats: { attack: 30, defense: 7, recoil: 19, weight: 18, recoilReduction: 4, endurance: 3, speed: -2 },
			passives: [], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "fossil_jaw",
                    styleName: "Fossil Jaw Petrified Bone", 
                    styleColorSample: "#b09a7c", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/FossilJaw.png", 
                    topDownImage: "./images/beyblade_parts/AR/FossilJaw.png" 
                },
            ]
},
{ 
            id: "ar_05", // Generalized ID
            name: "Howling Fang", // Generalized Name
            type: "Attack Ring", 
            tags: ["Howling", "Fang", "Upper Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/HowlingFang.png",  
            stats: { attack: 26, defense: 10, recoil: 11, weight: 14, mobility: 1, recoilReduction: 4, endurance: 6, stamina: 2 },
			passives: [], 
			attacks: [{ name: "Upper Attack", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "howling_fang",
                    styleName: "Howling Fang Magenta", 
                    styleColorSample: "#964f77", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/HowlingFang.png", 
                    topDownImage: "./images/beyblade_parts/AR/HowlingFang.png" 
                },
            ]
},
{ 
            id: "ar_06", // Generalized ID
            name: "Hexa-Strike", // Generalized Name
            type: "Attack Ring", 
            tags: ["Hex", "Hexa", "Strike", "Hexa-Strike", "Smash Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/HexaStrike.png",  
            stats: { attack: 22, defense: 7, recoil: 11, weight: 14, recoilReduction: 1, endurance: 10 },
			passives: [], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "hexa_strike",
                    styleName: "Hexa-Strike Blue Cyan", 
                    styleColorSample: "#61bbe4", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/AR/HexaStrike.png", 
                    topDownImage: "./images/beyblade_parts/AR/HexaStrike.png" 
                },
				{ 
                    styleId: "hexa_strike_marigold",
                    styleName: "Hexa-Strike Marigold", 
                    styleColorSample: "#f7ac3c", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/HexaStrike_Marigold.png", 
                    topDownImage: "./images/beyblade_parts/AR/HexaStrike_Marigold.png" 
                },
            ]
},
{ 
            id: "ar_07", // Generalized ID
            name: "Sandstrike", // Generalized Name
            type: "Attack Ring", 
            tags: ["Sand", "Strike", "Barrage Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/Sandstrike.png",  
            stats: { attack: 21, defense: 11, recoil: 10, weight: 13, recoilReduction: 2, mobility: 5, speed: 5 },
			passives: [], 
			attacks: [{ name: "Barrage Attack", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "sandstrike",
                    styleName: "Sandstrike Sandstone", 
                    styleColorSample: "#cebc65", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/Sandstrike.png", 
                    topDownImage: "./images/beyblade_parts/AR/Sandstrike.png" 
                },
            ]
},
{ 
            id: "ar_09", // Generalized ID
            name: "Lunar Gallop", // Generalized Name
            type: "Attack Ring", 
            tags: ["Lunar", "Gallop", "Barrage Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/LunarGallop.png",  
            stats: { attack: 22, defense: 9, endurance: 1, stamina: 1, recoil: 9, weight: 17, recoilReduction: 2, mobility: -2, speed: 5 },
			passives: [], 
			attacks: [{ name: "Barrage Attack", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "lunar_gallop",
                    styleName: "Lunar Gallop", 
                    styleColorSample: "#fef8e6", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/AR/LunarGallop.png", 
                    topDownImage: "./images/beyblade_parts/AR/LunarGallop.png" 
                },
            ]
},
{ 
            id: "ar_10", // Generalized ID
            name: "Master of Flames", // Generalized Name
            type: "Attack Ring", 
            tags: ["Master", "of", "Ifrit", "Flames", "Smash Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/MasterOfFlames.png",  
            stats: { attack: 26, defense: 4, stamina: 2, endurance: 9, recoil: 16, weight: 16, mobility: 3, speed: 3 },
			passives: [], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "master_of_flames",
                    styleName: "Master of Flames", 
                    styleColorSample: "#a9381d", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/MasterOfFlames.png", 
                    topDownImage: "./images/beyblade_parts/AR/MasterOfFlames_VoidFire.png" 
                },
				{ 
                    styleId: "master_of_flames_voidfire",
                    styleName: "Voidfire Master of Flames", 
                    styleColorSample: "#2d2472", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/AR/MasterOfFlames_VoidFire.png", 
                    topDownImage: "./images/beyblade_parts/AR/MasterOfFlames_VoidFire.png" 
                },
            ]
},
{ 
            id: "ar_11", // Generalized ID
            name: "Great Dragon", // Generalized Name
            type: "Attack Ring", 
			subRing: true,
			subRingType: "Free",
            tags: ["Great", "Dragon", "Sub-Attack Ring", "SAR", "Sub"], 
			fallbackImage: "./images/beyblade_parts/AR/GreatDragon.png",  
            stats: { attack: 20, recoil: 8, defense: 5, weight: 13, recoilReduction: 2, mobility: 2, speed: 4 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "great_dragon",
                    styleName: "Great Dragon", 
                    styleColorSample: "#624c8e", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/GreatDragon.png", 
                    topDownImage: "./images/beyblade_parts/AR/GreatDragon.png" 
                },
            ]
},
{ 
            id: "ar_12", // Generalized ID
            name: "Petal Swirl", // Generalized Name
            type: "Attack Ring", 
            tags: ["Petal", "Swirl", "Upper Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/PetalSwirl_SakuraBlossom.png",  
            stats: { attack: 25, recoil: 10, stamina: 5, defense: 3, endurance: 3, weight: 15, mobility: 2, speed: 3 },
			passives: [], 
			attacks: [{ name: "Upper Attack", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "petalswirl_sakura",
                    styleName: "Petal Swirl Sakura Blossom", 
                    styleColorSample: "#d49baf", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/PetalSwirl_SakuraBlossom.png", 
                    topDownImage: "./images/beyblade_parts/AR/PetalSwirl_SakuraBlossom.png" 
                },
				                { 
                    styleId: "petalswirl_plum",
                    styleName: "Petal Swirl Plum Blossom", 
                    styleColorSample: "#ad6878", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/PetalSwirl_PlumBlossom.png", 
                    topDownImage: "./images/beyblade_parts/AR/PetalSwirl_PlumBlossom.png" 
                },
            ]
},
{ 
            id: "ar_13", // Generalized ID
            name: "Feral Crescent", // Generalized Name
            type: "Attack Ring", 
            tags: ["Feral", "Crescent", "Sharp Shooter"], 
			fallbackImage: "./images/beyblade_parts/AR/FeralCrescent.png",  
            stats: { attack: 26, defense: 8, recoil: 11, balance: 5, weight: 15, recoilReduction: 3, mobility: 3, endurance: 4, stamina: 3 },
			passives: [], 
			attacks: [{ name: "Sharp Shooter", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "feral_crescent",
                    styleName: "Feral Crescent Blue", 
                    styleColorSample: "#6bbde0", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/FeralCrescent.png", 
                    topDownImage: "./images/beyblade_parts/AR/FeralCrescent.png" 
                },
            ]
},
{ 
            id: "ar_14", // Generalized ID
            name: "Cross Talon", // Generalized Name
            type: "Attack Ring", 
            tags: ["Cross", "Talon", "Smash Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/CrossTalon.png",  
            stats: { attack: 23, balance: 6, recoil: 9, weight: 13, recoilReduction: 3, mobility: 3, endurance: 5, speed: 1, stamina: 3 },
			passives: [], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "cross_talon",
                    styleName: "Cross Talon", 
                    styleColorSample: "#cead9d", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/AR/CrossTalon.png", 
                    topDownImage: "./images/beyblade_parts/AR/CrossTalon.png" 
                },
				{ 
                    styleId: "cross_talon_steelwing",
                    styleName: "Steel Wing Cross Talon", 
                    styleColorSample: "#b1b2bc", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/CrossTalon_SteelWing.png", 
                    topDownImage: "./images/beyblade_parts/AR/CrossTalon_SteelWing.png" 
                },
            ]
},
{ 
            id: "ar_15", // Generalized ID
            name: "Cross Fox", // Generalized Name
            type: "Attack Ring", 
            tags: ["Cross", "Fox", "Spike Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/CrossFox.png",  
            stats: { attack: 27, defense: 6, recoil: 20, balance: 2, weight: 12, stamina: 4, mobility: 1, speed: 2, recoilReduction: 1 },
			passives: [], 
			attacks: [{ name: "Spike Attack", cd: 4 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "cross_fox",
                    styleName: "Cross Fox", 
                    styleColorSample: "#be7600", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/CrossFox.png", 
                    topDownImage: "./images/beyblade_parts/AR/CrossFox.png" 
                },
            ]
},
{ 
            id: "ar_16", // Generalized ID
            name: "As Survivor", // Generalized Name
            type: "Attack Ring", 
            tags: ["As", "Survivor", "Heavy Ram"], 
			fallbackImage: "./images/beyblade_parts/AR/AsSurvivor.png",  
            stats: { attack: 19, hp: 30, defense: 10, recoil: 10, balance: 6, weight: 15, mobility: 2, recoilReduction: 3 },
			passives: [], 
			attacks: [{ name: "Heavy Ram", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "as_survivor",
                    styleName: "As Survivor", 
                    styleColorSample: "#2936b5", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/AR/AsSurvivor.png", 
                    topDownImage: "./images/beyblade_parts/AR/AsSurvivor.png" 
                },
            ]
},
{ 
            id: "ar_17", // Generalized ID
            name: "Quad Horn", // Generalized Name
            type: "Attack Ring", 
            tags: ["Quad", "Horn", "Smash Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/QuadHorn.png",  
            stats: { attack: 21, hp: 20, defense: 6, recoil: 18, endurance: 5, balance: 1, weight: 13, mobility: 1, recoilReduction: 2 },
			passives: [], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "quad_horn",
                    styleName: "Quad Horn", 
                    styleColorSample: "#466970", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/AR/QuadHorn.png", 
                    topDownImage: "./images/beyblade_parts/AR/QuadHorn.png" 
                },
            ]
},
{ 
            id: "ar_18", // Generalized ID
            name: "Burst Ox", // Generalized Name
            type: "Attack Ring", 
            tags: ["Burst", "Ox", "Heavy Ram"], 
			fallbackImage: "./images/beyblade_parts/AR/BurstOx.png",  
            stats: { attack: 23, hp: 20, defense: 11, stamina: 6, recoil: 17, endurance: 4, balance: 4, weight: 17, speed: -2, mobility: -1, recoilReduction: 4 },
			passives: [], 
			attacks: [{ name: "Heavy Ram", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "burst_ox",
                    styleName: "Burst Ox", 
                    styleColorSample: "#244875", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/AR/BurstOx.png", 
                    topDownImage: "./images/beyblade_parts/AR/BurstOx.png" 
                },
            ]
},
{ 
            id: "ar_19", // Generalized ID
            name: "Chainblade Wyvern", // Generalized Name
            type: "Attack Ring", 
            tags: ["Chainblade", "Wyvern", "Spike Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/ChainbladeWyvern.png",  
            stats: { attack: 27, hp: 20, endurance: 3, stamina: 4, balance: 2, weight: 14, mobility: 5, speed: 2, recoil: 19, recoilReduction: 1 },
			passives: [], 
			attacks: [{ name: "Spike Attack", cd: 4 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "chainblade_wyvern",
                    styleName: "Chainblade Wyvern", 
                    styleColorSample: "#912e2e", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/ChainbladeWyvern.png", 
                    topDownImage: "./images/beyblade_parts/AR/ChainbladeWyvern.png" 
                },
            ]
},
{ 
            id: "ar_20", // Generalized ID
            name: "Basilisk Eye", // Generalized Name
            type: "Attack Ring", 
            tags: ["Basilisk", "Eye", "Barrage Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/BasiliskEye.png",  
            stats: { attack: 19, stamina: 10, recoil: 15, balance: 4, weight: 15, mobility: 2, endurance: 5, defense: 4 },
			passives: [], 
			attacks: [{ name: "Barrage Attack", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "basilisk_eye",
                    styleName: "Basilisk Eye", 
                    styleColorSample: "#63818d", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/AR/BasiliskEye.png", 
                    topDownImage: "./images/beyblade_parts/AR/BasiliskEye.png" 
                },
            ]
},
{ 
            id: "ar_21", // Generalized ID
            name: "Protoshell Shield", // Generalized Name
            type: "Attack Ring", 
            tags: ["Protoshell", "Shield", "Concentrate Defense"], 
			fallbackImage: "./images/beyblade_parts/AR/Protoshell_Shield.png",  
            stats: { attack: 22, stamina: 4, balance: 2, weight: 16, mobility: -1, endurance: 2, defense: 12, recoil: 8 },
			passives: [], 
			attacks: [{ name: "Concentrate Defense", cd: 7 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "protoshell",
                    styleName: "Protoshell Shield", 
                    styleColorSample: "#279b3e", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/Protoshell_Shield.png", 
                    topDownImage: "./images/beyblade_parts/AR/Protoshell_Shield.png" 
                },
				{ 
                    styleId: "protoshell_maxdesign",
                    styleName: "Protoshell Shield (Max Version)", 
                    styleColorSample: "#279b3e", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/AR/Protoshell_Shield_MaxShieldVersion.png", 
                    topDownImage: "./images/beyblade_parts/AR/Protoshell_Shield_MaxShieldVersion.png" 
                },
            ]
},
{ 
            id: "ar_22", // Generalized ID
            name: "Wing Cutter", // Generalized Name
            type: "Attack Ring", 
            tags: ["Wing", "Cutter", "Sharp Shooter"], 
			fallbackImage: "./images/beyblade_parts/AR/WingCutter.png",  
            stats: { attack: 25, stamina: 1, weight: 14, mobility: 4, speed: 4, endurance: 3, recoil: 15, recoilReduction: 1 },
			passives: [], 
			attacks: [{ name: "Sharp Shooter", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "wingcutter",
                    styleName: "Wing Cutter", 
                    styleColorSample: "#4667ce", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/WingCutter.png", 
                    topDownImage: "./images/beyblade_parts/AR/WingCutter.png" 
                },
            ]
},
{ 
            id: "ar_23", // Generalized ID
            name: "Mythic Horn", // Generalized Name
            type: "Attack Ring", 
            tags: ["Mythic", "Horn", "Sharp Shooter"], 
			fallbackImage: "./images/beyblade_parts/AR/MythicHorn.png",  
            stats: { attack: 22, stamina: 6, weight: 14, mobility: 2, recoil: 16, endurance: 4, balance: 3, recoilReduction: 3 },
			passives: [], 
			attacks: [{ name: "Sharp Shooter", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "mythichorn",
                    styleName: "Mythic Horn", 
                    styleColorSample: "#889297", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/MythicHorn.png", 
                    topDownImage: "./images/beyblade_parts/AR/MythicHorn.png" 
                },
            ]
},
{ 
            id: "ar_24", // Generalized ID
            name: "Imperial Rising", // Generalized Name
            type: "Attack Ring", 
            tags: ["Imperial", "Rising", "Upper Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/ImperialRising.png",  
            stats: { attack: 26, weight: 15, speed: 3, mobility: 5, endurance: 3, defense: 7, recoil: 17, recoilReduction: 1 },
			passives: [], 
			attacks: [{ name: "Upper Attack", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "imperial_rising",
                    styleName: "Imperial Rising", 
                    styleColorSample: "#889297", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/AR/ImperialRising.png", 
                    topDownImage: "./images/beyblade_parts/AR/ImperialRising.png" 
                },
            ]
},
{ 
            id: "ar_25", // Generalized ID
            name: "Dragon Head", // Generalized Name
            type: "Attack Ring", 
            tags: ["Dragon", "Head", "Smash Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/DragonHead.png",  
            stats: { attack: 26, weight: 13, speed: 5, mobility: 4, defense: 4, stamina: 3, recoil: 17, recoilReduction: 2 },
			passives: [], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "dragon_head",
                    styleName: "Dragon Head", 
                    styleColorSample: "#fbfaf0", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/DragonHead.png", 
                    topDownImage: "./images/beyblade_parts/AR/DragonHead.png" 
                },
				{ 
                    styleId: "dragon_head_gunmetal",
                    styleName: "Imperial Rising", 
                    styleColorSample: "#78746f", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/DragonHead_Gunmetal.png", 
                    topDownImage: "./images/beyblade_parts/AR/DragonHead_Gunmetal.png" 
                },
            ]
},
{ 
            id: "ar_26", // Generalized ID
            name: "Jungle Guardian", // Generalized Name
            type: "Attack Ring", 
            tags: ["Jungle", "Guardian", "Smash Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/JungleGuardian.png",  
            stats: { attack: 24, hp: 20, weight: 15, speed: -1, mobility: 4, defense: 5, endurance: 1, stamina: 9, recoil: 18, recoilReduction: 2 },
			passives: [], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "jungle_guardian",
                    styleName: "Jungle Guardian", 
                    styleColorSample: "#2a8d36", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/AR/JungleGuardian.png", 
                    topDownImage: "./images/beyblade_parts/AR/JungleGuardian.png" 
                },
            ]
},
{ 
            id: "ar_27", // Generalized ID
            name: "Roaring Venom", // Generalized Name
            type: "Attack Ring", 
			subRing: true,
			subRingType: "Free",
            tags: ["Roaring", "Venom", "Sub-Attack Ring", "SAR", "Sub"], 
			fallbackImage: "./images/beyblade_parts/AR/RoaringVenom.png",  
            stats: { attack: 21, weight: 13, speed: 4, balance: 1, mobility: 2, defense: 3, endurance: 4, recoil: 10, recoilReduction: 1 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "roaring_venom",
                    styleName: "Roaring Venom", 
                    styleColorSample: "#bcb3a3", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/RoaringVenom.png", 
                    topDownImage: "./images/beyblade_parts/AR/RoaringVenom.png" 
                },
            ]
},
{ 
            id: "ar_28", // Generalized ID
            name: "Rolling Hammer", // Generalized Name
            type: "Attack Ring", 
            tags: ["Rolling", "Hammer", "Concentrate Defense"], 
			fallbackImage: "./images/beyblade_parts/AR/RollingHammer_Violet.png",  
            stats: { attack: 22, weight: 14, speed: 1, balance: 4, mobility: 2, defense: 7, endurance: 5, recoil: 14, recoilReduction: 2 },
			passives: [], 
			attacks: [{ name: "Concentrate Defense", cd: 7 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "rolling_hammer_violet",
                    styleName: "Rolling Hammer (Violet)", 
                    styleColorSample: "#61516f", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/AR/RollingHammer_Violet.png", 
                    topDownImage: "./images/beyblade_parts/AR/RollingHammer_Violet.png" 
                },
				{ 
                    styleId: "rolling_hammer_citrus",
                    styleName: "Rolling Hammer (Citrus)", 
                    styleColorSample: "#3fb146", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/RollingHammer_Citrus.png", 
                    topDownImage: "./images/beyblade_parts/AR/RollingHammer_Citrus.png" 
                },
				{ 
                    styleId: "rolling_hammer_gray",
                    styleName: "Rolling Hammer (Gray)", 
                    styleColorSample: "#595959", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/AR/RollingHammer_Gray.png", 
                    topDownImage: "./images/beyblade_parts/AR/RollingHammer_Gray.png" 
                },
            ]
},
{ 
            id: "ar_29", // Generalized ID
            name: "Tidal Chaos", // Generalized Name
            type: "Attack Ring", 
            tags: ["Sonic", "Adventure", "Chaos", "Perfect", "Tidal"], 
			fallbackImage: "./images/beyblade_parts/AR/TidalChaos.png",  
            stats: { attack: 24, hp: 30, weight: 16, speed: -1, mobility: -1, defense: 3, endurance: 10, stamina: 9, recoil: 17, recoilReduction: 1 },
			passives: [], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "tidal_chaos",
                    styleName: "Tidal Chaos", 
                    styleColorSample: "#4d8fab", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/AR/TidalChaos.png", 
                    topDownImage: "./images/beyblade_parts/AR/TidalChaos.png" 
                },
            ]
},
{ 
            id: "ar_30", // Generalized ID
            name: "Tiger Claw", // Generalized Name
            type: "Attack Ring", 
            tags: ["Tiger", "Claw", "Barrage Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/TigerClaw.png",  
            stats: { attack: 22, hp: 15, weight: 13, speed: 2, mobility: 4, defense: 4, endurance: 5, stamina: 3, recoil: 15, recoilReduction: 2 },
			passives: [], 
			attacks: [{ name: "Barrage Attack", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "tiger_claw",
                    styleName: "Tiger Claw", 
                    styleColorSample: "#abaaa9", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/TigerClaw.png", 
                    topDownImage: "./images/beyblade_parts/AR/TigerClaw.png" 
                },
            ]
},
{ 
            id: "ar_31", // Generalized ID
            name: "Upper Dragoon", // Generalized Name
            type: "Attack Ring", 
            tags: ["Upper", "Dragoon", "Dragon", "Kid", "Upper Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/UpperDragoon.png",  
            statsRight: { attack: 23, hp: 20, weight: 15, balance: 5, speed: 2, mobility: 4, defense: 4, endurance: 2, stamina: 3, recoil: 16 },
			statsLeft: { attack: 25, hp: 10, weight: 15, balance: 5, speed: 2, mobility: 4, defense: 5, endurance: 1, stamina: 3, recoil: 17 },
			radius: 16,
			passivesRight: [],
			passivesLeft: [], 
			attacksRight: [{ name: "Upper Attack", cd: 5 }],
			attacksLeft: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "upperdragoon",
                    styleName: "Upper Dragoon", 
                    styleColorSample: "#f5b702", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/UpperDragoon.png", 
                    topDownImage: "./images/beyblade_parts/AR/UpperDragoon.png" 
                },
				{ 
                    styleId: "upperdragoon_bronze",
                    styleName: "Upper Dragoon (Bronze)", 
                    styleColorSample: "#a37642", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/UpperDragoon_Bronze.png", 
                    topDownImage: "./images/beyblade_parts/AR/UpperDragoon_Bronze.png" 
                },
				{ 
                    styleId: "upperdragoon_white",
                    styleName: "Upper Dragoon (White)", 
                    styleColorSample: "#efefeb", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/AR/UpperDragoon_White.png", 
                    topDownImage: "./images/beyblade_parts/AR/UpperDragoon_White.png" 
                },
            ]
},
{ 
            id: "ar_32", // Generalized ID
            name: "Upper Dragoon Spin Cutter Mod", // Generalized Name
            type: "Attack Ring", 
            tags: ["Upper", "Dragoon", "Dragon", "Kid", "Carlos", "Illegal", "Modification", "Mod", "Spin Cutter"], 
			fallbackImage: "./images/beyblade_parts/AR/UpperDragoon_SpinCutterMod.png",  
            stats: { attack: 18, hp: 10, weight: 10, speed: 3, mobility: 3, defense: -1, endurance: 4, stamina: 4, recoil: 18, recoilReduction: 1 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "upperdragoon_spincuttermod",
                    styleName: "Upper Dragoon Spin Cutter Mod", 
                    styleColorSample: "#f5b702", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/AR/UpperDragoon_SpinCutterMod.png", 
                    topDownImage: "./images/beyblade_parts/AR/UpperDragoon_SpinCutterMod.png" 
                },
            ]
},
{ 
            id: "ar_33", // Generalized ID
            name: "Shark Jaw", // Generalized Name
            type: "Attack Ring",
			subRing: true,
			subRingType: "Free",			
            tags: ["Shark", "Jaw", "Sub-Attack Ring", "SAR", "Sub"], 
			fallbackImage: "./images/beyblade_parts/AR/SharkJaw.png",  
            stats: { attack: 22, weight: 12, speed: 2, mobility: 3, defense: 3, endurance: -1, stamina: 2, recoil: 16, recoilReduction: 2 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "sharkjaw",
                    styleName: "Shark Jaw", 
                    styleColorSample: "#1e6a87", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/AR/SharkJaw.png", 
                    topDownImage: "./images/beyblade_parts/AR/SharkJaw.png" 
                },
            ]
},
{ 
            id: "ar_34", // Generalized ID
            name: "Devil Crusher", // Generalized Name
            type: "Attack Ring",			
            tags: ["Devil", "Crusher", "Upper Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/DevilCrusher.png",  
            stats: { attack: 24, weight: 15, mobility: -1, balance: 3, speed: 2, defense: 2, endurance: 3, stamina: 1, recoil: 15, recoilReduction: 1 },
			passives: [], 
			attacks: [{ name: "Upper Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "devilcrusher",
                    styleName: "Devil Crusher", 
                    styleColorSample: "#bdd9cd", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/AR/DevilCrusher.png", 
                    topDownImage: "./images/beyblade_parts/AR/DevilCrusher.png" 
                },
            ]
},
{ 
            id: "ar_35", // Generalized ID
            name: "Armored Sprinter", // Generalized Name
            type: "Attack Ring",			
            tags: ["Armored", "Sprinter", "Concentrate Defense"], 
			fallbackImage: "./images/beyblade_parts/AR/ArmoredSprinter.png",  
            stats: { attack: 22, weight: 15, mobility: 2, balance: 1, speed: 4, defense: 6, endurance: 3, stamina: 4, recoil: 17, },
			passives: [], 
			attacks: [{ name: "Concentrate Defense", cd: 7 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "armoredsprinter",
                    styleName: "Armored Sprinter", 
                    styleColorSample: "#eef2f6", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/ArmoredSprinter.png", 
                    topDownImage: "./images/beyblade_parts/AR/ArmoredSprinter.png" 
                },
            ]
},
{ 
            id: "ar_36", // Generalized ID
            name: "Grim Scythe", // Generalized Name
            type: "Attack Ring",			
            tags: ["Grim", "Scythe", "Offensive Guard"], 
			fallbackImage: "./images/beyblade_parts/AR/GrimScythe.png",  
            stats: { attack: 22, weight: 15, mobility: 2, balance: 3, speed: 2, defense: 3, endurance: 6, stamina: 3, recoil: 15, },
			passives: ["Offensive Guard"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "grimscythe",
                    styleName: "Grim Scythe", 
                    styleColorSample: "#202b37", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/AR/GrimScythe.png", 
                    topDownImage: "./images/beyblade_parts/AR/GrimScythe.png" 
                },
            ]
},
{ 
            id: "ar_37", // Generalized ID
            name: "Thundering Shriek", // Generalized Name
            type: "Attack Ring",			
            tags: ["Thundering", "Shriek", "Upper Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/ThunderingShriek.png",  
            stats: { attack: 25, weight: 14, mobility: 3, balance: -1, speed: 6, defense: 1, endurance: 1, stamina: 2, recoil: 18, },
			passives: [], 
			attacks: [{ name: "Upper Attack", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "thunderingshriek",
                    styleName: "Thundering Shriek", 
                    styleColorSample: "#833b86", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/AR/ThunderingShriek.png", 
                    topDownImage: "./images/beyblade_parts/AR/ThunderingShriek.png" 
                },
            ]
},
{ 
            id: "prototype_bossbey", // Generalized ID
            name: "Prototype Boss Beyblade", // Generalized Name
            type: "Attack Ring",			
            tags: ["Thundering", "Shriek", "Upper Attack"], 
			fallbackImage: "./images/boss_beyblades/prototypebossbey.png",  
            stats: { attack: 25, weight: 14, mobility: 3, balance: -1, speed: 6, defense: 1, endurance: 1, stamina: 2, recoil: 18, },
			passives: [], 
			attacks: [{ name: "Upper Attack", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "proto_bossbey",
                    styleName: "Prototype Boss Beyblade", 
                    styleColorSample: "#833b86", 
                    styleRarity: 2,
                    image: "./images/boss_beyblades/prototypebossbey.png", 
                    topDownImage: "./images/boss_beyblades/prototypebossbey.png" 
                },
            ]
},
    ],
	
	
        subAttackRings: [
{ 
            id: "sar_01", // Generalized ID
            name: "Wing Blade", // Generalized Name
            type: "subAttackRing", 
			subRingType: "Free",
            tags: ["Wing", "Blade", "Free", "Cross Smash"], 
			fallbackImage: "./images/beyblade_parts/SAR/WingBlade_Orange.png",  
            stats: { weight: 3, hp: 20, attack: 6, recoil: 7, stamina: 1, endurance: 2, speed: 1, recoilReduction: 2 },
			passives: [], 
			attacks: [{ name: "Cross Smash", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "wingblade_SAR_orange",
                    styleName: "Wing Blade Orange (Strata Dragoon)", 
                    styleColorSample: "#f88008", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/SAR/WingBlade_Orange.png", 
                    topDownImage: "./images/beyblade_parts/SAR/WingBlade_Orange.png" 
                },
				{ 
                    styleId: "wingblade_SAR_teal",
                    styleName: "Wing Blade Teal", 
                    styleColorSample: "#72a5a9", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/SAR/WingBlade_Teal.png", 
                    topDownImage: "./images/beyblade_parts/SAR/WingBlade_Teal.png" 
                },
            ]
},
{ 
            id: "sar_02", // Generalized ID
            name: "Venom Tail", // Generalized Name
            type: "subAttackRing", 
			subRingType: "Free",
            tags: ["Venom", "Tail", "Free", "Cross Lance"], 
			fallbackImage: "./images/beyblade_parts/SAR/VenomTail.png",  
            stats: { weight: 4, attack: 6, recoil: 8, stamina: 2, balance: -1, endurance: -1, mobility: 1, speed: 1, recoilReduction: 1 },
			passives: [], 
			attacks: [{ name: "Cross Lance", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "venomtail",
                    styleName: "Venom Tail (Roaring Venom)", 
                    styleColorSample: "#2f1834", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/SAR/VenomTail.png", 
                    topDownImage: "./images/beyblade_parts/SAR/VenomTail.png" 
                },
            ]
},
{ 
            id: "sar_03", // Generalized ID
            name: "Submerge Attacker", // Generalized Name
            type: "subAttackRing", 
			subRingType: "Free",
            tags: ["Submerge", "Attacker", "Free", "Cross Smash"], 
			fallbackImage: "./images/beyblade_parts/SAR/SubmergeAttack.png",  
            stats: { weight: 3, attack: 3, recoil: 1, stamina: 2, balance: 1, mobility: 1, defense: 2, speed: 1, recoilReduction: 2 },
			passives: [], 
			attacks: [{ name: "Cross Smash", cd: 6 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "submergeattack",
                    styleName: "Submerge Attacker Dark Blue (Shark Jaw)", 
                    styleColorSample: "#251c81", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/SAR/SubmergeAttack.png", 
                    topDownImage: "./images/beyblade_parts/SAR/SubmergeAttack.png" 
                },
				{ 
                    styleId: "submergeattack_red",
                    styleName: "Submerge Attacker Red", 
                    styleColorSample: "#da0a10", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/SAR/SubmergeAttack_Red.png", 
                    topDownImage: "./images/beyblade_parts/SAR/SubmergeAttack_Red.png" 
                },
            ]
},
         ],
	
	weightDisks: [
{ 
            id: "wd_01", // Generalized ID
            name: "Six Balance", // Generalized Name
            type: "Weight Disk", 
            tags: ["Six", "Balance"], 
			fallbackImage: "./images/beyblade_parts/WD/SixBalance.png",  
            stats: { weight: 30, hp: 50, rpm: 110, defense: 2, stamina: 3, endurance: 1, speed: 2, recoilReduction: 2 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "six_balance",
                    styleName: "Six Balance", 
                    styleColorSample: "#a0a29d", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/WD/SixBalance.png", 
                    topDownImage: "./images/beyblade_parts/WD/SixBalance.png" 
                },
            ]
},
{ 
            id: "wd_02", // Generalized ID
            name: "Six Wide", // Generalized Name
            type: "Weight Disk", 
            tags: ["Six", "Wide"], 
			fallbackImage: "./images/beyblade_parts/WD/SixWide.png",
            stats: { weight: 28, hp: 40, rpm: 140, stamina: 7, endurance: 1, mobility: 8, recoil: 1, attack: 2 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "six_wide",
                    styleName: "Six Wide", 
                    styleColorSample: "#a0a29d", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/WD/SixWide.png", 
                    topDownImage: "./images/beyblade_parts/WD/SixWide.png" 
                },
				{ 
                    styleId: "six_wide_blue",
                    styleName: "Six Wide Blue", 
                    styleColorSample: "#244875", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/WD/SixWide_Blue.png", 
                    topDownImage: "./images/beyblade_parts/WD/SixWide_Blue.png" 
                },
				{ 
                    styleId: "six_wide_green",
                    styleName: "Six Wide Green", 
                    styleColorSample: "#255917", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/WD/SixWide_Green.png", 
                    topDownImage: "./images/beyblade_parts/WD/SixWide_Green.png" 
                },
				{ 
                    styleId: "six_wide_powderfinish_pewter",
                    styleName: "Six Wide Powder Finish Pewter", 
                    styleColorSample: "#8598aa", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/WD/SixWide_PowderedFinish_Pewter.png", 
                    topDownImage: "./images/beyblade_parts/WD/SixWide_PowderedFinish_Pewter.png" 
                },
            ]
},
{ 
            id: "wd_03", // Generalized ID
            name: "Six Balance (Indentation Mold)", // Generalized Name
            type: "Weight Disk", 
            tags: ["Six", "Balance", "Indent"], 
			fallbackImage: "./images/beyblade_parts/WD/SixBalance_IndentMold.png",
            stats: { weight: 28, hp: 50, rpm: 130, stamina: 5, endurance: 1, speed: 4, mobility: 1, recoilReduction: 2 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "six_balance_indent",
                    styleName: "Six Balance (Indentation Mold)", 
                    styleColorSample: "#6c756d", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/WD/SixBalance_IndentMold.png", 
                    topDownImage: "./images/beyblade_parts/WD/SixBalance_IndentMold.png" 
                },
            ]
},
{ 
            id: "wd_04", // Generalized ID
            name: "Six Heavy", // Generalized Name
            type: "Weight Disk", 
            tags: ["Six", "Heavy"], 
			fallbackImage: "./images/beyblade_parts/WD/SixHeavy.png",
            stats: { weight: 32, hp: 70, attack: 5, defense: 5, rpm: 110, stamina: -1, endurance: -1, speed: 2, recoilReduction: 1 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "six_heavy",
                    styleName: "Six Heavy", 
                    styleColorSample: "#a0a29d", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/WD/SixHeavy.png", 
                    topDownImage: "./images/beyblade_parts/WD/SixHeavy.png" 
                },
            ]
},
{ 
            id: "wd_05", // Generalized ID
            name: "Eight Wide (Hard Edge Mold)", // Generalized Name
            type: "Weight Disk", 
            tags: ["Eight", "Wide", "Hard Edge"], 
			fallbackImage: "./images/beyblade_parts/WD/EightWide_HardEdgeMold.png",
            stats: { weight: 31, hp: 65, attack: 5, rpm: 120, recoil: 4, endurance: -1, mobility: 2 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "eight_wide_hardedge",
                    styleName: "Eight Wide (Hard Edge Mold)", 
                    styleColorSample: "#9b9da2", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/WD/EightWide_HardEdgeMold.png", 
                    topDownImage: "./images/beyblade_parts/WD/EightWide_HardEdgeMold.png" 
                },
            ]
},
{ 
            id: "wd_06", // Generalized ID
            name: "Eight Wide (Soft Edge Mold)", // Generalized Name
            type: "Weight Disk", 
            tags: ["Eight", "Wide", "Soft Edge"], 
			fallbackImage: "./images/beyblade_parts/WD/EightWide_SoftEdgeMold.png",
            stats: { weight: 30, hp: 60, defense: 2, endurance: 1, rpm: 130, recoil: 2, mobility: 2 },
			passives: ["Wall Rebound Assist"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "eight_wide_softedge",
                    styleName: "Eight Wide (Soft Edge Mold)", 
                    styleColorSample: "#c0c0c0", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/WD/EightWide_SoftEdgeMold.png", 
                    topDownImage: "./images/beyblade_parts/WD/EightWide_SoftEdgeMold.png" 
                },
				{ 
                    styleId: "eight_wide_softedge_blue",
                    styleName: "Eight Wide (Soft Edge Mold) Blue", 
                    styleColorSample: "#244875", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/WD/EightWide_SoftEdgeMold_Blue.png", 
                    topDownImage: "./images/beyblade_parts/WD/EightWide_SoftEdgeMold_Blue.png" 
                },
            ]
},
{ 
            id: "wd_07", // Generalized ID
            name: "Eight Wide Compact", // Generalized Name
            type: "Weight Disk", 
            tags: ["Eight", "Wide", "Compact"], 
			fallbackImage: "./images/beyblade_parts/WD/EightWide_CompactVersion.png",
            stats: { weight: 29, hp: 50, attack: 2, defense: 2, rpm: 120, recoil: 2, speed: 2, mobility: 2 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "eight_wide_compactversion",
                    styleName: "Eight Wide Compact", 
                    styleColorSample: "#c0c0c0", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/WD/EightWide_CompactVersion.png", 
                    topDownImage: "./images/beyblade_parts/WD/EightWide_CompactVersion.png" 
                },
            ]
},
{ 
            id: "wd_08", // Generalized ID
            name: "Eight Balance", // Generalized Name
            type: "Weight Disk", 
            tags: ["Eight", "Balance"], 
			fallbackImage: "./images/beyblade_parts/WD/EightBalance.png",
            stats: { weight: 32, hp: 55, rpm: 120, attack: 1, defense: 2, stamina: 4, mobility: 5, recoilReduction: 2 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "eight_balance",
                    styleName: "Eight Balance", 
                    styleColorSample: "#c0c0c0", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/WD/EightBalance.png", 
                    topDownImage: "./images/beyblade_parts/WD/EightBalance.png" 
                },
            ]
},
{ 
            id: "wd_09", // Generalized ID
            name: "Eight Balance (Indentation Mold)", // Generalized Name
            type: "Weight Disk", 
            tags: ["Eight", "Balance", "Indent"], 
			fallbackImage: "./images/beyblade_parts/WD/EightBalance_IndentMold.png",
            stats: { weight: 30, hp: 45, rpm: 140, endurance: 2, stamina: 3, mobility: 2, speed: 1, recoilReduction: 4 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "eight_balance_indent",
                    styleName: "Eight Balance (Indentation Mold)", 
                    styleColorSample: "#808080", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/WD/EightBalance_IndentMold.png", 
                    topDownImage: "./images/beyblade_parts/WD/EightBalance_IndentMold.png" 
                },
            ]
},
{ 
            id: "wd_10", // Generalized ID
            name: "Eight Balance Compact", // Generalized Name
            type: "Weight Disk", 
            tags: ["Eight", "Balance", "Compact"], 
			fallbackImage: "./images/beyblade_parts/WD/EightBalance_CompactVersion.png",
            stats: { weight: 28, hp: 40, rpm: 160, attack: 1, defense: -1, endurance: 2, stamina: 1, mobility: 3, speed: 3, recoilReduction: 2 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "eight_balance_compactversion",
                    styleName: "Eight Balance Compact", 
                    styleColorSample: "#c0c0c0", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/WD/EightBalance_CompactVersion.png", 
                    topDownImage: "./images/beyblade_parts/WD/EightBalance_CompactVersion.png" 
                },
            ]
},
{ 
            id: "wd_11", // Generalized ID
            name: "Eight Heavy", // Generalized Name
            type: "Weight Disk", 
            tags: ["Eight", "Heavy"], 
			fallbackImage: "./images/beyblade_parts/WD/EightHeavy.png",
            stats: { weight: 34, hp: 70, rpm: 120, attack: 5, stamina: -1, mobility: -1, speed: 2, recoilReduction: 3 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "eight_heavy",
                    styleName: "Eight Heavy", 
                    styleColorSample: "#c0c0c0", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/WD/EightHeavy.png", 
                    topDownImage: "./images/beyblade_parts/WD/EightHeavy.png" 
                },
                { 
                    styleId: "eight_heavy_black",
                    styleName: "Eight Heavy Black", 
                    styleColorSample: "#242933", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/WD/EightHeavy_BlackVersion.png", 
                    topDownImage: "./images/beyblade_parts/WD/EightHeavy_BlackVersion.png" 
                },
            ]
},
{ 
            id: "wd_12", // Generalized ID
            name: "Medium Plate", // Generalized Name
            type: "Weight Disk", 
            tags: ["Plate", "Medium"], 
			fallbackImage: "./images/beyblade_parts/WD/MediumPlate.png",
            stats: { weight: 32, hp: 60, rpm: 140, attack: 1, endurance: 1, stamina: 3, speed: 2, recoilReduction: 3 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "medium_plate",
                    styleName: "Medium Plate", 
                    styleColorSample: "#888e94", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/WD/MediumPlate.png", 
                    topDownImage: "./images/beyblade_parts/WD/MediumPlate.png" 
                },
            ]
},
{ 
            id: "wd_13", // Generalized ID
            name: "Lemon", // Generalized Name
            type: "Weight Disk", 
            tags: ["Lemon", "Novelty"], 
			fallbackImage: "./images/beyblade_parts/WD/LemonWeightDisk.png",
            stats: { weight: 30, hp: 55, rpm: 150, attack: -1, endurance: 4, stamina: 1, recoilReduction: 5 },
			passives: ["Sour Saucer"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "lemon_wd",
                    styleName: "Lemon", 
                    styleColorSample: "#f2c90e", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/WD/LemonWeightDisk.png", 
                    topDownImage: "./images/beyblade_parts/WD/LemonWeightDisk.png" 
                },
            ]
},
{ 
            id: "wd_14", // Generalized ID
            name: "Six Heavy Attack", // Generalized Name
            type: "Weight Disk", 
            tags: ["Six", "Heavy", "Attack"], 
			fallbackImage: "./images/beyblade_parts/WD/SixHeavyAttack.png",
            stats: {  weight: 33, hp: 50, attack: 10, defense: 2, rpm: 110, endurance: -3, speed: 5, mobility: -1, recoil: 4, recoilReduction: -1  },
			passives: ["Hyper Aggression"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "sixheavyattack_wd",
                    styleName: "Six Heavy Attack", 
                    styleColorSample: "#8f9a98", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/WD/SixHeavyAttack.png", 
                    topDownImage: "./images/beyblade_parts/WD/SixHeavyAttack.png" 
                },
            ]
},
{ 
            id: "wd_15", // Generalized ID
            name: "Twelve Shift", // Generalized Name
            type: "Weight Disk", 
            tags: ["Twelve", "Shift"], 
			fallbackImage: "./images/beyblade_parts/WD/TwelveShift.png",
            stats: {  weight: 31, attack: -1, defense: 1, rpm: 115, endurance: 3, stamina: 3, balance: 2, recoil: 1, recoilReduction: 4  },
			passives: ["Counterattack"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "twelve_shift",
                    styleName: "Twelve Shift", 
                    styleColorSample: "#838285", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/WD/TwelveShift.png", 
                    topDownImage: "./images/beyblade_parts/WD/TwelveShift.png" 
                },
            ]
},
{ 
            id: "wd_16", // Generalized ID
            name: "Ten Balance", // Generalized Name
            type: "Weight Disk", 
            tags: ["Ten", "Balance"], 
			fallbackImage: "./images/beyblade_parts/WD/TenBalance.png",
            stats: {  weight: 33, hp: 40, rpm: 125, attack: 3, defense: 2, balance: 1, stamina: 2, endurance: 1, recoil: 2 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "ten_balance",
                    styleName: "Ten Balance", 
                    styleColorSample: "#a5a5a5", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/WD/TenBalance.png", 
                    topDownImage: "./images/beyblade_parts/WD/TenBalance.png" 
                },
            ]
},
{ 
            id: "wd_17", // Generalized ID
            name: "Ten Heavy", // Generalized Name
            type: "Weight Disk", 
            tags: ["Ten", "Heavy"], 
			fallbackImage: "./images/beyblade_parts/WD/TenBalance.png",
            stats: {  weight: 35, rpm: 145, attack: 2, defense: 3, stamina: 3, endurance: 3, speed: -1, mobility: -1 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "ten_heavy",
                    styleName: "Ten Heavy", 
                    styleColorSample: "#a5a5a5", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/WD/TenHeavy.png", 
                    topDownImage: "./images/beyblade_parts/WD/TenHeavy.png" 
                },
            ]
},
{ 
            id: "wd_18", // Generalized ID
            name: "Spin Cutter", // Generalized Name
            type: "Weight Disk", 
            tags: ["Spin", "Cutter", "Illegal", "Modification", "Mod"], 
			fallbackImage: "./images/beyblade_parts/WD/SpinCutter.png",
            stats: {  weight: 49, hp: 20, rpm: 120, attack: 10, defense: 2, stamina: -3, endurance: 1, speed: -3, mobility: -2, recoil: 7 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "spincutter",
                    styleName: "Spin Cutter", 
                    styleColorSample: "#757170", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/WD/SpinCutter.png", 
                    topDownImage: "./images/beyblade_parts/WD/SpinCutter.png" 
                },
            ]
},
         ],
    spinGears: [
{ 
            id: "sg_01", // Generalized ID
            name: "Basic Spin Gear (Right)", // Generalized Name
            type: "Spin Gear",
			spinDirection: "Right",
			contactTipType: "Integrated",
			contactTipShape: "Integrated",
            tags: ["Integrated", "Basic", "Spin", "Right"], 
			fallbackImage: "./images/beyblade_parts/SG/StandardSG_Right_DragoonWhite_sideview.png",  
            stats: { rpm: 1200, hp: 55, recoilReduction: 2, stamina: 15, endurance: 10, balance: 5, weight: 8 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "SG_basic_white",
                    styleName: "Right Spin Gear White (Spin Dragoon)", 
                    styleColorSample: "#efefeb", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_DragoonWhite_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_DragoonWhite_topdown.png" 
                },
                { 
                    styleId: "SG_basic_red_ifrit",
                    styleName: "Right Spin Gear Red (Ifrit)", 
                    styleColorSample: "#a9381d", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_IfritRed_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_IfritRed_topdown.png" 
                },
                { 
                    styleId: "SG_basic_red_polta",
                    styleName: "Right Spin Gear Red (Polta)", 
                    styleColorSample: "#ce2008", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_PoltaRed_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_PoltaRed_topdown.png" 
                },
                { 
                    styleId: "SG_basic_red_polta_crystal",
                    styleName: "Right Spin Gear Red Photonic Crystal Vers", 
                    styleColorSample: "#5c4969", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_PoltaRed_PhotonicCrystalversion_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_PoltaRed_PhotonicCrystalversion_topdown.png" 
                },
                { 
                    styleId: "SG_basic_black",
                    styleName: "Right Spin Gear Black (Megaro Arm)", 
                    styleColorSample: "#645b5c", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_MegaroBlack_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_MegaroBlack_topdown.png" 
                },
                { 
                    styleId: "SG_basic_black2",
                    styleName: "Right Spin Gear Black (Saizo)", 
                    styleColorSample: "#2b2b2b", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_SaizoBlack_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_SaizoBlack_topdown.png" 
                },
                { 
                    styleId: "SG_basic_blue",
                    styleName: "Right Spin Gear Blue (Frostic Dranzer)", 
                    styleColorSample: "#214e9b", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_FrosticDranzerBlue_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_FrosticDranzerBlue_topdown.png" 
                },
                { 
                    styleId: "SG_basic_cyan",
                    styleName: "Right Spin Gear Cyan (Gekiryu-oh)", 
                    styleColorSample: "#1a93b7", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_GekiryuohCyan_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_GekiryuohCyan_topdown.png" 
                },
                { 
                    styleId: "SG_basic_orange",
                    styleName: "Right Spin Gear Orange (Delta Wing)", 
                    styleColorSample: "#df6b2a", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_DeltaWingOrange_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_DeltaWingOrange_topdown.png" 
                },
                { 
                    styleId: "SG_basic_amber",
                    styleName: "Right Spin Gear Amber (Tyranno F)", 
                    styleColorSample: "#ecaa2f", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_TyrannoFAmber_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_TyrannoFAmber_topdown.png" 
                },
                { 
                    styleId: "SG_basic_magenta",
                    styleName: "Right Spin Gear Magenta (Vortex Fang)", 
                    styleColorSample: "#964f77", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_VortexFangMagenta_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_VortexFangMagenta_topdown.png" 
                },
                { 
                    styleId: "SG_basic_noxia",
                    styleName: "Right Spin Gear Noxia", 
                    styleColorSample: "#5c4969", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_Noxia_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_Noxia_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_pink",
                    styleName: "Right Spin Gear Pink (Sakura Blossom Mochi)", 
                    styleColorSample: "#d49baf", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_SakuraBlossomMochiPink_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_SakuraBlossomMochiPink_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_magenta2",
                    styleName: "Right Spin Gear Magenta (Plum Blossom Mochi)", 
                    styleColorSample: "#ad6878", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_PlumBlossomMochiMagenta_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_PlumBlossomMochiMagenta_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_purple",
                    styleName: "Right Spin Gear Purple (Fenrir F)", 
                    styleColorSample: "#6bbde0", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_FenrirFPurple_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_FenrirFPurple_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_green",
                    styleName: "Right Spin Gear Green (Crested Carapace)", 
                    styleColorSample: "#466970", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_CrestedCarapaceGreen_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_CrestedCarapaceGreen_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_blue2",
                    styleName: "Right Spin Gear Blue (Dranzer Auto Change Balancer)", 
                    styleColorSample: "#4667ce", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_DranzerAutoChangeBalancerBlue_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_DranzerAutoChangeBalancerBlue_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_green2",
                    styleName: "Right Spin Gear Green (Draciel Metal Ball Defenser)", 
                    styleColorSample: "#279b3e", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_MetalBallDefenserGreen_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_MetalBallDefenserGreen_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_gray",
                    styleName: "Right Spin Gear Gray (Driger Manual Balancer)", 
                    styleColorSample: "#abaaa9", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_DrigerManualBalancerGray_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_DrigerManualBalancerGray_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_yellow",
                    styleName: "Right Spin Gear Yellow", 
                    styleColorSample: "#f5b702", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_KidDragoonYellow_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_KidDragoonYellow_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_bronze",
                    styleName: "Right Spin Gear Bronze", 
                    styleColorSample: "#a37642", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/SG/StandardSG_Right_KidDragoonBronze_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Right_KidDragoonBronze_topdown.png" 
                },
            ]
},
{ 
            id: "sg_02", // Generalized ID
            name: "Basic Spin Gear (Left)", // Generalized Name
            type: "Spin Gear",
			spinDirection: "Left",
			contactTipType: "Integrated",
			contactTipShape: "Integrated",
            tags: ["Integrated", "Basic", "Spin", "Left"], 
			fallbackImage: "./images/beyblade_parts/SG/StandardSG_Left_MoonsongStampedeWhite_sideview.png",  
            stats: { rpm: 1200, hp: 55, recoilReduction: 2, stamina: 15, endurance: 10, balance: 5, weight: 8 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "SG_basic_white_moonsongstampede",
                    styleName: "Left Spin Gear White (Moonsong Stampede)", 
                    styleColorSample: "#fef8e6", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/SG/StandardSG_Left_MoonsongStampedeWhite_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Left_MoonsongStampedeWhite_topdown.png" 
                },
                { 
                    styleId: "SG_basic_luminia",
                    styleName: "Left Spin Gear Red (Ifrit)", 
                    styleColorSample: "#a9381d", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/SG/StandardSG_Left_Luminia_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Left_Luminia_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_crossmanticore",
                    styleName: "Left Spin Gear Beige (Cross Manticore)", 
                    styleColorSample: "#2f1834", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/SG/StandardSG_Left_CrossManticore_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Left_CrossManticore_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_dragoongripattack_white",
                    styleName: "Left Spin Gear White (Dragoon Grip Attacker)", 
                    styleColorSample: "#fbfaf0", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/SG/StandardSG_Left_DragoonGripAttackerWhite_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Left_DragoonGripAttackerWhite_topdown.png" 
                },
				{ 
                    styleId: "SG_basic_dragoongripattack_gunmetal",
                    styleName: "Left Spin Gear Gunmetal (Dragoon Grip Attacker)", 
                    styleColorSample: "#78746f", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/SG/StandardSG_Left_DragoonGripAttackerGunmetal_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/StandardSG_Left_DragoonGripAttackerGunmetal_topdown.png" 
                },
            ]
},
{ 
            id: "sg_03", // Generalized ID
            name: "Dual Axis Spin Gear (Right)", // Generalized Name
            type: "Spin Gear",
			spinDirection: "Right",
			contactTipType: "Integrated",
			contactTipShape: "Integrated",
            tags: ["Integrated", "Dual", "Axis", "Weighted", "Spin", "Right"], 
			fallbackImage: "./images/beyblade_parts/SG/DualAxisSG_Right_Red_sideview.png",  
            stats: { rpm: 1300, hp: 60, recoilReduction: 3, stamina: 22, endurance: 15, balance: -2, mobility: -1, weight: 12 },
			passives: ["Centrifugal Synergy"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "dualaxis_red",
                    styleName: "Dual Axis Spin Gear Red", 
                    styleColorSample: "#a9381d", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/SG/DualAxisSG_Right_Red_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/DualAxisSG_Right_Red_topdown.png" 
                },
                { 
                    styleId: "dualaxis_sandstone",
                    styleName: "Dual Axis Spin Gear Sandstone", 
                    styleColorSample: "#cebc65", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/SG/DualAxisSG_Right_Sandstone_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/DualAxisSG_Right_Sandstone_topdown.png" 
                },
                { 
                    styleId: "dualaxis_gray",
                    styleName: "Dual Axis Spin Gear Gray (Lost Pegasus)", 
                    styleColorSample: "#889297", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/SG/DualAxisSG_Right_Gray_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/DualAxisSG_Right_Gray_topdown.png" 
                },
            ]
},
{ 
            id: "sg_04", // Generalized ID
            name: "Dual Axis Spin Gear (Left)", // Generalized Name
            type: "Spin Gear",
			spinDirection: "Left",
			contactTipType: "Integrated",
			contactTipShape: "Integrated",
            tags: ["Integrated", "Dual", "Axis", "Weighted", "Spin", "Left"], 
			fallbackImage: "./images/beyblade_parts/SG/DualAxisSG_Left_Black_sideview.png",  
            stats: { rpm: 1300, hp: 60, recoilReduction: 3, stamina: 22, endurance: 15, balance: -2, mobility: -1, weight: 12 },
			passives: ["Centrifugal Synergy"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "dualaxis_black",
                    styleName: "Dual Axis Spin Gear Black", 
                    styleColorSample: "#333f51", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/SG/DualAxisSG_Left_Black_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/DualAxisSG_Left_Black_topdown.png" 
                },
				                { 
                    styleId: "dualaxis_heavystampede_blue",
                    styleName: "Dual Axis Spin Gear Blue (Heavy Stampede)", 
                    styleColorSample: "#244875", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/SG/DualAxisSG_Left_Black_sideview.png", 
                    topDownImage: "./images/beyblade_parts/SG/DualAxisSG_Left_Black_topdown.png" 
                },
            ]
}, 
{ 
            id: "sg_05", // Generalized ID
            name: "Right Spin Gear G Ball", // Generalized Name
            type: "Spin Gear",
			spinDirection: "Right",
			contactTipType: "Integrated",
			contactTipShape: "Integrated",
            tags: ["Integrated", "G", "Ball", "Ball Defense", "Weighted", "Right"], 
			fallbackImage: "./images/beyblade_parts/SG/RightSG_G_Ball_sideview_fallback.png",  
            stats: { rpm: 1200, hp: 50, recoilReduction: 3, stamina: 14, endurance: 14, balance: 1, grip: 1, speed: 1, weight: 11 },
			passives: ["Ball Bearing Stabilizer"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "rightspin_G_ball",
                    styleName: "Right Spin Gear G Ball (Strata Dragoon)", 
                    styleColorSample: "#624c8e", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/SG/RightSG_G_Ball_sideview.gif", 
                    topDownImage: "./images/beyblade_parts/SG/RightSG_G_Ball_topdown.png" 
                },
				{ 
                    styleId: "rightspin_G_ball_gunmetal",
                    styleName: "Right Spin Gear G Ball (Sickled Seeker)", 
                    styleColorSample: "#36353a", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/SG/RightSG_G_Ball_gunmetal_sideview.gif", 
                    topDownImage: "./images/beyblade_parts/SG/RightSG_G_Ball_gunmetal_topdown.png" 
                },
            ]
}, 
 ],
    bladeBases: [
{ 
            id: "bb_01", // Generalized ID
            name: "Standard Semi-Flat Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Semi-Flat",
            tags: ["Standard", "Tip", "Metal", "Semi-Flat"], 
			fallbackImage: "./images/beyblade_parts/BB/SemiFlat_DeltaOrange_sideview.png",  
            stats: { rpm: 110, speed: 10, defense: 5, attack: 3, grip: 18, balance: 16, stamina: 6, mobility: 6, weight: 15, lad: 0.5 },
			passives: ["Pace Control", "Rolling Collision"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "semiflat_base_orange",
                    styleName: "Semi-Flat Base Orange (Delta Wing)", 
                    styleColorSample: "#df6b2a", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/BB/SemiFlat_DeltaOrange_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SemiFlat_DeltaOrange_topdown.png" 
                },
                { 
                    styleId: "semiflat_base_blue",
                    styleName: "Semi-Flat Base Blue (Frostic Dranzer)", 
                    styleColorSample: "#214e9b", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/BB/SemiFlat_FrosticDranzerBlue_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SemiFlat_FrosticDranzerBlue_topdown.png" 
                },
                { 
                    styleId: "semiflat_base_cyan",
                    styleName: "Semi-Flat Base Cyan (Gekiryu-oh)", 
                    styleColorSample: "#1a93b7", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/BB/SemiFlat_GekiryuohCyan_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SemiFlat_GekiryuohCyan_topdown.png" 
                },
                { 
                    styleId: "semiflat_base_magenta",
                    styleName: "Semi-Flat Base Magenta (Vortex Fang)", 
                    styleColorSample: "#964f77", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/BB/SemiFlat_VortexFangMagenta_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SemiFlat_VortexFangMagenta_topdown.png" 
                },
                { 
                    styleId: "semiflat_base_crestedcarapace",
                    styleName: "Semi-Flat Base Green (Crested Carapace)", 
                    styleColorSample: "#466970", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/BB/SemiFlat_VortexFangMagenta_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SemiFlat_VortexFangMagenta_topdown.png" 
                },
            ]
},
{ 
            id: "bb_02", // Generalized ID
            name: "Volcano Flat Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Flat",
            tags: ["Volcano", "Tip", "Metal", "Flat"], 
			fallbackImage: "./images/beyblade_parts/BB/VolcanoFlatBase_IfritRed_sideview.png",  
            stats: { rpm: 120, speed: 14, defense: 2, attack: 7, grip: 20, balance: 6, stamina: -1, mobility: 10, weight: 14, lad: 0.15 },
			passives: ["Hyper Aggression", "Smash Route"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "volcanoflatbase_ifrit",
                    styleName: "Volcano Flat Base Red (Ifrit)", 
                    styleColorSample: "#a9381d", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/BB/VolcanoFlatBase_IfritRed_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/VolcanoFlatBase_IfritRed_topdown.png" 
                },
                { 
                    styleId: "volcanoflatbase_noxia",
                    styleName: "Volcano Flat Base Noxia", 
                    styleColorSample: "#5c4969", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/BB/VolcanoFlatBase_Noxia_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/VolcanoFlatBase_Noxia_topdown.png" 
                },
            ]
},
{ 
            id: "bb_03", // Generalized ID
            name: "Standard Flat Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Flat",
            tags: ["Standard", "Tip", "Metal", "Flat"], 
			fallbackImage: "./images/beyblade_parts/BB/FlatBase_SpinDragonWhite_sideview.png",  
            stats: { rpm: 125, speed: 16, defense: 1, attack: 5, grip: 24, balance: 10, stamina: -3, mobility: 12, weight: 13, lad: 0.2 },
			passives: ["Ridge Rider", "Relentless"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "flatbase_spindragoon_white",
                    styleName: "Flat Base White (Spin Dragoon)", 
                    styleColorSample: "#efefeb", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/BB/FlatBase_SpinDragonWhite_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/FlatBase_SpinDragonWhite_topdown.png" 
                },
                { 
                    styleId: "flatbase_megaroarm_black",
                    styleName: "Flat Base Black (Megaro Arm)", 
                    styleColorSample: "#645b5c", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/BB/FlatBase_MegaroArmBlack_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/FlatBase_MegaroArmBlack_topdown.png" 
                },
				{ 
                    styleId: "flatbase_yellow",
                    styleName: "Flat Base Yellow", 
                    styleColorSample: "#f5b702", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/FlatBase_KidDragoonYellow_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/FlatBase_KidDragoonYellow_topdown.png" 
                },
				{ 
                    styleId: "flatbase_bronze",
                    styleName: "Flat Base Bronze", 
                    styleColorSample: "#a37642", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/BB/FlatBase_KidDragoonBronze_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/FlatBase_KidDragoonBronze_topdown.png" 
                },
            ]
},
{ 
            id: "bb_04", // Generalized ID
            name: "Fossil Claw Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Rubber",
			contactTipShape: "Semi-Flat",
            tags: ["Fossil", "Claw", "Tyranno", "Tip", "Rubber", "Semi-Flat"], 
			fallbackImage: "./images/beyblade_parts/BB/FossilClawBase_TyrannoF_sideview.png",  
            statsRight: { rpm: 115, speed: 6, defense: 12, attack: 4, endurance: 10, grip: 32, balance: 12, stamina: -3, mobility: 1, recoil: 8, recoilReduction: 6, weight: 18, lad: 0.1 },
			statsLeft: { rpm: 115, speed: 6, defense: 4, attack: 10, endurance: -4, grip: 32, balance: 8, stamina: -4, mobility: 1, recoil: 18, recoilReduction: 0, weight: 18, lad: 0.1 },
			passives: [], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "fossil_claw",
                    styleName: "Fossil Claw Petrified Bone", 
                    styleColorSample: "#b09a7c", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/BB/FossilClawBase_TyrannoF_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/FossilClawBase_TyrannoF_topdown.png" 
                },
            ]
},
{ 
            id: "bb_05", // Generalized ID
            name: "Standard Sharp Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Sharp",
            tags: ["Standard", "Tip", "Metal", "Sharp"], 
			fallbackImage: "./images/beyblade_parts/BB/SharpBase_PoltaRed_sideview.png",  
            stats: { rpm: 140, speed: 4, defense: 2, endurance: -2, attack: 2, grip: 5, balance: 6, stamina: 12, mobility: 2, weight: 12, lad: 0.05 },
			passives: ["Static Survival", "Centrifugal Synergy"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "sharpbase_polta_red",
                    styleName: "Sharp Base Red (Polta)", 
                    styleColorSample: "#ce2008", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/SharpBase_PoltaRed_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SharpBase_PoltaRed_topdown.png" 
                },
                { 
                    styleId: "sharpbase_polta_red_crystal",
                    styleName: "Sharp Base Red Photonic Crystal Vers", 
                    styleColorSample: "#5c4969", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/BB/SharpBase_Red_PhotonicCrystalversion_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SharpBase_Red_PhotonicCrystalversion_topdown.png" 
                },
                { 
                    styleId: "sharpbase_saizo_black",
                    styleName: "Sharp Base Black (Saizo)", 
                    styleColorSample: "#2b2b2b", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/SharpBase_SaizoBlack_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SharpBase_SaizoBlack_topdown.png" 
                },
				                { 
                    styleId: "sharpbase_royalblue",
                    styleName: "Sharp Base Royal Blue", 
                    styleColorSample: "#2c3cdb", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/SharpBase_RoyalBlue_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SharpBase_RoyalBlue_topdown.png" 
                },
            ]
},
{ 
            id: "bb_06", // Generalized ID
            name: "Cloud Pastern Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Rubber",
			contactTipShape: "Semi-Flat",
            tags: ["Cloud", "Pastern", "Tip", "Rubber", "Semi-Flat"], 
			fallbackImage: "./images/beyblade_parts/BB/CloudPasternBase_MoonsongStampede_sideview.png",  
            stats: { hp: 20, rpm: 130, speed: 10, defense: 9, attack: 7, grip: 26, balance: 14, stamina: 3, mobility: 2, weight: 17, lad: 0.35 },
			passives: ["Wing Guard", "Impact Point"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "cloud_pastern",
                    styleName: "Cloud Pastern White (Moonsong Stampede)", 
                    styleColorSample: "#fef8e6", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/BB/CloudPasternBase_MoonsongStampede_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/CloudPasternBase_MoonsongStampede_topdown.png" 
                },
            ]
},
{ 
            id: "bb_07", // Generalized ID
            name: "Heavy Orbit Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Semi-Flat",
            tags: ["Weighted", "Heavy", "Orbit", "Tip", "Metal", "Semi-Flat"], 
			fallbackImage: "./images/beyblade_parts/BB/HeavyOrbitBase_Green_sideview.png",  
            stats: { rpm: 115, speed: -1, defense: 18, attack: 4, grip: 5, balance: 18, stamina: 6, endurance: 8, weight: 19, lad: 0.75 },
			passives: ["Centrifugal Synergy", "Impact Dampening"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "heavy_orbit_green",
                    styleName: "Heavy Orbit Green", 
                    styleColorSample: "#206b3b", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/BB/HeavyOrbitBase_Green_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/HeavyOrbitBase_Green_topdown.png" 
                },
				                { 
                    styleId: "heavy_orbit_heavystampede_blue",
                    styleName: "Heavy Orbit Blue (Heavy Stampede)", 
                    styleColorSample: "#244875", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/BB/HeavyOrbitBase_HeavyStampedeBlue_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/HeavyOrbitBase_HeavyStampedeBlue_topdown.png" 
                },
            ]
},
{ 
            id: "bb_08", // Generalized ID
            name: "Tilt-Shift Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Sharp",
            tags: ["Tilt", "Shift", "Rubber", "Tip", "Metal", "Sharp"], 
			fallbackImage: "./images/beyblade_parts/BB/TiltShiftBase_LightBlue_sideview.png",  
            stats: { hp: 20, rpm: 125, defense: 6, attack: 2, grip: 8, balance: 15, stamina: 8, mobility: 10, recoilReduction: 8, weight: 13, lad: 0.6 },
			passives: ["Counterattack"], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "tiltshift_lightblue",
                    styleName: "Tilt-Shift Light Blue", 
                    styleColorSample: "#61bbe4", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/BB/TiltShiftBase_LightBlue_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/TiltShiftBase_LightBlue_topdown.png" 
                },
                { 
                    styleId: "tiltshift_red",
                    styleName: "Tilt-Shift Red", 
                    styleColorSample: "#de4921", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/BB/TiltShiftBase_Red_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/TiltShiftBase_Red_topdown.png" 
                },
				                { 
                    styleId: "tiltshift_white",
                    styleName: "Tilt-Shift White", 
                    styleColorSample: "#eef2f6", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/TiltShiftBase_White_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/TiltShiftBase_White_topdown.png" 
                },
            ]
},
{ 
            id: "bb_09", // Generalized ID
            name: "Strata Dragoon G Special Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Plastic",
			contactTipShape: "Flat",
            tags: ["G", "Special", "Ball", "Ball Bearing", "Tip", "Plastic", "Flat"], 
			fallbackImage: "./images/beyblade_parts/BB/StrataDragoonGSpecialBase_sideview.png",  
            stats: { hp: 15, rpm: 130, defense: -2, attack: 9, endurance: -2, grip: 14, balance: 10, stamina: 3, mobility: 8, recoilReduction: 2, weight: 15, lad: 0.25 },
			passives: ["Ball Bearing Stabilizer", "Hyper Aggression"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "strata_dragoon_G_special_base",
                    styleName: "Strata Dragoon G Special Base", 
                    styleColorSample: "#624c8e", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/BB/StrataDragoonGSpecialBase_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/StrataDragoonGSpecialBase_topdown.png" 
                },
            ]
},
{ 
            id: "bb_10", // Generalized ID
            name: "Sweet Embrace", // Generalized Name
            type: "Blade Base",
			contactTipType: "Rubber",
			contactTipShape: "Flat",
            tags: ["Sweet", "Embrace", "Mochi", "Tip", "Rubber", "Flat", "Peak Performance"], 
			fallbackImage: "./images/beyblade_parts/BB/SweetEmbrace_SakuraBlossom_sideview.png",  
            stats: { hp: 40, rpm: 110, defense: 6, attack: 4, endurance: 4, grip: 30, balance: 5, stamina: 1, mobility: 6, recoilReduction: 5, weight: 14, lad: 0.7 },
			passives: ["Peak Performance", "Rebound Guard"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "sweet_embrace_sakura",
                    styleName: "Sweet Embrace Sakura Blossom", 
                    styleColorSample: "#e48498", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/BB/SweetEmbrace_SakuraBlossom_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SweetEmbrace_SakuraBlossom_topdown.png" 
                },
				{ 
                    styleId: "sweet_embrace_plum",
                    styleName: "Sweet Embrace Plum Blossom", 
                    styleColorSample: "#ad6878", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/BB/SweetEmbrace_PlumBlossom_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/SweetEmbrace_PlumBlossom_topdown.png" 
                },
            ]
},
{ 
            id: "bb_11", // Generalized ID
            name: "Low Barrel Point", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Sharp",
            tags: ["Low", "Barrel", "Point", "Tip", "Metal", "Sharp", "Critical Counter"], 
			fallbackImage: "./images/beyblade_parts/BB/LowBarrelPoint_FenrirFBlue_sideview.png",  
            stats: { rpm: 150, speed: 6, defense: 11, attack: 2, endurance: 3, grip: 5, balance: 5, stamina: 10, mobility: 3, weight: 14, lad: 0.1 },
			passives: ["Critical Counter", "Shell Armor"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "lowbarrelpoint_base",
                    styleName: "Low Barrel Point", 
                    styleColorSample: "#624c8e", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/BB/LowBarrelPoint_FenrirFBlue_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/LowBarrelPoint_FenrirFBlue_topdown.png" 
                },
            ]
},
{ 
            id: "bb_12", // Generalized ID
            name: "Drift Guard", // Generalized Name
            type: "Blade Base",
			contactTipType: "Plastic",
			contactTipShape: "Semi-Flat",
            tags: ["Drift", "Guard", "Semi-Flat", "Tip", "Plastic", "Rollback Drift"], 
			fallbackImage: "./images/beyblade_parts/BB/DriftGuard_DarkCobalt_sideview.png",  
            stats: { rpm: 130, speed: 8, defense: 13, attack: 2, endurance: 12, grip: 10, balance: 14, stamina: 6, mobility: 5, weight: 14, lad: 0.9 },
			passives: ["Rollback Drift", "Evasive Contact"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "driftguard_darkcobalt",
                    styleName: "Drift Guard Dark Cobalt", 
                    styleColorSample: "#405986", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/BB/DriftGuard_DarkCobalt_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/DriftGuard_DarkCobalt_topdown.png" 
                },
				{ 
                    styleId: "driftguard_honey",
                    styleName: "Drift Guard Honey", 
                    styleColorSample: "#e79940", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/BB/DriftGuard_Honey_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/DriftGuard_Honey_topdown.png" 
                },
            ]
},
{ 
            id: "bb_13", // Generalized ID
            name: "Pulse Core", // Generalized Name
            type: "Blade Base",
			contactTipType: "Plastic",
			contactTipShape: "Sharp",
            tags: ["Pulse", "Core", "Sharp", "Tip", "Plastic", "Cooldown Reduction", "CDR" ], 
			fallbackImage: "./images/beyblade_parts/BB/PulseCore_Violet_sideview.png",  
            stats: { rpm: 155, speed: 3, defense: -1, attack: -2, endurance: 3, grip: 4, balance: 10, stamina: 16, mobility: 2, cdr: 6, weight: 12, lad: 0.15 },
			passives: ["Static Survival", "Pace Control"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "pulse_core_violet",
                    styleName: "Pulse Core Violet", 
                    styleColorSample: "#6a3dc2", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/PulseCore_Violet_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/PulseCore_Violet_topdown.png" 
                },
				{ 
                    styleId: "pulse_core_emerald_crystal",
                    styleName: "Pulse Core Emerald Photonic Crystal Vers", 
                    styleColorSample: "#299032", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/BB/PulseCore_Emerald_PhototonicCrystalversion_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/PulseCore_Emerald_PhototonicCrystalversion_topdown.png" 
                },
            ]
},
{ 
            id: "bb_14", // Generalized ID
            name: "Pivot Flat", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Flat",
            tags: ["Pivot", "Flat", "Tip", "Metal", "Recoil", "Rebounder", "Reduction" ], 
			fallbackImage: "./images/beyblade_parts/BB/PivotFlat_sideview.png",  
            stats: { rpm: 120, speed: 15, defense: 4, attack: 6, endurance: 2, grip: 22, balance: 10, stamina: -2, mobility: 13, recoilReduction: 7, weight: 12, lad: 0.35 },
			passives: ["Recoil Rebounder", "Rebound Guard"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "pivot_flat",
                    styleName: "Pivot Flat", 
                    styleColorSample: "#687077", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/PivotFlat_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/PivotFlat_topdown.png" 
                },
				{ 
                    styleId: "pivot_flat_lostpegasus",
                    styleName: "Pivot Flat Gray (Lost Pegasus)", 
                    styleColorSample: "#889297", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/PivotFlat_LostPegasusGray_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/PivotFlat_LostPegasusGray_topdown.png" 
                },
            ]
},
{ 
            id: "bb_15", // Generalized ID
            name: "Thorn Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Semi-Flat",
            tags: ["Thorn", "Semi-Flat", "Tip", "Metal" ], 
			fallbackImage: "./images/beyblade_parts/BB/ThornBase_Red_sideview.png",  
            stats: { rpm: 115, speed: 11, defense: -2, attack: 7, endurance: -2, grip: 18, balance: 8, stamina: 2, mobility: 9, recoil: 12, weight: 14, lad: 0.4 },
			passives: ["Impact Point", "Relentless"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "thornbase_red",
                    styleName: "Thorn Base Red", 
                    styleColorSample: "#912e2e", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/BB/ThornBase_Red_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/ThornBase_Red_topdown.png" 
                },
            ]
},
{ 
            id: "bb_16", // Generalized ID
            name: "Auto Change Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Flat",
            tags: ["Auto", "Change", "Mode Change", "Flat", "Semi-Flat", "Tip", "Metal"], 
			fallbackImage: "./images/beyblade_parts/BB/AutoChangeBase_sideview.png",  
            stats: { rpm: 120, speed: 12, defense: 5, attack: 5, endurance: 2, grip: 18, balance: 14, stamina: 3, mobility: 10, recoilReduction: 2, weight: 14, lad: 0.55 },
			passives: ["Mode Change", "Evasive Contact"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "autochangebase",
                    styleName: "Auto Change Base", 
                    styleColorSample: "#4667ce", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/AutoChangeBase_sideview_animated.gif", 
                    topDownImage: "./images/beyblade_parts/BB/AutoChangeBase_topdown.png" 
                },
            ]
},
{ 
            id: "bb_17", // Generalized ID
            name: "Metal Ball Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Semi-Flat",
            tags: ["Metal", "Ball", "Semi-Flat", "Tip", "Metal" ], 
			fallbackImage: "./images/beyblade_parts/BB/MetalBallBase_sideview.png",  
            stats: { hp: 40, rpm: 125, speed: 5, defense: 14, attack: 2, endurance: 10, grip: 12, balance: 12, stamina: 4, mobility: 3, recoilReduction: 5, weight: 17, lad: 0.5 },
			passives: ["Metal Ball Defense", "Impact Dampening"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "metalballbase",
                    styleName: "Metal Ball Base", 
                    styleColorSample: "#279b3e", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/MetalBallBase_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/MetalBallBase_topdown.png" 
                },
            ]
},
{ 
            id: "bb_18", // Generalized ID
            name: "Grip Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Rubber",
			contactTipShape: "Flat",
            tags: ["Grip", "Base", "Flat", "Tip", "Rubber"], 
			fallbackImage: "./images/beyblade_parts/BB/GripBase_DragoonGripAttackerWhite_sideview.png",  
            stats: { rpm: 120, speed: 17, attack: 10, endurance: -4, grip: 32, balance: 8, stamina: -2, mobility: 14, recoil: 11, weight: 13, lad: 0.1 },
			passives: ["Hyper Aggression", "Impact Point"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "gripbase_dragoonwhite",
                    styleName: "Grip Base White", 
                    styleColorSample: "#fbfaf0", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/GripBase_DragoonGripAttackerWhite_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/GripBase_DragoonGripAttackerWhite_topdown.png" 
                },
				{ 
                    styleId: "gripbase_crossmanticorebeige",
                    styleName: "Grip Base Beige", 
                    styleColorSample: "#2f1834", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/BB/GripBase_CrossManticore_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/GripBase_CrossManticore_topdown.png" 
                },
				{ 
                    styleId: "gripbase_dragoongunmetal",
                    styleName: "Grip Base Gunmetal", 
                    styleColorSample: "#78746f", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/BB/GripBase_DragoonGripAttackerGunmetal_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/GripBase_DragoonGripAttackerGunmetal_topdown.png" 
                },
            ]
},
{ 
            id: "bb_19", // Generalized ID
            name: "Manual Balancer", // Generalized Name
            type: "Blade Base",
			toggleModify: true,
			contactTipType: "Plastic",
			contactTipShape: "Flat",
            tags: ["Manual", "Change", "Balancer", "Flat", "Sharp", "Tip", "Plastic" ], 
			fallbackImage: "./images/beyblade_parts/BB/ManualBalancer_sideview.png",  
            stats: { hp: 15, rpm: 125, speed: 12, defense: 6, attack: 5, endurance: 4, grip: 20, balance: 12, stamina: 7, mobility: 10, recoilReduction: 2, weight: 14, lad: 0.32 },
			passives: ["Alter Approach (Flat)", "Rolling Collision"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "manual_balancer",
                    styleName: "Manual Balancer", 
                    styleColorSample: "#abaaa9", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/ManualBalancer_sideview_animated.gif", 
                    topDownImage: "./images/beyblade_parts/BB/ManualBalancer_topdown.png" 
                },
            ]
},
{ 
            id: "bb_20", // Generalized ID
            name: "Shooter Change Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Flat",
            tags: ["Shooter", "Change", "Mode Change", "Flat", "Semi-Flat", "Tip", "Metal" ], 
			fallbackImage: "./images/beyblade_parts/BB/ShooterChangeBase_sideview.png",  
            stats: { rpm: 120, speed: 11, defense: 6, attack: 4, endurance: 2, grip: 20, balance: 12, stamina: 2, mobility: 9, weight: 14, lad: 0.4 },
			passives: ["Mode Change", "Redirection", "Relentless"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "shooter_changebase",
                    styleName: "Shooter Change Base (Bloody Devil)", 
                    styleColorSample: "#759da4", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/BB/ShooterChangeBase_sideview_animated.gif", 
                    topDownImage: "./images/beyblade_parts/BB/ShooterChangeBase_topdown.png" 
                },
            ]
},
{ 
            id: "bb_21", // Generalized ID
            name: "Basin Sharp Base", // Generalized Name
            type: "Blade Base",
			contactTipType: "Metal",
			contactTipShape: "Sharp",
            tags: ["Basin", "Sharp", "Tip", "Metal" ], 
			fallbackImage: "./images/beyblade_parts/BB/Basin_SharpBase_SickleSeeker_sideview.png",  
            stats: { rpm: 135, speed: 5, defense: 8, attack: 3, endurance: 6, grip: 6, balance: 8, stamina: 10, mobility: 4, weight: 14, lad: 0.15 },
			passives: ["Static Survival", "Evasive Contact"], 
			attacks: [],
			
			//The Array of Unlockable Designs
            styles: [
                { 
                    styleId: "basin_sharpbase_sickledseeker",
                    styleName: "Basin Sharp Base (Sickled Seeker)", 
                    styleColorSample: "#b2b2b2", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/BB/Basin_SharpBase_SickleSeeker_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/Basin_SharpBase_SickleSeeker_topdown.png" 
                },
				{ 
                    styleId: "basin_sharpbase_magenta",
                    styleName: "Basin Sharp Base Magenta", 
                    styleColorSample: "#964f77", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/BB/Basin_SharpBase_Magenta_sideview.png", 
                    topDownImage: "./images/beyblade_parts/BB/Basin_SharpBase_Magenta_topdown.png" 
                },
            ]
},
    ],
	launchers: [
        { 
            id: "launcher_01", 
            name: "EZ Shooter", 
            type: "Launcher",
            tags: ["Launcher", "EZ", "Standard", "RPM Boost"], 
            fallbackImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_green.png",  
            passives: ["Launcher: RPM Boost"], 
            specialLaunch: ["Marvelous Launch"],
            styles: [
                { 
                    styleId: "ezshoot_standard_green",
                    styleName: "EZ Shooter Launcher Green", 
                    styleColorSample: "#00bd00", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_green.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_green.png" 
                },
				{ 
                    styleId: "ezshoot_standard_orange",
                    styleName: "EZ Shooter Launcher Orange", 
                    styleColorSample: "#ed920a", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_orange.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_orange.png" 
                },
				{ 
                    styleId: "ezshoot_standard_darkorange",
                    styleName: "EZ Shooter Launcher Dark Orange", 
                    styleColorSample: "#be6d32", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_darkorange.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_darkorange.png" 
                },
				{ 
                    styleId: "ezshoot_standard_magenta",
                    styleName: "EZ Shooter Launcher Magenta", 
                    styleColorSample: "#923d77", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_magenta.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_magenta.png" 
                },
				{ 
                    styleId: "ezshoot_standard_black",
                    styleName: "EZ Shooter Launcher Black", 
                    styleColorSample: "#2b3638", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_black.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_black.png" 
                },
				{ 
                    styleId: "ezshoot_standard_mint",
                    styleName: "EZ Shooter Launcher Mint", 
                    styleColorSample: "#87ffbd", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_mint.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_mint.png" 
                },
				{ 
                    styleId: "ezshoot_standard_blue",
                    styleName: "EZ Shooter Launcher Blue", 
                    styleColorSample: "#115eff", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_blue.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_blue.png" 
                },
				{ 
                    styleId: "ezshoot_standard_electricblue",
                    styleName: "EZ Shooter Launcher Electric Blue", 
                    styleColorSample: "#118dff", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_electricblue.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_electricblue.png" 
                },
				{ 
                    styleId: "ezshoot_standard_twotone_koamarublush",
                    styleName: "EZ Shooter Launcher Koamaru Blush", 
                    styleColorSample: "#2d336b", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_twotone_koamarublush.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_twotone_koamarublush.png" 
                },
				{ 
                    styleId: "ezshoot_standard_galaxy",
                    styleName: "EZ Shooter Launcher Galaxy Edition", 
                    styleColorSample: "#2c1664", 
                    styleRarity: 4,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_galaxy.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_galaxy.png" 
                }
            ]
        },
		{ 
            id: "launcher_02", 
            name: "Range Shooter", 
            type: "Launcher",
            tags: ["Launcher", "EZ", "Standard", "RPM Boost"], 
            fallbackImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/ezshooter_basic_green.png",  
            passives: ["Launcher: Range Boost"], 
            specialLaunch: ["Power Shoot"],
            styles: [
                { 
                    styleId: "range_shooter_orange",
                    styleName: "Range Shooter Orange", 
                    styleColorSample: "#ed920a", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_orange.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_orange.png" 
                },
				{ 
                    styleId: "range_shooter_blue",
                    styleName: "Range Shooter Blue", 
                    styleColorSample: "#115eff", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_blue.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_blue.png" 
                },
				{ 
                    styleId: "range_shooter_green",
                    styleName: "Range Shooter Green", 
                    styleColorSample: "#00bd00", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_green.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_green.png" 
                },
				{ 
                    styleId: "range_shooter_combatgreen",
                    styleName: "Range Shooter Combat Green", 
                    styleColorSample: "#436044", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_combatgreen.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_combatgreen.png" 
                },
				{ 
                    styleId: "range_shooter_sunburst",
                    styleName: "Range Shooter Sunburst", 
                    styleColorSample: "#e8b85b", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_sunburst.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_sunburst.png" 
                },
				{ 
                    styleId: "range_shooter_twotone_pinklemonade",
                    styleName: "Range Shooter Pink Lemonade", 
                    styleColorSample: "#ffb5b0", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_twotone_pinklemonade.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Launchers/RangeShooter_twotone_pinklemonade.png" 
                },
            ]
        }
    ], // <-- CRITICAL FIX: Added this closing bracket for the launchers array!
    
    ripCords: [
        { 
            id: "ripcord_01", 
            name: "EZ Winder", 
            type: "Ripcord",
            tags: ["Ripcord", "EZ", "Winder", "Standard"], 
            fallbackImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Yellow.png",  
            passives: [], 
            specialLaunch: [],
				launchData: {
					totalTeeth: 34,
					totalCordPixelLength: 227, // The total length of the ripcord in pixels
					teethPixelLength: 169, // The length of the toothed section in pixels (this is the teeth ONLY, not the toothless tail or the toothless grip area)!
					gripSectionPixelLength: 44, // The length of the grip and head section of the ripcord, before any teeth begin.
					tailPixelLength: 12, // The tail of the ripcord has no teeth. It is the furthest left portion of the ripcord and "ends" the ripcord.
					// Note that the "teeth" are located inbetween the Tail and the Grip Section of the ripcord.
					launcherLoadTo: 192, // The length of the amount loaded inside the launcher in pixels, from image origin to given pixel length.
					goodRange: [2, 16],    // Between tooth 2 and 16
					greatRange: [6, 12],   // Between tooth 6 and 12
					marvelRange: [7, 10]   // Between tooth 7 and 10
            },
            styles: [
                { 
                    styleId: "ezwinder_yellow",
                    styleName: "EZ Winder Yellow", 
                    styleColorSample: "#ffc90e", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Yellow.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Yellow.png" 
                },
                { 
                    styleId: "ezwinder_blue",
                    styleName: "EZ Winder Blue", 
                    styleColorSample: "#333fba", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Blue.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Blue.png" 
                },
                { 
                    styleId: "ezwinder_green",
                    styleName: "EZ Winder Green", 
                    styleColorSample: "#1f8822", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Green.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Green.png" 
                },
                { 
                    styleId: "ezwinder_red",
                    styleName: "EZ Winder Red", 
                    styleColorSample: "#a51b1b", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Red.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Red.png" 
                },
                { 
                    styleId: "ezwinder_black",
                    styleName: "EZ Winder Black", 
                    styleColorSample: "#454757", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Black.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Black.png" 
                },
                { 
                    styleId: "ezwinder_purple",
                    styleName: "EZ Winder Purple", 
                    styleColorSample: "#8662b3", 
                    styleRarity: 1,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Purple.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Purple.png" 
                },
				{ 
                    styleId: "ezwinder_sandstone",
                    styleName: "EZ Winder Sandstone", 
                    styleColorSample: "#b7ab7e", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Sandstone.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Sandstone.png" 
                },
				{ 
                    styleId: "ezwinder_coralpink",
                    styleName: "EZ Winder Coral Pink", 
                    styleColorSample: "#f49f97", 
                    styleRarity: 2,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_CoralPink.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_CoralPink.png" 
                },
				{ 
                    styleId: "ezwinder_monochromeblend",
                    styleName: "EZ Winder Monochrome Blend", 
                    styleColorSample: "#9ca0a5", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Gradient_MonochromeBlend.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Gradient_MonochromeBlend.png" 
                },
				{ 
                    styleId: "ezwinder_creamsicleblend",
                    styleName: "EZ Winder Creamsicle Blend", 
                    styleColorSample: "#f1b081", 
                    styleRarity: 3,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Gradient_CreamsicleBlend.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Gradient_CreamsicleBlend.png" 
                },
				{ 
                    styleId: "ezwinder_rainbowblend",
                    styleName: "EZ Winder Rainbow Blend", 
                    styleColorSample: "#def4e7", 
                    styleRarity: 5,
                    image: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Gradient_RainbowBlend.png", 
                    topDownImage: "./images/beyblade_parts/Launchers_and_Ripcords/Ripcords/Ripcord_EZWinder_Gradient_RainbowBlend.png" 
                }
            ]
        }
    ] // <-- CRITICAL FIX: Added this closing bracket for the ripCords array!
}; // <-- Closes the window.equipmentDB object
