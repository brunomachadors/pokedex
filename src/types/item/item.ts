export interface IItems {
  originalList: IItem[];
  filteredList: IItem[];
}

export interface IItem {
  active: boolean;
  attributes?: Attribute[];
  baby_trigger_for?: unknown;
  category?: Category;
  cost?: number;
  effect_entries?: EffectEntry[];
  flavor_text_entries?: FlavorTextEntry[];
  fling_effect?: unknown;
  fling_power?: unknown;
  game_indices?: Index[];
  held_by_pokemon?: unknown[];
  id?: number;
  machines?: unknown[];
  name: string;
  names?: Name[];
  sprites?: Sprites;
}

export interface Attribute {
  name: string;
  url: string;
}

export interface Category {
  name: string;
  url: string;
}

export interface EffectEntry {
  effect: string;
  language: Language;
  short_effect: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  language: Language2;
  text: string;
  version_group: VersionGroup;
}

export interface Language2 {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface Index {
  game_index: number;
  generation: Generation;
}

export interface Generation {
  name: string;
  url: string;
}

export interface Name {
  language: Language3;
  name: string;
}

export interface Language3 {
  name: string;
  url: string;
}

export interface Sprites {
  default: string;
}
