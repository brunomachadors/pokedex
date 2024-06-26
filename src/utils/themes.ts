export default {
  colors: {
    background: {
      grass: 'linear-gradient(to top, #67F70A, #204000, black)',
      fire: 'linear-gradient(to top,  #D6CA23, #903F3F, black)',
      water: 'linear-gradient(to top, #70A7F0, #557DEA, black)',
      poison: 'linear-gradient(to top, #A819D7, #611380, black)',
      normal: 'linear-gradient(to top, #CCC9AA, #ACA974, black)',
      bug: 'linear-gradient(to top, #D9FE9E, #BDDD6E, #91BA2E)',
      flying: 'linear-gradient(to top, #7AA9E8, black)',
      electric: 'linear-gradient(to top, #D6CA23, black)',
      ground: 'linear-gradient(to top, #B76D29, black)',
      fairy: 'linear-gradient(to top, #FFA0C2, #F87EA7)',
      fighting: 'linear-gradient(to top, #E81319, #800B11)',
      psychic: 'linear-gradient(to top, #C82D5B, black)',
      rock: 'linear-gradient(to top, #6C644F, black)',
      ghost: 'linear-gradient(to top, #BD98CB, #816A9F, black)',
      ice: 'linear-gradient(to top, #66D1E5, #176F73, black)',
      dragon: 'linear-gradient(to top, #8A55FD, #7241E4, black)',
      steel: 'linear-gradient(to top, #BBC5C4, #A0A0A0, #454545)',
      dark: 'linear-gradient(to top, #5F4632, black)',
      stellar:
        'linear-gradient(to top, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF, black)', // Arco-íris
    },
    type: {
      grass: 'linear-gradient(to right, #3E9709, #4BB36F)',
      fire: 'linear-gradient(to right, #F67F0B, #F8B80E)',
      water: 'linear-gradient(to right, #557DEA, #70A7F0)',
      poison: 'linear-gradient(to right, #7A6696, #C89EC7)',
      normal: 'linear-gradient(to right, #ACA974, #C5C5C5)',
      bug: 'linear-gradient(to right, #D9FE9E, #BDDD6E, #91BA2E)',
      flying: 'linear-gradient(to right, #7AA9E8, #B5D5F1)',
      electric: 'linear-gradient(to right, #D6CA23, #FFFDB8)',
      ground: 'linear-gradient(to right, #B76D29, #E78E4A)',
      fairy: 'linear-gradient(to right, #F87EA7, #FFA0C2)',
      fighting: 'linear-gradient(to right, #A85451, #D99C90)',
      psychic: 'linear-gradient(to right, #C82D5B, #F67399)',
      rock: 'linear-gradient(to right, #6C644F, #C2B993)',
      ghost: 'linear-gradient(to right, #472B53, #B683B3)',
      ice: 'linear-gradient(to right, #176F73, #9CE8F2)',
      dragon: 'linear-gradient(to right, #7241E4, #A99EC3)',
      steel: 'linear-gradient(to right, #A0A0A0, #454545)',
      dark: 'linear-gradient(to right, #333333, #000000)',
      stellar:
        'linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF)', // Arco-íris
    },
    buttonColor: {
      grass: '#2E6030',
      fire: '#8C3636',
      water: '#3B548A',
      poison: '#611380',
      normal: '#827F5A',
      bug: '#91BA2E',
      flying: '#759FCB',
      electric: '#E3D38E',
      ground: '#B9692B',
      fairy: '#CC38A3',
      fighting: '#E81319',
      psychic: '#C8436A',
      rock: '#8D8666',
      ghost: '#695D7E',
      ice: '#579AA9',
      dragon: '#70578B',
      steel: '#808080',
      dark: '#333333',
      stellar: '#8B00FF',
    },
    regionColorMap: {
      kanto: 'linear-gradient(to right, #FF5733, #FF4500)', // Gradient from coral to dark orange
      johto: 'linear-gradient(to right, #FFD700, #C0C0C0)', // Gradient from gold to silver
      hoenn: 'linear-gradient(to right, #C0C0C0, #87CEEB)', // Gradient from silver to sky blue
      sinnoh: 'linear-gradient(to right, #87CEEB, #FF4500)', // Gradient from sky blue to dark orange
      unova: 'linear-gradient(to right, #FF4500, #008000)', // Gradient from dark orange to green
      kalos: 'linear-gradient(to right, #008000, #CD5C5C)', // Gradient from green to indian red
      alola: 'linear-gradient(to right, #CD5C5C, #B0E0E6)', // Gradient from indian red to powder blue
      galar: 'linear-gradient(to right, #B0E0E6, #FFA500)', // Gradient from powder blue to orange
      hisui: 'linear-gradient(to right, #FFA500, #9932CC)', // Gradient from orange to dark orchid
      paldea: 'linear-gradient(to right, #9932CC, #8A2BE2)', // Gradient from dark orchid to blue violet
    },

    regionColorMapBackground: {
      kanto: 'linear-gradient(to top, #FF5733, #FF4500, #000000)', // Gradient from coral to dark orange to black
      johto: 'linear-gradient(to top, #FFD700, #C0C0C0, #000000)', // Gradient from gold to silver to black
      hoenn: 'linear-gradient(to top, #C0C0C0, #87CEEB, #000000)', // Gradient from silver to sky blue to black
      sinnoh: 'linear-gradient(to top, #87CEEB, #FF4500, #000000)', // Gradient from sky blue to dark orange to black
      unova: 'linear-gradient(to top, #FF4500, #008000, #000000)', // Gradient from dark orange to green to black
      kalos: 'linear-gradient(to top, #008000, #CD5C5C, #000000)', // Gradient from green to indian red to black
      alola: 'linear-gradient(to top, #CD5C5C, #B0E0E6, #000000)', // Gradient from indian red to powder blue to black
      galar: 'linear-gradient(to top, #B0E0E6, #FFA500, #000000)', // Gradient from powder blue to orange to black
      hisui: 'linear-gradient(to top, #FFA500, #9932CC, #000000)', // Gradient from orange to dark orchid to black
      paldea: 'linear-gradient(to top, #9932CC, #8A2BE2, #000000)', // Gradient from dark orchid to blue violet to black
    },

    itemTypeColorMap: {
      'stat-boosts': '#FFD700',
      'effort-drop': '#FFA500',
      medicine: '#D3D3D3',
      other: '#B0C4DE',
      'in-a-pinch': '#FF6347',
      'picky-healing': '#7CFC00',
      'type-protection': '#D2B48C',
      'baking-only': '#D3D3D3',
      collectibles: '#FFDAB9',
      evolution: '#C71585',
      spelunking: '#98FB98',
      'held-items': '#FFB6C1',
      choice: '#9370DB',
      'effort-training': '#87CEEB',
      'bad-held-items': '#CD853F',
      training: '#AFEEEE',
      plates: '#FF6347',
      'species-specific': '#FFA07A',
      'type-enhancement': '#8B4513',
      'event-items': '#FFD700',
      gameplay: '#DCDCDC',
      'plot-advancement': '#8A2BE2',
      unused: '#DCDCDC',
      loot: '#B8860B',
      'all-mail': '#FFB6C1',
      vitamins: '#ADFF2F',
      healing: '#00FF7F',
      'pp-recovery': '#6495ED',
      revival: '#FF6347',
      'status-cures': '#00FA9A',
      mulch: '#DAA520',
      'special-balls': '#8A2BE2',
      'standard-balls': '#00BFFF',
      'dex-completion': '#FFD700',
      scarves: '#FF69B4',
      'all-machines': '#4682B4',
      flutes: '#87CEEB',
      'apricorn-balls': '#00FF00',
      'apricorn-box': '#FFD700',
      'data-cards': '#8A2BE2',
      jewels: '#FF69B4',
      'miracle-shooter': '#7B68EE',
      'mega-stones': '#FF6347',
      memories: '#87CEFA',
      'z-crystals': '#D8BFD8',
      'species-candies': '#FF6347',
      'catching-bonus': '#20B2AA',
      'dynamax-crystals': '#FF8C00',
    },

    itemGradientMap: {
      'stat-boosts': 'linear-gradient(to top, #FF9966, #FF4500, #000000)', // Light orange to dark orange to black
      'effort-drop': 'linear-gradient(to top, #FFD700, #DAA520, #000000)', // Gold to dark goldenrod to black
      medicine: 'linear-gradient(to top, #CCCCCC, #A9A9A9, #000000)', // Light gray to dark gray to black
      other: 'linear-gradient(to top, #A9D5EB, #4682B4, #000000)', // Light blue to dark steel blue to black
      'in-a-pinch': 'linear-gradient(to top, #FF6347, #8B0000, #000000)', // Tomato to dark red to black
      'picky-healing': 'linear-gradient(to top, #7CFC00, #556B2F, #000000)', // Lawn green to dark olive green to black
      'type-protection': 'linear-gradient(to top, #D2B48C, #8B4513, #000000)', // Tan to saddle brown to black
      'baking-only': 'linear-gradient(to top, #B0C4DE, #696969, #000000)', // Light steel blue to dim gray to black
      collectibles: 'linear-gradient(to top, #FFDAB9, #CD853F, #000000)', // Peachpuff to peru to black
      evolution: 'linear-gradient(to top, #C71585, #8B008B, #000000)', // Medium violet red to dark magenta to black
      spelunking: 'linear-gradient(to top, #98FB98, #008000, #000000)', // Pale green to green to black
      'held-items': 'linear-gradient(to top, #FFB6C1, #FF69B4, #000000)', // Light pink to medium violet red to black
      choice: 'linear-gradient(to top, #9370DB, #4B0082, #000000)', // Medium purple to indigo to black
      'effort-training': 'linear-gradient(to top, #87CEEB, #1E90FF, #000000)', // Sky blue to dodger blue to black
      'bad-held-items': 'linear-gradient(to top, #CD853F, #8B4513, #000000)', // Peru to saddle brown to black
      training: 'linear-gradient(to top, #AFEEEE, #4682B4, #000000)', // Pale turquoise to steel blue to black
      plates: 'linear-gradient(to top, #FF6347, #8B4513, #000000)', // Tomato to saddle brown to black
      'species-specific': 'linear-gradient(to top, #FFA07A, #CD5C5C, #000000)', // Light salmon to indian red to black
      'type-enhancement': 'linear-gradient(to top, #8B4513, #4B0082, #000000)', // Saddle brown to indigo to black
      'event-items': 'linear-gradient(to top, #FFD700, #FF4500, #000000)', // Gold to dark orange to black
      gameplay: 'linear-gradient(to top, #D3D3D3, #A9A9A9, #000000)', // Light gray to dark gray to black
      'plot-advancement': 'linear-gradient(to top, #8A2BE2, #4B0082, #000000)', // Blue violet to indigo to black
      unused: 'linear-gradient(to top, #808080, #696969, #000000)', // Gray to dim gray to black
      loot: 'linear-gradient(to top, #B8860B, #8B4513, #000000)', // Dark goldenrod to saddle brown to black
      'all-mail': 'linear-gradient(to top, #FFB6C1, #FF69B4, #000000)', // Light pink to medium violet red to black
      vitamins: 'linear-gradient(to top, #ADFF2F, #556B2F, #000000)', // Green yellow to dark olive green to black
      healing: 'linear-gradient(to top, #00FF7F, #008000, #000000)', // Spring green to green to black
      'pp-recovery': 'linear-gradient(to top, #6495ED, #000080, #000000)', // Cornflower blue to navy to black
      revival: 'linear-gradient(to top, #FF6347, #8B4513, #000000)', // Tomato to saddle brown to black
      'status-cures': 'linear-gradient(to top, #00FA9A, #008000, #000000)', // Medium spring green to green to black
      mulch: 'linear-gradient(to top, #DAA520, #8B4513, #000000)', // Goldenrod to saddle brown to black
      'special-balls': 'linear-gradient(to top, #8A2BE2, #4B0082, #000000)', // Blue violet to indigo to black
      'standard-balls': 'linear-gradient(to top, #00BFFF, #000080, #000000)', // Deep sky blue to navy to black
      'dex-completion': 'linear-gradient(to top, #FFD700, #FF4500, #000000)', // Gold to dark orange to black
      scarves: 'linear-gradient(to top, #FF69B4, #8B4513, #000000)', // Hot pink to saddle brown to black
      'all-machines': 'linear-gradient(to top, #4682B4, #000080, #000000)', // Steel blue to navy to black
      flutes: 'linear-gradient(to top, #87CEEB, #1E90FF, #000000)', // Sky blue to dodger blue to black
      'apricorn-balls': 'linear-gradient(to top, #00FF00, #008000, #000000)', // Lime to green to black
      'apricorn-box': 'linear-gradient(to top, #FFD700, #FF4500, #000000)', // Gold to dark orange to black
      'data-cards': 'linear-gradient(to top, #8A2BE2, #4B0082, #000000)', // Blue violet to indigo to black
      jewels: 'linear-gradient(to top, #FF69B4, #8B4513, #000000)', // Hot pink to saddle brown to black
      'miracle-shooter': 'linear-gradient(to top, #7B68EE, #4B0082, #000000)', // Medium slate blue to indigo to black
      'mega-stones': 'linear-gradient(to top, #FF6347, #8B4513, #000000)', // Tomato to saddle brown
    },
  },
};
