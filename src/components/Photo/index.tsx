import { useSelector } from 'react-redux';
import themes from '../../utils/themes';
import {
  PokemonTypeContainer,
  Screen,
  StyledImage,
  StyledType,
} from './styles';
import { State } from '../../types/pokemon';

function Photo() {
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
      <PokemonTypeContainer>
        {selectedPokemon.types?.map((type, index) => (
          <StyledType
            key={index}
            color={
              themes.colors.buttonColor[type as keyof typeof themes.colors.type]
            }
          >
            {type.toUpperCase()}
          </StyledType>
        ))}
      </PokemonTypeContainer>
    </Screen>
  );
}

export default Photo;
