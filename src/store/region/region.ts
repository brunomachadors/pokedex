import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRegion, IRegions } from '../../types/location';

const initialState: { lists: IRegions } = {
  lists: {
    originalList: [],
    filteredList: [],
    selected: {
      url: 'https://pokeapi.co/api/v2/region/1/',
      id: 1,
      locations: [
        {
          name: 'celadon-city',
          url: 'https://pokeapi.co/api/v2/location/67/',
        },
        {
          name: 'cerulean-city',
          url: 'https://pokeapi.co/api/v2/location/68/',
        },
        {
          name: 'cinnabar-island',
          url: 'https://pokeapi.co/api/v2/location/71/',
        },
        {
          name: 'digletts-cave',
          url: 'https://pokeapi.co/api/v2/location/73/',
        },
        {
          name: 'fuchsia-city',
          url: 'https://pokeapi.co/api/v2/location/76/',
        },
        {
          name: 'mt-moon',
          url: 'https://pokeapi.co/api/v2/location/80/',
        },
        {
          name: 'pallet-town',
          url: 'https://pokeapi.co/api/v2/location/86/',
        },
        {
          name: 'rock-tunnel',
          url: 'https://pokeapi.co/api/v2/location/87/',
        },
        {
          name: 'kanto-route-1',
          url: 'https://pokeapi.co/api/v2/location/88/',
        },
        {
          name: 'kanto-route-10',
          url: 'https://pokeapi.co/api/v2/location/89/',
        },
        {
          name: 'kanto-route-11',
          url: 'https://pokeapi.co/api/v2/location/90/',
        },
        {
          name: 'kanto-route-12',
          url: 'https://pokeapi.co/api/v2/location/91/',
        },
        {
          name: 'kanto-route-13',
          url: 'https://pokeapi.co/api/v2/location/92/',
        },
        {
          name: 'kanto-route-14',
          url: 'https://pokeapi.co/api/v2/location/93/',
        },
        {
          name: 'kanto-route-15',
          url: 'https://pokeapi.co/api/v2/location/94/',
        },
        {
          name: 'kanto-route-16',
          url: 'https://pokeapi.co/api/v2/location/95/',
        },
        {
          name: 'kanto-route-17',
          url: 'https://pokeapi.co/api/v2/location/96/',
        },
        {
          name: 'kanto-route-18',
          url: 'https://pokeapi.co/api/v2/location/97/',
        },
        {
          name: 'kanto-sea-route-19',
          url: 'https://pokeapi.co/api/v2/location/98/',
        },
        {
          name: 'kanto-route-2',
          url: 'https://pokeapi.co/api/v2/location/99/',
        },
        {
          name: 'kanto-sea-route-20',
          url: 'https://pokeapi.co/api/v2/location/100/',
        },
        {
          name: 'kanto-sea-route-21',
          url: 'https://pokeapi.co/api/v2/location/101/',
        },
        {
          name: 'kanto-route-22',
          url: 'https://pokeapi.co/api/v2/location/102/',
        },
        {
          name: 'kanto-route-24',
          url: 'https://pokeapi.co/api/v2/location/103/',
        },
        {
          name: 'kanto-route-25',
          url: 'https://pokeapi.co/api/v2/location/104/',
        },
        {
          name: 'kanto-route-26',
          url: 'https://pokeapi.co/api/v2/location/105/',
        },
        {
          name: 'kanto-route-27',
          url: 'https://pokeapi.co/api/v2/location/106/',
        },
        {
          name: 'kanto-route-28',
          url: 'https://pokeapi.co/api/v2/location/107/',
        },
        {
          name: 'kanto-route-3',
          url: 'https://pokeapi.co/api/v2/location/109/',
        },
        {
          name: 'kanto-route-4',
          url: 'https://pokeapi.co/api/v2/location/120/',
        },
        {
          name: 'kanto-route-5',
          url: 'https://pokeapi.co/api/v2/location/130/',
        },
        {
          name: 'kanto-route-6',
          url: 'https://pokeapi.co/api/v2/location/131/',
        },
        {
          name: 'kanto-route-7',
          url: 'https://pokeapi.co/api/v2/location/132/',
        },
        {
          name: 'kanto-route-8',
          url: 'https://pokeapi.co/api/v2/location/133/',
        },
        {
          name: 'kanto-route-9',
          url: 'https://pokeapi.co/api/v2/location/134/',
        },
        {
          name: 'seafoam-islands',
          url: 'https://pokeapi.co/api/v2/location/136/',
        },
        {
          name: 'cerulean-cave',
          url: 'https://pokeapi.co/api/v2/location/147/',
        },
        {
          name: 'vermilion-city',
          url: 'https://pokeapi.co/api/v2/location/151/',
        },
        {
          name: 'kanto-victory-road-1',
          url: 'https://pokeapi.co/api/v2/location/152/',
        },
        {
          name: 'viridian-city',
          url: 'https://pokeapi.co/api/v2/location/154/',
        },
        {
          name: 'viridian-forest',
          url: 'https://pokeapi.co/api/v2/location/155/',
        },
        {
          name: 'kanto-route-23',
          url: 'https://pokeapi.co/api/v2/location/157/',
        },
        {
          name: 'power-plant',
          url: 'https://pokeapi.co/api/v2/location/158/',
        },
        {
          name: 'kanto-victory-road-2',
          url: 'https://pokeapi.co/api/v2/location/159/',
        },
        {
          name: 'pokemon-tower',
          url: 'https://pokeapi.co/api/v2/location/160/',
        },
        {
          name: 'pokemon-mansion',
          url: 'https://pokeapi.co/api/v2/location/161/',
        },
        {
          name: 'kanto-safari-zone',
          url: 'https://pokeapi.co/api/v2/location/162/',
        },
        {
          name: 'pewter-city',
          url: 'https://pokeapi.co/api/v2/location/231/',
        },
        {
          name: 'lavender-town',
          url: 'https://pokeapi.co/api/v2/location/232/',
        },
        {
          name: 'indigo-plateau',
          url: 'https://pokeapi.co/api/v2/location/233/',
        },
        {
          name: 'saffron-city',
          url: 'https://pokeapi.co/api/v2/location/234/',
        },
        {
          name: 'monean-chamber',
          url: 'https://pokeapi.co/api/v2/location/491/',
        },
        {
          name: 'liptoo-chamber',
          url: 'https://pokeapi.co/api/v2/location/492/',
        },
        {
          name: 'weepth-chamber',
          url: 'https://pokeapi.co/api/v2/location/493/',
        },
        {
          name: 'dilford-chamber',
          url: 'https://pokeapi.co/api/v2/location/494/',
        },
        {
          name: 'scufib-chamber',
          url: 'https://pokeapi.co/api/v2/location/495/',
        },
        {
          name: 'rixy-chamber',
          url: 'https://pokeapi.co/api/v2/location/496/',
        },
        {
          name: 'viapos-chamber',
          url: 'https://pokeapi.co/api/v2/location/497/',
        },
        {
          name: 'ss-anne',
          url: 'https://pokeapi.co/api/v2/location/498/',
        },
        {
          name: 'mt-ember',
          url: 'https://pokeapi.co/api/v2/location/500/',
        },
        {
          name: 'berry-forest',
          url: 'https://pokeapi.co/api/v2/location/501/',
        },
        {
          name: 'icefall-cave',
          url: 'https://pokeapi.co/api/v2/location/502/',
        },
        {
          name: 'pattern-bush',
          url: 'https://pokeapi.co/api/v2/location/503/',
        },
        {
          name: 'lost-cave',
          url: 'https://pokeapi.co/api/v2/location/504/',
        },
        {
          name: 'kindle-road',
          url: 'https://pokeapi.co/api/v2/location/505/',
        },
        {
          name: 'treasure-beach',
          url: 'https://pokeapi.co/api/v2/location/506/',
        },
        {
          name: 'cape-brink',
          url: 'https://pokeapi.co/api/v2/location/507/',
        },
        {
          name: 'bond-bridge',
          url: 'https://pokeapi.co/api/v2/location/508/',
        },
        {
          name: 'three-isle-port',
          url: 'https://pokeapi.co/api/v2/location/509/',
        },
        {
          name: 'resort-gorgeous',
          url: 'https://pokeapi.co/api/v2/location/510/',
        },
        {
          name: 'water-labyrinth',
          url: 'https://pokeapi.co/api/v2/location/511/',
        },
        {
          name: 'five-isle-meadow',
          url: 'https://pokeapi.co/api/v2/location/512/',
        },
        {
          name: 'memorial-pillar',
          url: 'https://pokeapi.co/api/v2/location/513/',
        },
        {
          name: 'outcast-island',
          url: 'https://pokeapi.co/api/v2/location/514/',
        },
        {
          name: 'green-path',
          url: 'https://pokeapi.co/api/v2/location/515/',
        },
        {
          name: 'water-path',
          url: 'https://pokeapi.co/api/v2/location/516/',
        },
        {
          name: 'ruin-valley',
          url: 'https://pokeapi.co/api/v2/location/517/',
        },
        {
          name: 'trainer-tower',
          url: 'https://pokeapi.co/api/v2/location/518/',
        },
        {
          name: 'canyon-entrance',
          url: 'https://pokeapi.co/api/v2/location/519/',
        },
        {
          name: 'sevault-canyon',
          url: 'https://pokeapi.co/api/v2/location/520/',
        },
        {
          name: 'tanoby-ruins',
          url: 'https://pokeapi.co/api/v2/location/521/',
        },
        {
          name: 'one-island',
          url: 'https://pokeapi.co/api/v2/location/526/',
        },
        {
          name: 'four-island',
          url: 'https://pokeapi.co/api/v2/location/527/',
        },
        {
          name: 'five-island',
          url: 'https://pokeapi.co/api/v2/location/528/',
        },
        {
          name: 'kanto-altering-cave',
          url: 'https://pokeapi.co/api/v2/location/529/',
        },
        {
          name: 'roaming-kanto',
          url: 'https://pokeapi.co/api/v2/location/799/',
        },
        {
          name: 'two-island',
          url: 'https://pokeapi.co/api/v2/location/805/',
        },
        {
          name: 'three-island',
          url: 'https://pokeapi.co/api/v2/location/806/',
        },
        {
          name: 'three-isle-path',
          url: 'https://pokeapi.co/api/v2/location/807/',
        },
        {
          name: 'six-island',
          url: 'https://pokeapi.co/api/v2/location/808/',
        },
        {
          name: 'seven-island',
          url: 'https://pokeapi.co/api/v2/location/809/',
        },
        {
          name: 'birth-island',
          url: 'https://pokeapi.co/api/v2/location/810/',
        },
        {
          name: 'navel-rock',
          url: 'https://pokeapi.co/api/v2/location/811/',
        },
      ],
      main_generation: {
        name: 'generation-i',
        url: 'https://pokeapi.co/api/v2/generation/1/',
      },
      name: 'kanto',
      names: [
        {
          language: {
            name: 'ja-Hrkt',
            url: 'https://pokeapi.co/api/v2/language/1/',
          },
          name: 'カントー',
        },
        {
          language: {
            name: 'ko',
            url: 'https://pokeapi.co/api/v2/language/3/',
          },
          name: '관동',
        },
        {
          language: {
            name: 'zh-Hant',
            url: 'https://pokeapi.co/api/v2/language/4/',
          },
          name: '關都',
        },
        {
          language: {
            name: 'fr',
            url: 'https://pokeapi.co/api/v2/language/5/',
          },
          name: 'Kanto',
        },
        {
          language: {
            name: 'de',
            url: 'https://pokeapi.co/api/v2/language/6/',
          },
          name: 'Kanto',
        },
        {
          language: {
            name: 'it',
            url: 'https://pokeapi.co/api/v2/language/8/',
          },
          name: 'Kanto',
        },
        {
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
          name: 'Kanto',
        },
        {
          language: {
            name: 'zh-Hans',
            url: 'https://pokeapi.co/api/v2/language/12/',
          },
          name: '关都',
        },
      ],
      pokedexes: [
        {
          name: 'kanto',
          url: 'https://pokeapi.co/api/v2/pokedex/2/',
        },
        {
          name: 'letsgo-kanto',
          url: 'https://pokeapi.co/api/v2/pokedex/26/',
        },
      ],
      version_groups: [
        {
          name: 'red-blue',
          url: 'https://pokeapi.co/api/v2/version-group/1/',
        },
        {
          name: 'yellow',
          url: 'https://pokeapi.co/api/v2/version-group/2/',
        },
        {
          name: 'gold-silver',
          url: 'https://pokeapi.co/api/v2/version-group/3/',
        },
        {
          name: 'crystal',
          url: 'https://pokeapi.co/api/v2/version-group/4/',
        },
        {
          name: 'firered-leafgreen',
          url: 'https://pokeapi.co/api/v2/version-group/7/',
        },
        {
          name: 'heartgold-soulsilver',
          url: 'https://pokeapi.co/api/v2/version-group/10/',
        },
        {
          name: 'lets-go-pikachu-lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version-group/19/',
        },
      ],
    },
  },
};

export const regionListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    originalRegionList: (state, action: PayloadAction<IRegion[]>) => {
      state.lists.originalList = action.payload;
    },

    filteredRegionList: (state, action: PayloadAction<IRegion[]>) => {
      state.lists.filteredList = action.payload;
    },

    selectRegion: (state, action: PayloadAction<IRegion>) => {
      state.lists.selected = action.payload;
    },
  },
});

export const { originalRegionList, filteredRegionList, selectRegion } =
  regionListSlice.actions;

const regionListReducer = regionListSlice.reducer;
export default regionListReducer;
