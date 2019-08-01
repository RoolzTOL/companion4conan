Citadel = {
	description: {
		title: {
			'fr': "Citadelle",
            'en': "Citadel"
		},
        version: '1.0',
        format: '1.0',
        origin: 'stretchgoal',
        copyright: 'Monolith',
        rules: [ 
            {
                title: { 
                    'fr': "Saut/Escalade depuis le balcon",
                    'en': "Leaping From/Climbing a Balcony"
                },
                description: { 
                    'fr': "sauter depuis le balcon inflige {dice_yellow}{dice_yellow} sans défense possible, {dice_yellow} si la figurine possède la compétence Saut. Remonter sur le balcon coûte 1 point de mouvement supplémentaire pour un personnage ayant la compétence Escalade.",
                    'en': "a character can move across a railing from a balcony area to a ground floor area as though it were a border. The character rolls {dice_yellow}{dice_yellow} for falling damage. If the character has Leap, the character rolls {dice_yellow} instead. A character with Climb can move across a railing from a ground floor area to a balcony area by spending 1 extra movement point."
                },
                coordinates: [[ 60, 62 ]]
            }, {
                title: { 
                    'fr': "Fosse",
                    'en': "Pit"
                },
                description: { 
                    'fr': "y entrer est un mouvement normal, en sortir coûte 1 point de mouvement supplémentaire.",
                    'en': "a character must spend 1 extra movement point to move out of the pit area"
                },
                coordinates: [[ 47, 64 ]]
            }, {
                title: { 
                    'fr': "Grilles",
                    'en': "Cellar windows"
                },
                description: { 
                    'fr': "les grilles ne bloquent pas les lignes de vue.",
                    'en': "The cellar windows do not block lines of sight."
                },
                coordinates: [[ 60, 14 ], [ 72, 48 ], [ 72, 73 ]]
            }
        ],
        totopic: {
            'fr': "https://the-overlord.com/index.php?/topic/22-sg-carte-forteresse/",
            'en': "https://the-overlord.net/index.php?/topic/31-sg-citadel/"
        },
        losFile: true
	},
	size: [1065, 912],
    zones: {
        "1": {
            'area': [[11.36, 37.28], [0, 37.06], [0, 0], [11.55, 0.11]],
            'centers': [[5.7, 18.25]],
            'links': ["1#13#1", "1#19#1"],
            'level': 1
        },
        "2": {
            'area': [[16.06, 21.38], [32.58, 21.38], [32.58, 17.65], [32.86, 10.86], [32.49, 4.82], [19.44, 4.5], [18.5, 5.48], [16.06, 7.13]],
            'centers': [[24.15, 13.85]],
            'links': ["1#14#1", "1#5#1", "1#7#1", "1#3#1"],
            'level': 1
        },
        "3": {
            'area': [[32.96, 11.07], [34.18, 10.96], [34.65, 9.98], [34.74, 4.71], [56.24, 4.5], [56.34, 25.88], [34.55, 26.1], [34.37, 17.54], [32.96, 17.54]],
            'centers': [[45.40, 13.85]],
            'links': ["1#5#1", "1#2#1"],
            'level': 1
        },
        "5": {
            'area': [[62.63, 27.41], [73.05, 27.3], [73.05, 22.37], [71.55, 8.55], [70.89, 8.55], [70.42, 4.71], [59.91, 4.61], [59.72, 13.38], [60.09, 25.99]],
            'centers': [[65.7, 16.4]],
            'links': ["1#30#1", "1#24#1", "1#16#1", "1#10#1", "1#6#1", "1#2#1", "1#3#1"],
            'level': 3
        },
        "6": {
            'area': [[71.92, 8.33], [73.15, 6.69], [73.24, 4.5], [94.93, 4.06], [94.65, 24.89], [85.73, 24.89], [85.45, 22.26], [81.13, 22.48], [80.38, 23.79], [78.03, 23.57], [77.75, 22.04], [73.33, 22.04]],
            'centers': [[84.3, 6.69]],
            'links': ["1#12#1", "1#5#1", "1#18#1", "1#11#1"],
            'level': 3
        },
        "7": {
            'area': [[32.58, 21.49], [32.77, 38.93], [27.04, 38.71], [26.85, 39.47], [23.19, 39.47], [23.38, 38.93], [17.46, 38.93], [15.96, 36.4], [16.06, 21.38]],
            'centers': [[24.1, 30.75]],
            'links': ["1#14#1", "1#9#1", "1#10#1", "1#8#1", "1#2#1"],
            'level': 1
        },
        "8": {
            'area': [[49.77, 28.62], [49.67, 38.6], [32.96, 38.93], [32.96, 28.4]],
            'centers': [[41.65, 33.7]],
            'links': ["1#15#1", "1#21#1", "1#23#1", "1#9#1", "1#29#1", "1#10#1", "1#7#1"],
            'level': 1
        },
        "9": {
            'area': [[49.95, 28.4], [57.65, 28.29], [57.84, 39.36], [49.95, 38.71]],
            'centers': [[53.75, 33.7]],
            'links': ["1#8#1", "1#7#1", "1#10#1"],
            'level': 2
        },
        "10": {
            'area': [[64.04, 41.12], [73.05, 40.9], [72.86, 27.63], [62.63, 27.41], [62.35, 27.85], [58.12, 28.29], [58.03, 39.14], [60.66, 38.93]],
            'centers': [[65.8, 33.99]],
            'links': ["1#9#1", "1#30#1", "1#24#1", "1#16#1", "1#5#1", "1#8#1", "1#7#1"],
            'level': 3
        },
        "11": {
            'area': [[74.65, 23.79], [77.75, 24.12], [80.19, 24.01], [80.38, 24.45], [83, 24.78], [83.38, 35.09], [74.93, 35.2]],
            'centers': [[77.35, 28.95]],
            'links': ["1#6#1"],
            'level': 3
        },
        "12": {
            'area': [[85.73, 25.11], [94.65, 25.33], [93.71, 33.88], [85.82, 33.77]],
            'centers': [[90.55, 29.3]],
            'links': ["1#18#1", "1#6#1", "1#26#1", "1#32#1"],
            'level': 2
        },
        "13": {
            'area': [[0.09, 37.39], [11.46, 37.39], [11.46, 42.54], [13.43, 42.43], [13.43, 41.34], [15.49, 41.56], [15.59, 60.31], [11.55, 60.53], [11.55, 62.94], [7.89, 62.94], [6.48, 64.25], [6.38, 65.24], [0, 65.24]],
            'centers': [[2.8, 51.6]],
            'links': ["1#1#1", "1#14#1", "1#15#1", "1#19#1", "1#23#1"],
            'level': 1
        },
        "14": {
            'area': [[15.68, 41.56], [23.57, 41.78], [23.38, 39.47], [26.76, 39.47], [27.23, 41.45], [30.52, 41.89], [30.52, 61.84], [15.96, 61.84], [15.77, 60.42]],
            'centers': [[26.05, 51.7]],
            'links': ["1#13#1", "1#15#1", "1#7#1", "1#2#1", "1#29#1", "1#23#1", "1#21#1"],
            'level': 1
        },
        "15": {
            'area': [[30.7, 62.06], [30.7, 42], [36.62, 41.78], [50.14, 41.78], [57.56, 41.78], [57.84, 62.39], [50.52, 62.17], [50.42, 53.18], [42.82, 53.07], [42.82, 62.28]],
            'centers': [[42.05, 51.7]],
            'links': ["1#13#1", "1#14#1", "1#22#1", "1#23#1", "1#21#1", "1#8#1", "1#29#1"],
            'level': 1
        },
        "16": {
            'area': [[63.85, 41.12], [73.05, 41.23], [73.05, 59.32], [63.94, 59.32], [63.66, 58], [62.82, 57.57], [61.31, 57.57], [61.5, 52.08], [63.57, 51.97], [63.57, 49.78], [62.54, 49.12], [61.6, 49.23], [61.41, 44.19], [62.25, 44.41], [63.47, 44.52], [63.85, 44.52]],
            'centers': [[67.2, 47.4]],
            'links': ["1#30#1", "1#24#1", "1#10#1", "1#5#1", "1#17#1", "1#18#1"],
            'level': 3
        },
        "17": {
            'area': [[75.21, 38.16], [82.25, 37.94], [82.44, 45.39], [82.44, 50], [82.54, 57.89], [75.21, 57.89]],
            'centers': [[79.2, 48.3]],
            'links': ["1#16#1", "1#18#1"],
            'level': 1
        },
        "18": {
            'area': [[85.82, 34.1], [93.62, 34.1], [93.52, 57.46], [90.23, 57.89], [87.42, 58], [85.54, 57.89], [85.54, 50], [82.72, 49.67], [82.54, 45.72], [85.35, 45.5]],
            'centers': [[90.3, 48.3]],
            'links': ["1#12#1", "1#16#1", "1#6#1", "1#17#1", "1#32#1", "1#26#1"],
            'level': 1
        },
        "19": {
            'area': [[0.09, 65.46], [6.29, 65.35], [6.48, 99.89], [0.19, 99.89]],
            'centers': [[2.7, 83.05]],
            'links': ["1#1#1", "1#13#1"],
            'level': 1
        },
        "20": {
            'area': [[10.52, 65.35], [30.89, 65.35], [30.7, 80.59], [10.52, 80.37]],
            'centers': [[19.25, 74.5]],
            'links': ["1#21#1", "1#28#1", "1#27#1", "1#23#1"],
            'level': 1
        },
        "21": {
            'area': [[31.08, 62.5], [42.91, 62.39], [42.91, 73.03], [50.52, 73.14], [50.61, 62.5], [57.56, 62.61], [57.75, 82.35], [32.77, 82.13], [32.49, 74.12], [31.92, 73.36], [30.89, 73.36], [30.89, 69.52], [31.46, 69.96], [32.3, 70.07], [32.77, 64.25]],
            'centers': [[41.3, 71.85]],
            'links': ["1#14#1", "1#15#1", "1#22#1", "1#23#1", "1#20#1", "1#8#1", "1#29#1"],
            'level': 1
        },
        "22": {
            'area': [[43.1, 53.29], [50.42, 53.4], [50.42, 72.92], [43.1, 73.03]],
            'centers': [[46.7, 63.2]],
            'links': ["1#15#1", "1#21#1", "1#23#1", "1#29#1"],
            'level': 0
        },
        "23": {
            'area': [[57.84, 42], [61.22, 42], [61.31, 82.46], [57.84, 82.46]],
            'centers': [[59.5, 61.8]],
            'links': ["1#13#1", "1#14#1", "1#15#1", "1#20#1", "1#21#1", "1#22#1", "1#29#1", "1#8#1"],
            'level': 3
        },
        "24": {
            'area': [[63.94, 59.65], [72.96, 59.65], [72.96, 69.74], [73.05, 74.56], [73.05, 83.44], [63.76, 83.33], [63.66, 81.25], [61.69, 79.39], [61.41, 76.64], [62.16, 76.86], [63.47, 76.64], [63.57, 74.34], [62.63, 73.68], [61.6, 73.79], [61.6, 68.64], [62.16, 68.86], [63.47, 68.75], [63.66, 66.23], [62.63, 65.46], [61.5, 65.46], [61.41, 60.64], [62.25, 60.75], [63.57, 60.64]],
            'centers': [[67.65, 71.4]],
            'links': ["1#30#1", "1#16#1", "1#10#1", "1#5#1", "1#25#1", "1#26#1"],
            'level': 3
        },
        "25": {
            'area': [[74.93, 60.86], [82.63, 60.53], [82.44, 69.19], [82.63, 81.03], [75.21, 81.69]],
            'centers': [[79.2, 71.50]],
            'links': ["1#24#1", "1#26#1"],
            'level': 1
        },
        "26": {
            'area': [[85.63, 83.22], [93.62, 83.33], [94.08, 59.76], [92.11, 60.09], [90.42, 58.33], [87.42, 58.11], [89.58, 59.21], [89.67, 59.76], [85.35, 59.98], [85.35, 69.74], [82.63, 69.19], [82.44, 73.25], [85.16, 73.57], [85.26, 73.79]],
            'centers': [[89.9, 71.85]],
            'links': ["1#12#1", "1#24#1", "1#25#1", "1#32#1", "1#18#1"],
            'level': 1
        },
        "27": {
            'area': [[10.7, 80.81], [30.7, 80.92], [30.7, 85.42], [32.02, 85.42], [32.02, 94.19], [13.33, 94.3], [10.7, 92]],
            'centers': [[19.2, 90.05]],
            'links': ["1#28#1", "1#29#1", "1#20#1"],
            'level': 1
        },
        "28": {
            'area': [[32.11, 85.42], [38.5, 85.2], [38.69, 94.96], [32.11, 94.19]],
            'centers': [[35.15, 90.05]],
            'links': ["1#27#1", "1#29#1", "1#20#1"],
            'level': 2
        },
        "29": {
            'area': [[38.78, 85.31], [61.78, 85.64], [61.88, 95.94], [38.59, 95.07]],
            'centers': [[50.2, 90.05]],
            'links': ["1#14#1", "1#15#1", "1#21#1", "1#22#1", "1#23#1", "1#28#1", "1#30#1", "1#27#1", "1#8#1"],
            'level': 3
        },
        "30": {
            'area': [[62.07, 85.53], [63.85, 85.53], [63.85, 83.55], [72.86, 83.44], [72.86, 83.88], [75.31, 83.88], [75.21, 95.07], [61.97, 96.05]],
            'centers': [[68.5, 90.05]],
            'links': ["1#31#1", "1#29#1", "1#24#1", "1#16#1", "1#10#1", "1#5#1", "1#32#1"],
            'level': 3
        },
        "31": {
            'area': [[75.4, 84.1], [84.88, 83.99], [84.98, 93.97], [75.59, 94.96]],
            'centers': [[80.45, 89.95]],
            'links': ["1#32#1", "1#30#1"],
            'level': 2
        },
        "32": {
            'area': [[85.63, 83.44], [93.71, 83.44], [93.52, 95.61], [86.95, 95.61], [85.26, 93.97], [85.07, 84.1], [85.45, 83.88]],
            'centers': [[90, 90.05]],
            'links': ["1#31#1", "1#12#1", "1#30#1", "1#18#1", "1#26#1"],
            'level': 1
        }
    }
}