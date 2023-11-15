import { Tresult } from '../../types/pokemon';
import themes from '../../utils/themes';
import {
  PokemonTypeContainer,
  StyledType,
  TypeContent,
  TypeIcon,
} from './styles';

function PokemonType({ pokemon }: { pokemon: Tresult }) {
  return (
    <PokemonTypeContainer>
      {pokemon.types?.map((type, index) => (
        <StyledType
          key={index}
          color={
            themes.colors.buttonColor[type as keyof typeof themes.colors.type]
          }
        >
          <TypeContent>
            <TypeIcon
              src={`./PUBLIC/ICONS/${type.toUpperCase()}.svg`}
              alt={`${type} icon`}
            />
            {type.toUpperCase()}
          </TypeContent>
        </StyledType>
      ))}
    </PokemonTypeContainer>
  );
}

export default PokemonType;
