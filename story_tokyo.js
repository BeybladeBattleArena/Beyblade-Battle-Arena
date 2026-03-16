// story_tokyo.js
window.TokyoEpisodes = {
    "ep_tokyo_tutorial": {
        id: "ep_tokyo_tutorial",
        title: "A New Spin on Life",
		tags: ["Toma", "Miko", "Tutorial"],
        locale: "nikotama",
        prereqs: [], // Unlocked immediately
        
        stages: {
            // STAGE 0: The First Login (Internal Monologue)
            0: {
                type: "vn_scene",
                bg: "./images/maps/tokyo/Nikotama.png", // Show the map blurry in the background
                dialogue: {
                    "start": { 
                        speaker: "Me", 
                        present: [], // No portraits on screen, it's just your thoughts
                        text: "I should head to the park to meet up with Toma and Miko. They'll be excited to see that I finally got a Beyblade!", 
                        action: "advance_stage", // Tells the engine to move to Stage 1 when you click next
                        nextStage: 1
                    }
                }
            },

            // STAGE 1: The Map Exploration
            1: {
				currentStageObjective: "Head to the Yoyogi Park BeyStadium.",
                type: "pin_injection",
                targetMap: "nikotama",
                pin: { 
                    id: "pin_tut_park", 
                    x: 1115, y: 529,
                    type: "red", 
                    name: "Yoyogi Park BeyStadium", 
                    triggerStage: 2 
                }
            },

            // STAGE 2: Meeting the Best Friends & Miko's Tutorial
            2: {
				currentStageObjective: "Complete Miko's Tutorial!",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/yoyogi_park.png", 
                dialogue: {
                    "start": { 
                        speaker: "Toma", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: "Whoa! You actually got one! Let me see it!", 
                        next: "miko_reaction" 
                    },
                    "miko_reaction": { 
                        speaker: "Miko", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: [
                        "It looks so cool! Have you figured out how to launch it yet?",
                        "I could show you how!"
                        ],
                        next: "toma_reaction"
                    },
                    "toma_reaction": { 
                        speaker: "Toma", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"],
                        text: [
                        "Miko, why don't you teach <player> the basics of the sport?",
                        "You two should have a practice battle!"
                        ],
                        next: "miko_reaction2"
                    },
                    "miko_reaction2": { 
                        speaker: "Miko", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: "Oh, totes! But first, let's get you up to speed!",
                        action: "start_tutorial"
                    }
                }
            },

            // STAGE 3: Toma Tags In, Toma's Battle Tutorial
            3: {
				currentStageObjective: "Complete Toma's Tutorial!",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/yoyogi_park.png", 
                dialogue: {
                    "start": { 
                        speaker: "Toma", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: [
                        "You're totally a natural, <player>. 'Bout time you picked up the sport!",
                        "I'll pick up where Miko left off and teach you about Beybattles!"
                        ],
                        action: "start_tutorial2"
                    }
                }
            },

			// STAGE 4: Tutorial Wrap Up and the Real Battles
            4: {
				currentStageObjective: "Chat with Toma and Miko, then defeat Miko.",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/yoyogi_park.png", 
                dialogue: {
                    "start": { 
                        speaker: "Miko", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: "Great job popping those balloons! Toma, where... where did you get all those balloons from?",
                        next: "toma_tutorialwrapup"
                    },
                    "toma_tutorialwrapup": { 
                        speaker: "Toma", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: [
                        "You're telling me you don't carry a bag of at least 30 balloons on you at all times, Miko?"],
                        next: "miko_doesnotballoon"
                    }, // <--- REMOVED PREMATURE CLOSING BRACKET
                    "miko_doesnotballoon": { 
                        speaker: "Miko", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: [
                        "..."],
                        next: "toma_suggestsbattle" // <--- MATCHED POINTER TO KEY BELOW
                    }, // <--- ADDED MISSING COMMA
                    "toma_suggestsbattle": { 
                        speaker: "Toma", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: [
                        "At any rate, now that <gender> can Blade like us, it's time for <player> to Blade WITH us!",
                        "How about a Beybattle?"
                        ],
                        next: "miko_wantstobattle"
                    }, // <--- ADDED MISSING COMMA
                    "miko_wantstobattle": { 
                        speaker: "Miko", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: [
                        "Ooh, ooh! It's my turn, next! We might be close friends, <player>, but once we launch our Beys, we become rivals!",
                        "Show me what you can do!"
                        ],
                        action: "start_battle",
                        battleId: "opp_miko1",
						nextStage: 5
                    }
                }
            },
			// STAGE 5: Post-Miko Battle & Toma's Turn
            5: {
				currentStageObjective: "Chat with Toma and Miko, then defeat Toma.",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/yoyogi_park.png", 
                dialogue: {
                    "start": { 
                        speaker: "Miko", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: "Aww, man! I totally thought I had you! You're super good at this!",
                        next: "toma_step_up"
                    },
                    "toma_step_up": { 
                        speaker: "Toma", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: [
                        "Don't get a big head just yet, <player>.",
                        "I'm just as strong as Miko. Let's see if you can handle my setup!"
                        ],
                        action: "start_battle",
                        battleId: "opp_toma1", 
                        nextStage: 6 // Tells the Arena to return to Stage 6!
                    }
                }
            },
			// STAGE 6: The Final Wrap-Up
            6: {
				currentStageObjective: "Finish the conversation and collect your rewards!",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/yoyogi_park.png", 
                dialogue: {
                    "start": { 
                        speaker: "Toma", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: "Okay, yeah... you're definitely ready for the local tournaments, and on day 1... Then, let's go make a name for ourselves!",
                        next: "miko_adds"
                    },
					    "miko_adds": { 
                        speaker: "Miko", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: "Yeah! Let's go!",
                        action: "end_episode" // This pays out the 450 BP!
                    }
                }
            }
        },
        
        rewards: { bp: 450, 
		unlockOpponents: ["opp_miko1", "opp_toma1"], 
		unlockLocations: [], 
		unlockMessage: "Miko and Toma are now available to battle in Free Battle!"
		}
    }
};