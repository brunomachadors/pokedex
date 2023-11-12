export type TpokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Tresult[];
};

export interface Tresult {
  name: string;
  url: string;
}
