import { useSelector } from 'react-redux';
import themes from '../../utils/themes';
import {
  Screen,
  StyledImage,
  StyledItemImageLarge,
  StyledTypeImage,
} from './styles'; // Import TypeContent
import { State } from '../../types/pokemon';
import { Name, TextContainer } from '../Info/styles';
import { Categoryitem, StyledItemCategory } from '../Display/styles';

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

export function ItemPhoto() {
  const selectedItem = useSelector((state: State) => state.item.selectedItem);

  return (
    <TextContainer>
      <Name style={{ color: 'white' }}>{selectedItem.name.toUpperCase()}</Name>

      <StyledItemImageLarge
        src={selectedItem.sprites?.default}
        alt="selectedItem"
      />
      <Categoryitem>
        Category:
        <StyledItemCategory>
          {selectedItem.category?.name.toUpperCase()}
        </StyledItemCategory>
      </Categoryitem>
    </TextContainer>
  );
}

export default PokemonPhoto;
