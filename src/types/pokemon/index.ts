export type TpokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Tresult[];
};

export interface Tresult {
  name: string;
  url: string;
  gameIndex?: number;
  types?: string;
}

export type TpokemonType = {
  slot: number;
  type: Type;
};

type Type = {
  name: string;
  url: string;
};
