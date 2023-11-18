import { useSelector } from 'react-redux';
import themes from '../../utils/themes';
import { Screen, StyledImage, StyledTypeImage } from './styles'; // Import TypeContent
import { State } from '../../types/pokemon';

function PokemonPhoto() {
  const selectedPokemon = useSelector(
    (state: State) => state.pokemon.selectedPokemon
  );

  const backgroundColor =
    themes.colors.background[
      selectedPokemon.types?.[0] as keyof typeof themes.colors.type
    ];

  return (
    <Screen color={backgroundColor}>
      <StyledImage src={selectedPokemon.image} alt="selectedPokemon" />
    </Screen>
  );
}

export function TypePhoto() {
  const selectedType = useSelector(
    (state: State) => state.type.selectedType
  ) as keyof typeof themes.colors.background;

  function getColoredIcon(type: string): string {
    const sourceImage = 'types/' + type.toLowerCase() + '.svg';
    return sourceImage;
  }

  return (
    <StyledTypeImage src={getColoredIcon(selectedType)} alt="selectedPokemon" />
  );
}

export default PokemonPhoto;
