// gachabanners.js
window.GachaBanners = {
    standard: {
        name: "Standard Parts Depot",
        cost: 150,
        // The chance to hit each rarity tier (Must equal 100)
        rates: {
            1: 50, // 50% chance for 1-Star (Iron)
            2: 30, // 30% chance for 2-Star (Emerald)
            3: 14, // 14% chance for 3-Star (Sapphire)
            4: 5,  // 5% chance for 4-Star (Amethyst)
            5: 1   // 1% chance for 5-Star (Gold)
        },
        // The item pools for each rarity tier
        pools: {
            1: [
                { id: 'ar_14', category: 'attackRings', styleId: 'cross_talon' },
				{ id: 'ar_02', category: 'attackRings', styleId: 'polta_red' },
				{ id: 'ar_17', category: 'attackRings', styleId: 'quad_horn' },
                { id: 'wd_01', category: 'weightDisks', styleId: 'six_balance' },
				{ id: 'bb_01', category: 'bladeBases', styleId: 'semiflat_base_crestedcarapace' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_orange' },
				{ id: 'launcher_01', category: 'launchers', styleId: 'ezshoot_standard_green' },
				{ id: 'launcher_01', category: 'launchers', styleId: 'ezshoot_standard_magenta' },
				{ id: 'launcher_01', category: 'launchers', styleId: 'ezshoot_standard_black' },
				{ id: 'launcher_01', category: 'launchers', styleId: 'ezshoot_standard_blue' },
				{ id: 'ripcord_01', category: 'ripCords', styleId: 'ezwinder_yellow' },
				{ id: 'ripcord_01', category: 'ripCords', styleId: 'ezwinder_blue' },
				{ id: 'ripcord_01', category: 'ripCords', styleId: 'ezwinder_green' },
				{ id: 'ripcord_01', category: 'ripCords', styleId: 'ezwinder_red' },
				{ id: 'ripcord_01', category: 'ripCords', styleId: 'ezwinder_purple' }
				
                // Add more 1-star items here
            
			],
            2: [
                { id: 'ar_02', category: 'attackRings', styleId: 'saizo_black' },
				{ id: 'ar_15', category: 'attackRings', styleId: 'cross_fox' },
				{ id: 'ar_03', category: 'attackRings', styleId: 'gekiryu_oh' },
				{ id: 'wd_03', category: 'weightDisks', styleId: 'six_balance_indent' },
				{ id: 'wd_09', category: 'weightDisks', styleId: 'eight_balance_indent' },
				{ id: 'wd_08', category: 'weightDisks', styleId: 'eight_balance' },
				{ id: 'wd_04', category: 'weightDisks', styleId: 'six_heavy' },
				{ id: 'wd_02', category: 'weightDisks', styleId: 'six_wide' },
                { id: 'bb_14', category: 'bladeBases', styleId: 'pivot_flat' },
				{ id: 'bb_13', category: 'bladeBases', styleId: 'pulse_core_violet' },
				{ id: 'bb_05', category: 'bladeBases', styleId: 'sharpbase_saizo_black' },
				{ id: 'bb_05', category: 'bladeBases', styleId: 'sharpbase_polta_red' },
				{ id: 'bb_01', category: 'bladeBases', styleId: 'semiflat_base_cyan' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_cyan' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_black2' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_red' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_white' },
				{ id: 'launcher_01', category: 'launchers', styleId: 'ezshoot_standard_electricblue' },
				{ id: 'launcher_01', category: 'launchers', styleId: 'ezshoot_standard_mint' },
				{ id: 'launcher_01', category: 'launchers', styleId: 'ezshoot_standard_darkorange' },
				{ id: 'ripcord_01', category: 'ripCords', styleId: 'ezwinder_coralpink' },
				{ id: 'ripcord_01', category: 'ripCords', styleId: 'ezwinder_sandstone' }
                
				// Add more 2-star items here
            
			],
            3: [
                { id: 'ar_16', category: 'attackRings', styleId: 'as_survivor' },
				{ id: 'ar_06', category: 'attackRings', styleId: 'hexa_strike' },
				{ id: 'ar_03', category: 'attackRings', styleId: 'frostic_dranzer' },
				{ id: 'ar_01', category: 'attackRings', styleId: 'cross_dragon' },
				{ id: 'wd_11', category: 'weightDisks', styleId: 'eight_heavy' },
				{ id: 'wd_06', category: 'weightDisks', styleId: 'eight_wide_softedge' },
                { id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_blue' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_red_ifrit' },
				{ id: 'sg_04', category: 'spinGears', styleId: 'dualaxis_black' },
				{ id: 'sg_03', category: 'spinGears', styleId: 'dualaxis_red' },
				{ id: 'bb_12', category: 'bladeBases', styleId: 'driftguard_darkcobalt' },
				{ id: 'bb_12', category: 'bladeBases', styleId: 'driftguard_honey' },
				{ id: 'bb_08', category: 'bladeBases', styleId: 'tiltshift_red' },
				{ id: 'bb_07', category: 'bladeBases', styleId: 'heavy_orbit_green' },
				{ id: 'bb_03', category: 'bladeBases', styleId: 'flatbase_spindragoon_white' },
				{ id: 'bb_02', category: 'bladeBases', styleId: 'volcanoflatbase_ifrit' },
				{ id: 'bb_01', category: 'bladeBases', styleId: 'semiflat_base_blue' },
				{ id: 'launcher_01', category: 'launchers', styleId: 'ezshoot_standard_twotone_koamarublush' },
				{ id: 'ripcord_01', category: 'ripCords', styleId: 'ezwinder_creamsicleblend' },
				{ id: 'ripcord_01', category: 'ripCords', styleId: 'ezwinder_monochromeblend' }
                
				// Add more 3-star items here
            
			],
            4: [
                { id: 'ar_12', category: 'attackRings', styleId: 'petalswirl_sakura' },
				{ id: 'ar_12', category: 'attackRings', styleId: 'petalswirl_plum' },
				{ id: 'ar_14', category: 'attackRings', styleId: 'cross_talon_steelwing' },
				{ id: 'ar_10', category: 'attackRings', styleId: 'master_of_flames' },
				{ id: 'ar_07', category: 'attackRings', styleId: 'sandstrike' },
				{ id: 'ar_06', category: 'attackRings', styleId: 'hexa_strike_marigold' },
				{ id: 'ar_05', category: 'attackRings', styleId: 'howling_fang' },
				{ id: 'ar_04', category: 'attackRings', styleId: 'fossil_jaw' },
				{ id: 'ar_01', category: 'attackRings', styleId: 'megaro_arm' },
				{ id: 'wd_10', category: 'weightDisks', styleId: 'eight_balance_compactversion' },
				{ id: 'wd_07', category: 'weightDisks', styleId: 'eight_wide_compactversion' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_purple' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_magenta2' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_pink' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_magenta' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_amber' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_black' },
				{ id: 'sg_03', category: 'spinGears', styleId: 'dualaxis_sandstone' },
                { id: 'bb_10', category: 'bladeBases', styleId: 'sweet_embrace_sakura' },
				{ id: 'bb_10', category: 'bladeBases', styleId: 'sweet_embrace_plum' },
				{ id: 'bb_11', category: 'bladeBases', styleId: 'lowbarrelpoint_base' },
				{ id: 'bb_08', category: 'bladeBases', styleId: 'tiltshift_lightblue' },
				{ id: 'bb_04', category: 'bladeBases', styleId: 'fossil_claw' },
				{ id: 'bb_03', category: 'bladeBases', styleId: 'flatbase_megaroarm_black' },
				{ id: 'bb_01', category: 'bladeBases', styleId: 'semiflat_base_magenta' }
                
				// Add more 4-star items here
            ],
            5: [
                { id: 'ar_02', category: 'attackRings', styleId: 'polta_red_crystal' },
				{ id: 'sg_02', category: 'spinGears', styleId: 'SG_basic_luminia' },
				{ id: 'sg_02', category: 'spinGears', styleId: 'SG_basic_white_moonsongstampede' },
				{ id: 'sg_01', category: 'spinGears', styleId: 'SG_basic_noxia' },
                { id: 'bb_05', category: 'bladeBases', styleId: 'sharpbase_polta_red_crystal' },
				{ id: 'bb_06', category: 'bladeBases', styleId: 'cloud_pastern' },
				{ id: 'bb_03', category: 'bladeBases', styleId: 'volcanoflatbase_noxia' },
				{ id: 'bb_13', category: 'bladeBases', styleId: 'pulse_core_emerald_crystal' },
				{ id: 'ripcord_01', category: 'ripCords', styleId: 'ezwinder_rainbowblend' }
                
				// Add more 5-star items here
            ]
        }
    }
};