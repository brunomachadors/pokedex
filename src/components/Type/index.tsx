import { Tresult } from '../../types/pokemon';
import themes from '../../utils/themes';
import {
  PokemonTypeContainer,
  StyledType,
  TypeContent,
  TypeIcon,
} from './styles';

function getIconSrc(type: string): string {
  const sourceImage = type.toLowerCase() + '.svg';
  return sourceImage;
}

function PokemonType({ pokemon }: { pokemon: Tresult }) {
  return (
    <PokemonTypeContainer id="typeContainer" aria-label="Pokemon Types">
      {pokemon.types?.map((type, index) => (
        <StyledType
          key={index}
          color={
            themes.colors.buttonColor[type as keyof typeof themes.colors.type]
          }
          aria-labelledby={`typeLabel-${index}`}
        >
          <TypeContent id={`typeLabel-${index}`}>
            <TypeIcon src={getIconSrc(type)} alt={`${type} icon`} />
            {type.toUpperCase()}
          </TypeContent>
        </StyledType>
      ))}
    </PokemonTypeContainer>
  );
}

export default PokemonType;
