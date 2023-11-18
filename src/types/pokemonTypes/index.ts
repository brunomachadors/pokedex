export interface IPokemonTypes {
  originalList: IPokemonType[];
  filteredList: IPokemonType[];
}

export interface IPokemonType {
  typeInfo: TypeInfo;
}

export interface TypeInfo {
  damage_relations?: DamageRelations;
  game_indices?: Index[];
  generation?: Generation2;
  id?: number;
  move_damage_class?: MoveDamageClass;
  moves?: Mfe[];
  name: string;
  names?: Name[];
  past_damage_relations?: PastDamageRelation[];
  pokemon?: Pokemon[];
}

export interface DamageRelations {
  double_damage_from: DoubleDamageFrom[];
  double_damage_to: DoubleDamageTo[];
  half_damage_from: HalfDamageFrom[];
  half_damage_to: HalfDamageTo[];
  no_damage_from: NoDamageFrom[];
  no_damage_to: NoDamageTo[];
}

export interface DoubleDamageFrom {
  name: string;
  url: string;
}

export interface DoubleDamageTo {
  name: string;
  url: string;
}

export interface HalfDamageFrom {
  name: string;
  url: string;
}

export interface HalfDamageTo {
  name: string;
  url: string;
}

export interface NoDamageFrom {
  name: string;
  url: string;
}

export interface NoDamageTo {
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

export interface Generation2 {
  name: string;
  url: string;
}

export interface MoveDamageClass {
  name: string;
  url: string;
}

export interface Mfe {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface PastDamageRelation {
  damage_relations: DamageRelations2;
  generation: Generation3;
}

export interface DamageRelations2 {
  double_damage_from: DoubleDamageFrom2[];
  double_damage_to: DoubleDamageTo2[];
  half_damage_from: HalfDamageFrom2[];
  half_damage_to: HalfDamageTo2[];
  no_damage_from: NoDamageFrom2[];
  no_damage_to: NoDamageTo2[];
}

export interface DoubleDamageFrom2 {
  name: string;
  url: string;
}

export interface DoubleDamageTo2 {
  name: string;
  url: string;
}

export interface HalfDamageFrom2 {
  name: string;
  url: string;
}

export interface HalfDamageTo2 {
  name: string;
  url: string;
}

export interface NoDamageFrom2 {
  name: string;
  url: string;
}

export interface NoDamageTo2 {
  name: string;
  url: string;
}

export interface Generation3 {
  name: string;
  url: string;
}

export interface Pokemon {
  pokemon: Pokemon2;
  slot: number;
}

export interface Pokemon2 {
  name: string;
  url: string;
}
