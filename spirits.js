// Spirits
window.spiritsDB = [
	
	
	
	ascensionRank1: {
{ 
            id: "starter_ar", // Generalized ID
            name: "Delta Wing", // Generalized Name
            type: "Attack Ring", 
            tags: [], 
			image: "./images/beyblade_parts/AR/DeltaWing.png",  
            stats: { 
			hp: 0, rpm: 0, attack: 0, defense: 10, stamina: 0, endurance: 0, 
			speed: 0, mobility: 0, grip: 0, balance: 0, weight: 0, 
			recoil: 0, recoilReduction: 0, spiritCharge: 0, cdr: 0 
			},
			passives: [], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			ultimate: { name: "Storm Tornado", desc: "Huge RPM damage" },
	},


	ascensionRank2: [
{ 
            id: "starter_ar", // Generalized ID
            name: "Delta Wing", // Generalized Name
            type: "Attack Ring", 
            tags: ["Starter", "Delta", "Wing", "Smash Attack"], 
			fallbackImage: "./images/beyblade_parts/AR/DeltaWing.png",  
            stats: { attack: 21, defense: 10, endurance: 12, recoil: 14, weight: 14, recoilReduction: 5 },
			passives: ["Wing Guard"], 
			attacks: [{ name: "Smash Attack", cd: 5 }],
			ultimate: { name: "Storm Tornado", desc: "Huge RPM damage" },
	},
],
	
	
	
	
	
	
	
	
	
}