export type TpokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Tresult[];
};

export interface Tresult {
  name: string;
  url: string;
  id?: number;
  image?: string;
  types?: string[];
}

export type TpokemonType = {
  slot: number;
  type: Type;
};

type Type = {
  name: string;
  url: string;
};

export interface State {
  pokemon: Pokemon;
  infoMenu: SelectedMenu;
  mainMenu: SelectedMainMenu;
}

export interface SelectedMainMenu {
  selectedMainMenu: string;
}
export interface SelectedMenu {
  selectedMenu: string;
}

export interface Pokemon {
  selectedPokemon: Tresult;
}
