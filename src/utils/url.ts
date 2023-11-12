export const BASE_URL = 'https://pokeapi.co/api/v2';

export const PATH = {
  berries: {
    berry: '/berry',
    firmness: 'berry-firmness',
    flavour: '/berry-flavor',
  },
  contests: {
    type: '/contest-type',
    effect: '/contest-effect',
    superEffect: '/super-contest-effect/',
  },
  encounters: {
    method: '/encounter-method',
    conditions: '/encounter-condition',
    conditionValue: '/encounter-condition-value',
  },
  evolutions: {
    chain: '/evolution-chain',
    triggers: '/evolution-trigger',
  },
  games: {
    generation: '/generation',
    pokedexes: '/pokedex',
    version: '/version',
    versionGroups: '/version-group',
    flingEffect: '/item-fling-effect',
    itemPockets: '/item-pocket',
  },
  items: {
    item: '/item',
    atribute: '/item-attribute',
    categories: '/item-category',
  },
  locations: {
    location: '/location',
    area: '/location-area',
    palParkArea: '/pal-park-area',
    region: '/region',
  },
  machines: {
    machine: '/machine',
  },
  moves: {
    move: '/move',
    ailment: '/move-ailment',
    battleStyle: '/move-battle-style',
    category: '/move-category',
    damageClasses: '/move-damage-class',
    learnMethods: '/move-learn-method',
    moveTargets: '/move-target',
  },
  pokemon: {
    ability: '/ability',
    characteristic: '/characteristic',
    eggGroup: '/egg-group',
    gender: '/gender',
    growthRates: '/growth-rate',
    nature: '/nature',
    pokeathlonStats: '/pokeathlon-stat',
    pokemon: '/pokemon',
    locationArea: (input: string) => `/pokemon/${input}/encounters`,
    color: '/pokemon-color/',
    form: '/pokemon-form',
    habitat: '/pokemon-habitat',
    shape: '/pokemon-shape',
    species: '/pokemon-species',
    stats: '/stat',
    types: '/types',
  },
};
