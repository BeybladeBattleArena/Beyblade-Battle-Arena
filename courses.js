// ==========================================
// COURSE DATABASE
// ==========================================
window.CoursesDB = {
    "earlybb": {
        id: "earlybb",
        name: "Fledgling Blade Breakers",
        mode: "EXHIBITION",
		trackBGM: "./audio/music/Battle_Something_Else.wav",
		bgmLoopPoint: 14.511937,
        rewardBP: 800,
		rewardPart: null,
		unlockParts: [],
        // partType: "attackRings", id: "ar_dragoon_g", styleId: "ar_dragoon_g_anime" },

		unlockOpponents: ["opp_max1", "opp_rei1", "opp_kai1", "opp_tyson1"],
		desc: "Take on the Blade Breakers before they became the Blade Breakers. Duke it out with Max, Rei, Kai, and Tyson while they use their first gen, original Beyblades.",
        stages: [
            { opponent: "opp_max1", preScene: "earlybb_intro", postScene: null },
            { opponent: "opp_rei1", preScene: null, postScene: null },
            { opponent: "opp_kai1", preScene: null, postScene: null },
            { opponent: "opp_tyson1", preScene: "earlybb_tysonboss", postScene: "earlybb_outro" }
        ]
    }
};

// ==========================================
// COURSE DIALOGUE DATABASE
// Holds the VN scripts. Decoupled from the opponents so 
// characters can be reused in different courses with new dialogue!
// ==========================================
window.CourseDialogueDB = {
    
    // Scene: Before Match 1
    "earlybb_intro": {
        bg: "./images/dialogue_backgrounds/beystadium_official.png", 
        dialogue: {
            "start": { 
                speaker: "Max", 
                present: ["Max.png", "Rei.png", "Kai.png", "Tyson.png"], 
                text: [
                    "So you're the Blader who's the talk of the BBA lately! It's nice to meet you.",
                    "My name's Max. This is Rei, Kai, and Tyson. We were thinking about forming a team together.",
                    "Let's see how you fare against us four. I'm sure it'll make for a fun time for everyone!"
                ],
                action: "return_to_course" // Tells adventure.html to boot up the Arena!
            }
        }
    },

    // Scene: Before Match 4 (Boss)
    "earlybb_tysonboss": {
        bg: "./images/dialogue_backgrounds/beystadium_official.png", 
        dialogue: {
            "start": { 
                speaker: "Tyson", 
                present: ["Tyson.png"], 
                text: "Hey there, <player>. Looks like we're up next. You ready?",
                action: "return_to_course"
            }
        }
    },

    // Scene: After Match 4 (Course Cleared)
    "earlybb_outro": {
        bg: "./images/dialogue_backgrounds/beystadium_official.png", 
        dialogue: {
            "start": { 
                speaker: "Tyson", 
                present: ["Max.png", "Rei.png", "Kai.png", "Tyson.png"], 
                text: [
                    "Whoa! Your power is pretty wild!",
                    "Guess that just means the next time we all meet, we gotta be even stronger!"
                ],
                action: "return_to_course"
            }
        }
    }
};