window.TokyoEpisodes = {
    "ep_tokyo_tutorial": {
        id: "ep_tokyo_tutorial",
        title: "A New Spin on Life",
        tags: ["Toma", "Miko", "Tutorial", "Tokyo"],
		mainStoryLength: 7,
        isNewEpisode: false,
        locale: "nikotama",
        prereqs: [], // Unlocked immediately
        
        stages: {
            // STAGE 0: The First Login (Internal Monologue)
            0: {
                type: "vn_scene",
                bg: "./images/maps/tokyo/Nikotama.png",
                dialogue: {
                    "start": { 
                        speaker: "Me", 
                        present: [], 
                        text: "I should head to the park to meet up with Toma and Miko. They'll be excited to see that I finally got a Beyblade!", 
                        action: "advance_stage",
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
                            "You're telling me you don't carry a bag of at least 30 balloons on you at all times, Miko?"
                        ],
                        next: "miko_doesnotballoon"
                    },
                    "miko_doesnotballoon": { 
                        speaker: "Miko", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: ["..."],
                        next: "toma_suggestsbattle" 
                    },
                    "toma_suggestsbattle": { 
                        speaker: "Toma", 
                        present: ["Toma_Tsukishiro.png", "Miko_Nanami.png"], 
                        text: [
                            "At any rate, now that <gender> can Blade like us, it's time for <player> to Blade WITH us!",
                            "How about a Beybattle?"
                        ],
                        next: "miko_wantstobattle"
                    },
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
                        nextStage: 6 
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
                        action: "advance_stage",
                        nextStage: 7
                    }
                } 
            },

            // STAGE 7: Complete 100% End Episode
            7: {
                currentStageObjective: "Finish the conversation and collect your rewards!",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/yoyogi_park.png", 
                dialogue: {
                    "start": {
                        speaker: "", 
                        text: "A New Spin on Life complete! Congratulations!",  
                        action: "end_episode" 
                    }
                }
            }
        }, 
        
        rewards: { 
            bp: 500, 
            unlockOpponents: ["opp_miko1", "opp_toma1"], 
            unlockLocations: [], 
            unlockMessage: "Miko and Toma are now available to battle in Free Battle!"
        }
    },
	
	
	
"ep_tokyo_thebladeraider": {
        id: "ep_tokyo_thebladeraider",
        title: "The Blade Raider",
        tags: ["Carlos", "Blade", "Raider", "Sharks", "Tokyo"],
		mainStoryLength: 6,
        isNewEpisode: true,
        locale: "nikotama",
        prereqs: ["ep_tokyo_tutorial"],
        
        stages: {
            // STAGE 0: A text frin Miko
            0: {
                type: "vn_scene",
                bg: "./images/maps/tokyo/Nikotama.png",
                dialogue: {
                    "start": { 
                        speaker: "", 
                        present: [], 
                        text: [
							"Your cell phone pings. Looks like you got a message.",
							"Blip!"
							],
                        next: "check_player_phone"
                    }
					"check_player_phone": { 
                        speaker: "Message from Miko:", 
                        present: ["PlayerPhone_Messages.png"], 
                        text: [
							"Waaaaah! Get over to the school rooftop right now! \(๑•́o•̀๑)/  There's some big guy here threatening to take our Beyblades if we lose!",
							"Baka won't take NO for an answer and is demanding at least one of us battle him. So uh... please hurry up? ˚‧º·(˃̣̣̥∩˂̣̣̥)‧º·˚"
							],
                        next: "aw_jeez"
                    }
					"aw_jeez": { 
                        speaker: "Me:", 
                        present: [], 
                        text: [
							"Big guy? Sounds like real trouble.",
							"Miko, you and the rest hang tight, I'm on my way."
							],
                        action: "advance_stage",
                        nextStage: 1
                    }
                }
            },

            // STAGE 1: [STORY] The Map Exploration
            1: {
                currentStageObjective: "Head to the School.",
                type: "pin_injection",
                targetMap: "nikotama",
                pins: [ 
					{
                    id: "pin_school_totheroof", 
                    x: 704, y: 78,
                    type: "red", 
                    name: "School Rooftop", 
                    triggerStage: 6
					},
{
                    id: "pin_checkbush_RNG_BP", 
                    x: 779, y: 359,
                    type: "gold", 
                    name: "School Rooftop", 
                    triggerStage: 2
					},					
                ]
            },

            // STAGE 2: RNG Check: BP bonus from a bush
            2: {
                currentStageObjective: "Head to the school.",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/yoyogi_park.png", 
                dialogue: {
                    "start": { 
                        speaker: "Me", 
                        text: "Something is shining in this bush...",
                        action: "rng_branch",
                        chance: 0.50, // 50% chance
                        successStage: 3, // If they win, go to 3
                        failStage: 4
                    }
                }
            },

            // STAGE 3: 100 BP Successfully gained from bush
            3: {
                currentStageObjective: "Head to the school.",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/yoyogi_park.png", 
                dialogue: {
                    "start": { 
                        speaker: "", 
                        text: "Wild! You found 100 BP hidden in the branches!",
                        action: "grant_bp",
                        amount: 100, // Grants the BP and saves to Firebase
                        nextStage: 5 // Route to the Map WITHOUT the bush
                    }
                }
            },

            // STAGE 4: 100 BP not gained from bush
            4: {
                currentStageObjective: "Head to the school.",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/yoyogi_park.png", 
                dialogue: {
                    "start": { 
                        speaker: "Me", 
                        text: "Nevermind, it was just a very shiny beetle. And it bit me.",
                        action: "advance_stage",
                        nextStage: 5 // Route to the Map WITHOUT the bush
                    }
                }
            },

            // STAGE 5: Map exploration without BP bush RNG pin
            5: {
                currentStageObjective: "Head to the school.",
                type: "pin_injection",
                targetMap: "nikotama",
                pins: [ 
					{
                    id: "pin_school_totheroof", 
                    x: 704, y: 78,
                    type: "red", 
                    name: "School Rooftop", 
                    triggerStage: 6
					}				
                ]
            },

            // STAGE 6: [STORY] The rooftop
            6: {
                currentStageObjective: "Find out what's going on.",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/school_rooftop.png", 
                dialogue: {
                    "start": { 
                        speaker: "Carlos", 
                        present: ["Carlos.png"], 
                        text: "And this Bey... is mine! Ha ha ha!",
                        next: "andrew_lost"
                    },
					"andrew_lost": { 
                        speaker: "Andrew", 
                        present: ["Carlos.png"], 
                        text: "I... I lost...",
                        next: "carlos_taunts"
                    },
					"carlos_taunts": { 
                        speaker: "Carlos", 
                        present: ["Carlos.png", "Andrew.png"], 
                        text: "Don't feel TOO bad, loser. No one stands a chance against me! Anyway, thanks for the spare parts. If no one is strong enough to step to me, I'm outta here.",
                        next: "andrew_cry"
                    },
					"andrew_cry": { 
                        speaker: "Andrew", 
                        present: ["Carlos.png", "Andrew.png"], 
                        text: "W-wait! My bey! Tch...!",
                        next: "miko_just_in_time"
                    },
					"miko_just_in_time": { 
                        speaker: "Miko", 
                        present: ["Miko_Nanami.png"], 
                        text: [
						"<player>, you made it! But... I'm not sure what we can do, now. I tried to tell Andrew not to battle this guy.",
						"Do you... think one of us should challenge him? To win back Andrew's Beyblade?",
						]
                        next: "carlos_notices_player"
                    },
					"carlos_notices_player": { 
                        speaker: "Carlos", 
                        present: ["Carlos.png", "Miko_Nanami.png"], 
                        text: [
						"So, your name's <player>? Don't think I didn't see you walk out here. You're just so weak-looking that you almost blended into the background, ha!",
						"You trying to lose your bey, too? Come on, weakling, take your shot.",
						]
                        next: "miko_stands_up_to_carlos"
                    },
					"miko_stands_up_to_carlos": { 
                        speaker: "Miko", 
                        present: ["Carlos.png", "Miko_Nanami.png"], 
                        text: "We aren't afraid of you! We've got plenty of strength! We'll take back Andrew's bey, and all the other ones you STOLE from people!"
                        next: "player_joins_in"
                    },
					"player_joins_in": { 
                        speaker: "Me", 
                        present: ["Carlos.png", "Miko_Nanami.png"], 
                        text: "She's right, we aren't just going to stand here and let this happen. We'll take you on."
                        next: "tyson_voice"
                    },
					"tyson_voice": { 
                        speaker: "A voice from the stairway", 
                        present: [], 
                        text: "Guys! What's going on here?"
                        next: "tyson_arrives"
                    },
					"tyson_arrives": { 
                        speaker: "A voice from the stairway", 
                        present: ["Tyson.png"], 
                        text: "Andrew! I thought today was our big battle! Why do you look so upset?"
                        next: "tyson_arrives"
                    },
                    "andrew_lost": { 
                        speaker: "Andrew", 
                        present: ["Andrew.png"], 
                        text: "I... I lost...",
                        action: "advance_stage",
                        nextStage: 7
                    }
                } 
            },

            // STAGE 7: Complete 100% End Episode
            7: {
                currentStageObjective: "Finish the conversation and collect your rewards!",
                type: "vn_scene",
                bg: "./images/dialogue_backgrounds/yoyogi_park.png", 
                dialogue: {
                    "start": {
                        speaker: "", 
                        text: "A New Spin on Life complete! Congratulations!",  
                        action: "end_episode" 
                    }
                }
            }
        }, 
        
        rewards: { 
            bp: 500, 
            unlockOpponents: ["opp_miko1", "opp_toma1"], 
            unlockLocations: [], 
            unlockMessage: "Miko and Toma are now available to battle in Free Battle!"
        }
    }
};