import { IItem, IItems } from '../item/item';
import { IPokemonTypes } from '../pokemonTypes';

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
  pokemonList: {
    lists: PokemonList;
  };
  typeList: {
    lists: IPokemonTypes;
  };
  itemList: {
    lists: IItems;
  };
  type: SelectedType;
  item: SelectedItem;
}

export interface SelectedItem {
  selectedItem: IItem;
}

export interface SelectedType {
  selectedType: string;
}

export interface PokemonList {
  originalList: Tresult[];
  filteredList: Tresult[];
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
