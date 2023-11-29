export enum PokemonGeneration {
  First = 1,
  Second = 152,
  Third = 252,
  Fourth = 387,
  Fifth = 494,
  Sixth = 650,
  Seventh = 722,
  Eighth = 810,
}

export function getRangeByGeneration(generation: PokemonGeneration): {
  start: number;
  end: number;
} {
  let start: number;
  let end: number;

  switch (generation) {
    case PokemonGeneration.First:
      start = 1;
      end = 151;
      break;
    case PokemonGeneration.Second:
      start = 152;
      end = 251;
      break;
    case PokemonGeneration.Third:
      start = 252;
      end = 386;
      break;
    case PokemonGeneration.Fourth:
      start = 387;
      end = 493;
      break;
    case PokemonGeneration.Fifth:
      start = 494;
      end = 649;
      break;
    case PokemonGeneration.Sixth:
      start = 650;
      end = 721;
      break;
    case PokemonGeneration.Seventh:
      start = 722;
      end = 809;
      break;
    case PokemonGeneration.Eighth:
      start = 810;
      end = 1010;
      break;
    default:
      throw new Error('Invalid Pokémon Generation');
  }

  return { start, end };
}

export function getRangesBetweenGenerations(
  startGeneration: PokemonGeneration,
  endGeneration: PokemonGeneration
): { start: number; end: number }[] {
  const ranges: { start: number; end: number }[] = [];

  for (let gen = startGeneration; gen <= endGeneration; gen++) {
    const { start, end } = getRangeByGeneration(gen);
    ranges.push({ start, end });
  }

  return ranges;
}
