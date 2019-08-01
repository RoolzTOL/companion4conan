Forest = {
	description: {
		title: {
			'fr': "Foret",
            'en': "Forest"
        },
        version: '1.0',
        format: '1.0',
        origin: 'nordheim',
        copyright: 'Monolith',
        rules: [ 
            {
                title: { 
                    'fr': "Forêt impénétrable",
                    'en': "Impenetrable Forest"
                },
                description: { 
                    'fr': "les zones de forêt bloquent les lignes de vue. On peut tirer à partir d'une telle zone mais pas tirer dans cette zone ni au travers. Y entrer coûte 1 point de mouvement supplémentaire. En sortir ne coûte pas de point de mouvement supplémentaire.",
                    'en': "these 3 Forest zones block Lines of Sight. A character can aim from but not shoot inside or through these areas. Entering the area costs an additional movement point. Leaving the area does not cost any extra movement points."
                },
                coordinates: [[31,62], [57,21], [76,60]]
            }, {
                title: { 
                    'fr': "Eperon rocheux",
                    'en': "Rocky Outcrop"
                },
                description: { 
                    'fr': "les zones de rochers bloquent les lignes de vue et octroient un bonus de surplomb. Y grimper coûte 1 point de mouvement supplémentaire. En descendre ne coûte pas de point de mouvement supplémentaire.",
                    'en': "the 2 Rocky Outcrop areas block Lines of Sight and grant the Elevation Bonus. Climb costs 1 additional movement point. Climbing down does not cost any extra movement point."
                },
                coordinates: [[19,12], [39,10]]
            }
        ],
        totopic: {
            'fr': "https://the-overlord.com/index.php?/topic/808-nordheim-carte-for%C3%AAt/",
            'en': "https://the-overlord.net/index.php?/topic/32-nordheim-forest/"
        },
        losFile: true
	},
	size: [1062, 910],
    zones: {
        "1": {
            'area': [[0.19, 0], [23.45, 0], [22.13, 0.33], [19.87, 0.66], [19.02, 1.32], [18.27, 1.43], [16.85, 1.76], [15.73, 2.2], [14.78, 2.53], [14.12, 3.41], [13.28, 4.29], [12.24, 4.95], [11.77, 5.82], [10.92, 6.81], [10.45, 7.69], [10.26, 8.68], [10.08, 9.89], [10.17, 11.1], [10.36, 12.2], [10.55, 13.96], [11.02, 15.27], [11.21, 16.26], [11.49, 17.8], [11.68, 19.34], [12.05, 20.88], [12.62, 22.2], [13.65, 23.85], [14.88, 25.16], [16.29, 26.04], [17.89, 26.48], [19.96, 26.37], [19.96, 33.41], [0.19, 34.4]],
            'centers': [[4.99, 15.93]],
            'links': ["1#11#1", "1#12#1", "1#17#1", "1#22#1", "1#2#1"],
            'level': 0
        },
        "2": {
            'area': [[28.44, 3.85], [28.44, 5.93], [28.91, 6.92], [29.66, 8.02], [30.13, 8.9], [29.85, 9.78], [28.81, 11.54], [28.63, 11.87], [28.72, 15.16], [28.44, 17.8], [27.78, 20.44], [26.93, 22.42], [25.99, 23.96], [24.95, 25.05], [24.2, 25.6], [23.07, 26.04], [20.34, 26.26], [18.17, 26.26], [17.23, 26.04], [16.29, 25.6], [15.44, 25.27], [14.88, 24.73], [14.22, 24.18], [13.47, 23.19], [12.9, 22.2], [12.43, 21.21], [12.05, 20.22], [11.77, 18.57], [11.39, 16.37], [10.92, 14.51], [10.55, 12.86], [10.26, 10.99], [10.26, 10], [10.55, 8.13], [11.3, 6.48], [12.05, 5.71], [13.28, 4.51], [14.31, 3.63], [14.97, 3.08], [15.82, 2.42], [16.85, 2.09], [18.17, 1.76], [19.11, 1.32], [20.53, 0.77], [21.94, 0.44], [24.2, 0.33], [25.52, 0.22], [26.37, 0.55], [27.5, 1.32], [28.25, 2.53]],
            'centers': [[19.87, 19.23]],
            'links': ["1#1#1", "1#3#1", "1#6#1", "1#11#1", "1#12#1", "1#13#1", "1#14#1", "1#15#1", "1#16#1", "1#17#1", "1#19#1", "1#24#1", "1#7#1"],
            'level': 1
        },
        "3": {
            'area': [[25.61, 0], [63.84, 0.11], [65.07, 2.53], [65.73, 4.51], [66.38, 6.15], [67.61, 8.02], [59.04, 11.54], [57.34, 10.66], [56.5, 10.33], [55.56, 10.33], [54.71, 10.88], [54.05, 11.98], [53.67, 12.97], [53.2, 13.85], [52.64, 14.29], [52.17, 14.73], [45.57, 9.56], [45.1, 6.37], [45.1, 4.62], [45.01, 3.3], [45.01, 2.75], [43.88, 2.09], [42.84, 1.87], [42.09, 2.31], [41.62, 2.86], [41.24, 3.41], [40.02, 3.52], [39.27, 3.19], [38.61, 2.97], [38.23, 2.97], [37.19, 3.96], [36.16, 5.05], [35.59, 6.48], [35.5, 7.58], [35.31, 8.79], [34.75, 11.87], [28.91, 11.98], [29.28, 10.88], [29.66, 10], [30.04, 8.79], [29.94, 8.02], [29.19, 7.03], [28.53, 6.04], [28.44, 4.4], [28.44, 3.08], [27.97, 1.87], [27.31, 1.32], [26.65, 0.55]],
            'centers': [[32.3, 5.71], [54.52, 4.84]],
            'links': ["1#6#1", "2#9#1", "2#10#1", "1#13#1", "2#16#1", "1#2#1", "1#7#1", "2#4#1", "2#5#1"],
            'level': 0
        },
        "4": {
            'area': [[64.03, 0.11], [71.37, 0.11], [72.32, 0.55], [72.88, 1.54], [73.73, 3.3], [74.67, 5.38], [75.52, 6.59], [76.65, 7.47], [77.31, 8.02], [78.44, 8.79], [79.19, 10.44], [80.13, 11.54], [81.07, 12.75], [81.92, 13.74], [83.33, 14.07], [84.65, 14.73], [85.59, 15.82], [86.72, 16.92], [87.85, 18.68], [89.36, 19.56], [91.05, 20.11], [91.9, 20.44], [92.56, 21.54], [93.13, 22.64], [93.69, 23.74], [94.54, 24.84], [96.05, 25.93], [97.74, 27.03], [98.96, 27.58], [100, 27.8], [100, 38.9], [97.93, 38.35], [95.57, 37.47], [94.16, 36.7], [93.13, 36.04], [92.18, 35.16], [91.62, 34.95], [90.21, 32.86], [89.64, 32.42], [88.32, 30.44], [86.63, 28.79], [85.69, 27.03], [85.31, 26.37], [84.75, 25.49], [83.52, 24.95], [82.49, 24.18], [81.07, 22.86], [79.76, 21.87], [78.53, 20.55], [76.93, 19.45], [75.42, 18.13], [74.01, 17.14], [73.26, 16.15], [72.03, 14.84], [71.09, 13.3], [69.68, 11.32], [68.17, 8.9], [67.33, 7.8], [66.01, 4.95], [64.31, 0.88]],
            'centers': [[81.07, 17.69]],
            'links': ["1#3#2", "1#9#1", "1#10#1", "1#14#1", "1#15#1", "1#16#1", "1#19#1", "1#21#1", "1#5#1"],
            'level': 0
        },
        "5": {
            'area': [[71.66, 0], [99.91, 0], [100, 27.47], [98.96, 27.25], [98.02, 26.92], [96.99, 26.37], [95.39, 25.27], [94.35, 24.51], [93.88, 24.07], [93.03, 22.2], [92.47, 20.88], [91.71, 20.44], [90.77, 20], [88.51, 19.23], [87.76, 18.24], [86.72, 17.03], [85.5, 15.49], [84.84, 14.4], [83.8, 13.96], [81.83, 13.41], [81.26, 12.97], [80.41, 11.87], [79.66, 10.99], [78.91, 9.78], [78.25, 8.57], [77.68, 8.13], [77.02, 7.8], [76.37, 6.81], [75.99, 6.81], [75.14, 5.71], [74.01, 3.74], [73.07, 2.09], [72.22, 1.21]],
            'centers': [[92.18, 8.9]],
            'links': ["1#3#2", "1#9#1", "1#10#1", "1#14#1", "1#15#1", "1#16#1", "1#19#1", "1#21#1", "1#25#1", "1#7#1", "1#4#1"],
            'level': 0
        },
        "6": {
            'area': [[28.91, 12.09], [34.75, 12.09], [34.46, 13.96], [34.18, 15.38], [34.09, 16.92], [34.37, 18.35], [34.65, 19.67], [35.22, 19.89], [35.4, 20.55], [35.88, 21.43], [36.53, 22.42], [37.19, 23.08], [38.04, 23.41], [39.55, 23.3], [41.24, 23.3], [42.09, 22.86], [43.03, 21.87], [43.41, 20.66], [44.16, 19.67], [44.63, 19.01], [45.67, 18.02], [46.33, 16.81], [46.42, 15.16], [46.23, 13.52], [45.76, 9.78], [52.07, 15.05], [51.32, 15.71], [50.38, 16.26], [49.72, 16.92], [49.06, 17.69], [48.31, 18.57], [48.02, 19.78], [47.93, 21.32], [48.12, 22.31], [48.59, 23.19], [48.68, 24.07], [48.31, 24.84], [47.65, 25.93], [47.55, 27.03], [47.46, 28.46], [47.46, 29.89], [47.74, 31.21], [48.21, 31.76], [20.15, 33.08], [20.24, 26.48], [22.03, 26.26], [23.73, 25.82], [24.76, 25.27], [25.8, 24.51], [26.55, 23.08], [27.4, 21.32], [28.06, 19.12], [28.44, 17.36], [28.81, 15.16]],
            'centers': [[34.84, 26.48]],
            'links': ["1#3#1", "1#11#1", "1#12#1", "1#13#1", "1#14#1", "1#15#1", "1#16#1", "1#19#1", "1#24#1", "1#2#1", "1#7#1"],
            'level': 0
        },
        "7": {
            'area': [[34.93, 11.87], [35.59, 7.36], [36.06, 5.71], [36.72, 4.84], [37.66, 3.74], [38.42, 3.3], [39.45, 3.52], [40.68, 3.52], [41.15, 3.3], [42, 2.42], [42.75, 2.09], [43.5, 2.09], [44.92, 2.64], [45.2, 3.52], [45.2, 5.16], [45.2, 6.15], [45.29, 7.8], [45.95, 13.52], [46.23, 16.26], [46.05, 17.25], [45.39, 17.91], [44.73, 18.57], [44.44, 19.12], [42.47, 21.87], [41.81, 22.64], [40.21, 23.08], [39.27, 22.97], [38.32, 22.97], [37.48, 22.86], [36.91, 22.2], [36.44, 21.87], [35.78, 21.1], [35.4, 20], [35.03, 19.78], [34.75, 19.67], [34.27, 17.58], [34.27, 16.04], [34.56, 14.4]],
            'centers': [[40.58, 9.23]],
            'links': ["1#3#1", "1#6#1", "1#11#1", "1#12#1", "1#13#1", "1#19#1", "1#2#1", "1#5#1"],
            'level': 1
        },
        "8": {
            'area': [[52.92, 14.29], [53.39, 13.41], [53.77, 12.2], [54.43, 10.99], [55.27, 10.55], [56.4, 10.44], [57.53, 10.77], [58.38, 11.32], [59.32, 12.31], [59.98, 12.75], [60.55, 13.74], [60.92, 14.51], [61.02, 15.49], [61.11, 16.04], [61.39, 16.26], [62.05, 16.15], [62.43, 16.59], [62.34, 17.36], [62.81, 17.91], [63.75, 18.02], [64.31, 18.13], [64.69, 18.57], [65.25, 19.45], [65.63, 20.33], [65.73, 21.76], [65.35, 22.86], [64.88, 23.3], [64.31, 23.96], [64.12, 24.4], [64.12, 25.38], [64.22, 26.15], [64.22, 26.92], [63.94, 28.24], [63.37, 28.79], [62.62, 29.45], [61.68, 29.56], [61.11, 29.67], [61.02, 30.33], [60.55, 30.99], [59.98, 31.65], [59.13, 31.87], [58.29, 31.87], [57.63, 31.87], [56.78, 31.21], [56.21, 30.99], [55.37, 30.66], [55.18, 30.55], [54.61, 30.77], [54.05, 31.1], [53.48, 31.76], [52.73, 32.09], [51.79, 32.64], [50, 32.64], [48.78, 32.31], [47.83, 31.32], [47.46, 29.89], [47.46, 28.35], [47.55, 26.81], [48.02, 25.71], [48.31, 24.84], [48.68, 24.73], [48.68, 24.07], [48.68, 23.19], [48.31, 22.42], [48.02, 21.76], [48.02, 20.33], [48.12, 19.01], [48.78, 18.13], [49.91, 17.03]],
            'centers': [[56.31, 21.98]],
            'links': ["1#3#2", "1#6#1", "1#9#1", "1#10#1", "1#11#1", "1#12#1", "1#13#1", "1#14#1", "1#15#1", "1#16#1", "1#19#1", "1#23#1", "1#7#1", "1#4#1", "1#5#1"],
            'level': 0,
            'onewaylinks': true
        },
        "9": {
            'area': [[59.13, 11.76], [67.7, 8.46], [69.02, 10.22], [70.15, 12.31], [71, 13.3], [72.03, 14.95], [72.88, 16.26], [74.2, 17.47], [76.27, 19.01], [80.04, 39.67], [60.55, 31.65], [60.64, 30.66], [61.02, 30], [61.58, 29.67], [62.34, 29.45], [63.09, 29.01], [63.75, 28.46], [63.94, 27.36], [64.03, 25.27], [64.22, 24.4], [64.6, 23.41], [65.25, 22.31], [65.73, 21.1], [65.73, 19.89], [65.35, 18.79], [64.88, 18.35], [64.22, 18.02], [63.65, 18.02], [62.81, 17.91], [62.52, 17.8], [62.24, 16.48], [61.86, 15.93], [61.39, 15.93], [61.21, 16.15], [60.92, 15.16], [60.64, 13.63], [59.98, 12.75], [59.51, 12.42]],
            'centers': [[69.77, 22.64]],
            'links': ["1#3#2", "1#10#1", "1#14#1", "1#15#1", "1#16#1", "1#19#1", "1#23#1", "1#4#1", "1#5#1"],
            'level': 0
        },
        "10": {
            'area': [[76.55, 19.12], [77.59, 20.22], [79.1, 21.43], [80.89, 23.08], [82.11, 24.29], [83.8, 25.27], [84.84, 25.82], [85.59, 26.81], [87.66, 29.89], [88.89, 31.32], [89.83, 33.08], [90.68, 34.18], [92.28, 35.6], [94.26, 36.92], [95.29, 37.47], [96.89, 38.02], [100, 39.01], [100, 53.85], [86.63, 42.31], [80.32, 39.67]],
            'centers': [[88.23, 37.8]],
            'links': ["1#3#2", "1#9#1", "1#11#1", "1#12#1", "1#13#1", "1#14#1", "1#15#1", "1#16#1", "1#19#1", "1#21#1", "1#25#1", "1#4#1", "1#5#1"],
            'level': 0
        },
        "11": {
            'area': [[0.09, 34.51], [8.19, 34.07], [18.46, 48.02], [17.89, 49.01], [17.33, 49.67], [16.67, 50.55], [16.29, 51.76], [16.01, 52.97], [15.91, 54.4], [0.09, 54.62]],
            'centers': [[7.72, 45.49]],
            'links': ["1#1#1", "1#6#1", "1#10#1", "1#12#1", "1#13#1", "1#14#1", "1#15#1", "1#17#1", "1#22#1", "1#2#1", "1#7#1"],
            'level': 0
        },
        "12": {
            'area': [[8.57, 33.96], [28.53, 32.97], [25.61, 47.03], [24.95, 47.47], [23.92, 47.14], [22.6, 46.7], [21.75, 46.48], [20.72, 46.59], [19.96, 46.92], [19.21, 47.36], [18.55, 47.91]],
            'centers': [[20.15, 39.78]],
            'links': ["1#1#1", "1#6#1", "1#10#1", "1#11#1", "1#13#1", "1#14#1", "1#15#1", "1#17#1", "1#19#1", "1#2#1", "1#7#1"],
            'level': 0
        },
        "13": {
            'area': [[28.81, 33.08], [41.62, 32.53], [46.05, 46.92], [36.53, 49.45], [35.59, 49.56], [35.03, 49.56], [34.18, 49.78], [33.99, 50.22], [33.33, 50.33], [32.77, 50.33], [32.2, 49.67], [31.64, 49.34], [31.36, 49.01], [30.23, 48.9], [29.38, 48.9], [28.72, 48.79], [28.06, 48.57], [27.4, 47.69], [26.74, 47.36], [25.8, 47.36]],
            'centers': [[34.84, 40.88]],
            'links': ["1#3#1", "1#6#1", "1#10#1", "1#11#1", "1#12#1", "1#14#1", "1#15#1", "1#19#1", "1#24#1", "1#2#1", "1#7#1"],
            'level': 0
        },
        "14": {
            'area': [[41.81, 32.31], [48.31, 32.09], [49.25, 32.64], [50.09, 32.86], [51.41, 32.86], [52.64, 32.2], [53.58, 31.87], [54.05, 31.1], [55.08, 30.55], [55.93, 30.99], [56.97, 31.54], [57.91, 31.98], [58.66, 32.2], [59.7, 31.98], [60.17, 31.76], [65.82, 34.07], [59.7, 48.79], [46.33, 46.92]],
            'centers': [[57.16, 40]],
            'links': ["1#6#1", "1#9#1", "1#10#1", "1#11#1", "1#12#1", "1#13#1", "1#15#1", "1#16#1", "1#19#1", "1#23#1", "1#2#1", "1#4#1", "1#5#1"],
            'level': 0
        },
        "15": {
            'area': [[66.01, 34.18], [86.35, 42.53], [84.56, 52.31], [83.43, 51.43], [82.58, 50.99], [81.83, 50.55], [80.98, 50.44], [80.32, 50.55], [79.85, 50.55], [79.57, 51.1], [79.1, 51.54], [78.81, 51.76], [78.44, 52.2], [77.87, 52.2], [77.4, 52.31], [76.46, 52.31], [75.89, 51.1], [75.33, 50.44], [74.67, 50.44], [73.92, 50.44], [73.54, 50.99], [73.35, 51.87], [73.35, 52.75], [73.16, 53.63], [72.79, 54.07], [72.22, 54.4], [71.66, 54.07], [70.72, 53.74], [69.21, 53.74], [68.46, 53.96], [59.89, 49.01]],
            'centers': [[73.26, 45.49]],
            'links': ["1#6#1", "1#9#1", "1#10#1", "1#11#1", "1#12#1", "1#13#1", "1#14#1", "1#16#1", "1#19#1", "1#2#1", "1#4#1", "1#5#1"],
            'level': 0
        },
        "16": {
            'area': [[86.63, 42.75], [99.91, 54.18], [100, 63.19], [85.4, 62.86], [86.35, 60.33], [86.72, 58.79], [86.82, 57.14], [86.82, 56.15], [86.53, 54.73], [86.25, 54.29], [85.69, 53.52], [84.84, 52.42]],
            'centers': [[95.01, 55.49]],
            'links': ["1#3#2", "1#6#1", "1#9#1", "1#10#1", "1#14#1", "1#15#1", "1#24#1", "1#21#1", "1#25#1", "1#2#1", "1#4#1", "1#5#1"],
            'level': 0
        },
        "17": {
            'area': [[0.19, 54.84], [15.91, 54.51], [15.73, 55.16], [15.07, 56.15], [14.5, 56.92], [14.22, 58.02], [13.94, 58.57], [13.84, 60], [14.12, 61.43], [14.69, 63.19], [14.97, 63.85], [14.31, 64.62], [14.03, 66.15], [13.94, 67.25], [13.94, 68.57], [14.78, 70.88], [15.91, 72.53], [17.04, 72.97], [18.36, 72.86], [18.93, 73.3], [19.68, 73.96], [20.72, 75.82], [22.13, 76.7], [0.19, 82.75]],
            'centers': [[7.63, 67.47]],
            'links': ["1#1#1", "1#11#1", "1#12#1", "1#22#1", "1#2#1"],
            'level': 0
        },
        "18": {
            'area': [[25.61, 47.47], [26.65, 47.47], [27.68, 48.02], [28.63, 48.79], [29.57, 49.12], [30.41, 49.12], [31.64, 49.34], [32.2, 49.67], [32.58, 50.22], [33.43, 50.33], [34.09, 50.11], [34.84, 49.78], [36.06, 49.67], [36.91, 49.89], [37.38, 50.55], [37.66, 51.54], [37.85, 52.64], [38.04, 53.63], [38.7, 54.29], [39.27, 55.05], [39.83, 55.38], [40.3, 55.82], [40.49, 56.59], [40.4, 57.69], [40.3, 58.57], [40.4, 59.45], [40.87, 60.22], [41.53, 60.77], [42.18, 61.32], [43.13, 61.76], [43.97, 62.09], [44.44, 63.3], [44.63, 64.62], [44.63, 65.6], [45.1, 66.7], [45.01, 67.25], [45.39, 68.02], [46.14, 68.79], [46.8, 69.12], [47.27, 69.67], [47.46, 70.44], [47.74, 71.98], [47.74, 72.97], [47.55, 74.29], [46.89, 74.84], [45.76, 74.95], [45.1, 75.27], [44.63, 75.71], [44.44, 76.37], [44.35, 77.14], [44.35, 77.8], [44.26, 79.23], [43.88, 80.11], [43.22, 80.55], [42.66, 80.88], [42, 81.1], [37.38, 83.96], [36.35, 84.51], [35.5, 84.51], [35.03, 84.4], [34.56, 83.96], [33.62, 83.08], [33.05, 81.76], [32.39, 80.77], [31.92, 79.56], [31.07, 78.9], [29.94, 78.13], [28.53, 77.58], [27.02, 77.36], [24.48, 77.03], [22.32, 76.59], [21.37, 76.15], [20.43, 74.84], [19.77, 73.63], [19.02, 73.19], [18.17, 72.86], [17.23, 72.64], [16.48, 72.53], [16.01, 72.2], [15.54, 71.43], [14.22, 68.68], [14.03, 67.14], [14.41, 65.82], [14.97, 63.63], [14.6, 62.42], [14.12, 61.65], [13.84, 59.89], [14.31, 58.02], [15.44, 56.15], [16.1, 55.16], [16.2, 52.97], [16.29, 51.87], [16.76, 50.66], [17.7, 49.67], [18.27, 48.9], [19.02, 47.58], [19.96, 46.81], [21.19, 46.48], [22.88, 46.81]],
            'centers': [[30.13, 64.84]],
            'links': ["1#1#1", "1#3#1", "1#6#1", "1#9#1", "1#10#1", "1#11#1", "1#12#1", "1#13#1", "1#14#1", "1#15#1", "1#17#1", "1#19#1", "1#22#1", "1#23#1", "1#24#1", "1#25#1", "1#2#1", "1#7#1", "1#4#1", "1#5#1"],
            'level': 0,
            'onewaylinks': true
        },
        "19": {
            'area': [[36.63, 49.89], [46.23, 47.14], [59.6, 49.12], [68.36, 54.18], [67.89, 55.16], [67.51, 55.93], [67.23, 56.37], [67.04, 56.92], [66.76, 57.58], [66.48, 58.13], [66.1, 58.46], [65.44, 58.57], [64.97, 58.57], [64.31, 58.13], [63.65, 57.58], [63.18, 56.92], [62.9, 56.37], [62.34, 55.93], [61.96, 55.82], [61.68, 56.04], [61.21, 56.26], [60.83, 56.81], [60.08, 57.69], [59.79, 58.24], [59.42, 59.34], [58.57, 60.77], [58.57, 62.2], [59.04, 63.52], [59.7, 64.4], [60.17, 64.95], [60.83, 65.71], [61.49, 66.48], [45.39, 67.91], [44.73, 66.81], [44.44, 65.49], [44.44, 64.51], [44.16, 62.97], [43.69, 61.87], [42.56, 61.54], [41.62, 60.99], [40.96, 60.44], [40.4, 59.34], [40.11, 57.91], [40.4, 56.81], [40.4, 55.93], [40.02, 55.38], [39.45, 55.05], [38.61, 54.18], [38.23, 53.96], [37.57, 51.76]],
            'centers': [[51.51, 57.58]],
            'links': ["1#6#1", "1#9#1", "1#10#1", "1#12#1", "1#13#1", "1#14#1", "1#15#1", "1#23#1", "1#24#1", "1#2#1", "1#7#1", "1#4#1", "1#5#1"],
            'level': 0
        },
        "20": {
            'area': [[72.88, 54.18], [73.26, 53.74], [73.35, 52.42], [73.63, 51.21], [74.11, 50.66], [74.76, 50.66], [75.52, 50.77], [76.27, 51.65], [76.74, 52.42], [77.87, 52.31], [78.72, 52.31], [79.38, 51.43], [80.23, 50.88], [81.26, 50.88], [82.3, 50.77], [83.15, 51.1], [83.9, 51.98], [84.65, 52.75], [85.59, 53.41], [85.97, 54.4], [86.44, 55.16], [86.72, 56.04], [86.91, 57.14], [86.91, 58.68], [86.53, 60.22], [86.16, 61.1], [85.69, 61.98], [84.93, 63.08], [84.37, 63.63], [83.71, 64.18], [83.15, 64.73], [82.67, 65.27], [82.02, 65.38], [81.83, 66.04], [81.54, 67.69], [81.17, 68.35], [80.41, 68.9], [79.38, 69.23], [78.72, 69.45], [77.31, 71.32], [76.46, 71.87], [74.29, 71.76], [73.73, 71.76], [73.16, 71.76], [70.9, 72.97], [69.49, 72.86], [68.64, 72.53], [67.33, 71.87], [66.67, 71.54], [65.63, 71.54], [64.5, 70.77], [63.56, 70], [62.52, 68.9], [61.86, 66.48], [61.21, 65.6], [59.42, 63.52], [58.85, 62.09], [58.95, 60.77], [59.42, 59.67], [60.73, 56.81], [61.58, 56.04], [62.34, 56.26], [62.99, 56.92], [63.56, 57.69], [64.41, 58.35], [65.35, 58.57], [66.29, 58.13], [67.04, 57.58], [67.14, 56.7], [67.61, 56.15], [68.36, 54.62], [69.3, 53.96], [70.81, 53.74], [71.37, 54.07], [71.94, 54.4], [72.69, 54.4]],
            'centers': [[73.82, 61.65]],
            'links': ["1#6#1", "1#9#1", "1#10#1", "1#12#1", "1#13#1", "1#14#1", "1#15#1", "1#16#1", "1#19#1", "1#23#1", "1#24#1", "1#21#1", "1#25#1", "1#2#1", "1#4#1", "1#5#1"],
            'level': 0,
            'onewaylinks': true
        },
        "21": {
            'area': [[78.91, 69.78], [79.28, 69.23], [80.51, 68.9], [81.45, 68.24], [81.73, 67.47], [82.11, 65.49], [82.86, 65.16], [84.09, 64.18], [85.12, 63.19], [100, 63.3], [100, 89.12]],
            'centers': [[92.09, 71.32]],
            'links': ["1#10#1", "1#16#1", "1#22#1", "1#23#1", "1#24#1", "1#25#1", "1#4#1", "1#5#1"],
            'level': 0
        },
        "22": {
            'area': [[0.09, 82.86], [22.13, 76.7], [24.76, 77.25], [26.65, 77.69], [28.44, 77.8], [30.6, 78.68], [31.83, 79.78], [32.2, 80.66], [23.16, 99.89], [0.09, 99.78]],
            'centers': [[13.09, 93.96]],
            'links': ["1#1#1", "1#11#1", "1#17#1", "1#23#1", "1#24#1", "1#21#1", "1#25#1"],
            'level': 0
        },
        "23": {
            'area': [[23.45, 99.89], [32.2, 80.55], [33.05, 82.42], [33.8, 83.63], [34.65, 84.73], [35.97, 85.05], [37.19, 84.51], [38.79, 83.63], [40.4, 82.53], [41.71, 81.65], [43.03, 81.1], [43.79, 80.33], [44.26, 79.34], [44.44, 78.35], [44.54, 76.37], [45.2, 75.38], [46.33, 75.05], [46.99, 74.84], [47.74, 74.29], [47.74, 72.42], [47.55, 70.22], [47.08, 69.34], [45.67, 68.24], [51.69, 67.58], [62.52, 99.78]],
            'centers': [[47.93, 89.01]],
            'links': ["1#9#1", "1#14#1", "1#19#1", "1#22#1", "1#24#1", "1#21#1", "1#25#1"],
            'level': 0
        },
        "24": {
            'area': [[52.07, 67.47], [61.58, 66.81], [62.05, 67.91], [62.43, 68.9], [63.09, 70.22], [64.41, 70.77], [65.82, 71.65], [66.95, 71.98], [67.89, 72.09], [68.55, 72.64], [69.49, 72.97], [70.62, 72.97], [71.28, 72.97], [72.5, 72.64], [73.63, 72.2], [74.01, 71.87], [75.05, 72.09], [76.55, 71.87], [77.5, 71.21], [78.63, 70], [85.88, 76.37], [74.11, 99.89], [62.81, 99.78]],
            'centers': [[69.49, 83.96]],
            'links': ["1#6#1", "1#13#1", "1#16#1", "1#19#1", "1#22#1", "1#23#1", "1#21#1", "1#25#1", "1#2#1"],
            'level': 0
        },
        "25": {
            'area': [[86.06, 76.59], [100, 89.56], [100, 99.78], [74.29, 99.78]],
            'centers': [[88.23, 91.65]],
            'links': ["1#10#1", "1#16#1", "1#22#1", "1#23#1", "1#24#1", "1#21#1", "1#5#1"],
            'level': 0
        }
    }
}