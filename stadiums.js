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
                    { start: 4.41, end: 5.01 }, // Top
                    { start: 0.22, end: 0.82 }, // Bottom right
                    { start: 2.32, end: 2.92 }  // Bottom left
                ],
                visuals: { wall: { color: "#222" }, ramp: { color: "#2a2a2a" }, basin: { color: "#333" }, lines: "#555", pocketLines: "#111" }
            },
            {
                stadiumId: "basic_twopockets",
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
                    // 1:1 perfectly square image!
                    floorImgUrl: "./images/stadiums/official_blue/floor_offblue.png", 
                    
                    // The dynamic 3D rim colors
                    trimColor: "#2d2196",
                    wallColor: "#404f93",  // The inner vertical drop
                    ledgeColor: "#4a5bab", // The flat top of the stadium rim
                }
            },
			{
                stadiumId: "offblue_threepockets",
                name: "Tri-Pocket Battle Zone",
                size: "average",
                desc: "Standard, official style arena in Blue. Features 3 Wall Pockets, allowing for ring outs.",
                physics: { friction: 0.99, radiusMod: 0.9 },
                ringOutZones: [
                    { start: 4.41, end: 5.01 }, // Top
                    { start: 0.22, end: 0.82 }, // Bottom right
                    { start: 2.32, end: 2.92 }  // Bottom left
                ], 
                visuals: {
                    // 1:1 perfectly square image!
                    floorImgUrl: "./images/stadiums/official_blue/floor_offblue.png", 
                    
                    // The dynamic 3D rim colors
					trimColor: "#2d2196",
                    wallColor: "#404f93",  // The inner vertical drop
                    ledgeColor: "#4a5bab", // The flat top of the stadium rim
                }
            }
        ]
    },
	{
        stadiumType: "Center Vortex",
        styles: [
            {
                stadiumId: "centervortex_twopockets",
                name: "Cyclone Double Danger",
                size: "average",
                desc: "With the center of the stadium constantly spinning, keep an eye out for the large left and right ring-out areas!",
                physics: { 
                    friction: 0.99, 
                    radiusMod: 0.9,
                    basinSpinSpeed: 0.01, // Positive = Clockwise, Negative = Counter-Clockwise
                    basinGrip: 0.1,        // How strongly the spinning floor pushes the Beyblade
					basinRadius: 0.3 // DEFAULT IS 0.3 (30%). Tweak this if your basin is wider!
                },
                ringOutZones: [
                    { start: 5.8, end: 0.5 }, // Right pocket (Wraps over 0)
                    { start: 2.7, end: 3.5 }  // Left pocket 
					],
                visuals: {
                    floorImgUrl: "./images/stadiums/center_vortex/floor_centervortex.png", 
                    // The dynamic 3D rim colors
					trimColor: "#1b1a1a",
                    wallColor: "#636263",  // The inner vertical drop
                    ledgeColor: "#525252", // The flat top of the stadium rim
					basin: { imgUrl: "./images/stadiums/center_vortex/spinningbasin_centervortex.png" }
                }
            },
			{
                stadiumId: "centervortex_quadpockets",
                name: "Cyclone Frenetic Foursome",
                size: "average",
                desc: "You'll have to keep your eyes peeled in all directions while the center vortex causes spinning chaos!",
                physics: { 
                    friction: 0.99, 
                    radiusMod: 0.9,
                    basinSpinSpeed: 0.01, // Positive = Clockwise, Negative = Counter-Clockwise
                    basinGrip: 0.1,        // How strongly the spinning floor pushes the Beyblade
					basinRadius: 0.3 // DEFAULT IS 0.3 (30%). Tweak this if your basin is wider!
                },
                ringOutZones: [
                    { start: 5.30, end: 5.70 }, // Top Right
                    { start: 0.59, end: 0.99 }, // Bottom Right
                    { start: 2.16, end: 2.56 }, // Bottom Left
                    { start: 3.73, end: 4.13 }  // Top Left
                ],
                visuals: {
                    floorImgUrl: "./images/stadiums/center_vortex/floor_centervortex.png", 
                    // The dynamic 3D rim colors
					trimColor: "#1b1a1a",
                    wallColor: "#636263",  // The inner vertical drop
                    ledgeColor: "#525252", // The flat top of the stadium rim
					basin: { imgUrl: "./images/stadiums/center_vortex/spinningbasin_centervortex.png" }
                }
            }
        ]
    },
	{
        stadiumType: "Super Duel",
        styles: [
            {
                stadiumId: "superduel_nowalls",
                name: "Super Duel Stadium",
                size: "average",
                desc: "A dangerous stadium with no walls, meant for strong contenders.",
                physics: { friction: 0.99, radiusMod: 0.9 },
                ringOutZones: [
                    { start: 0, end: 6.29 }
				],					
                visuals: {
                    // 1:1 perfectly square image!
                    floorImgUrl: "./images/stadiums/super_duel/floor_superduel.png", 
                    
                    // The dynamic 3D rim colors
                    lines: "rgba(211, 13, 13, 0.8)", 
                    pocketLines: "transparent" // Hide the red danger lines since the whole edge is danger
                }
            }
        ]
    },
];