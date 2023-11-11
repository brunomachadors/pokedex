import {
  PokedexContainer,
  PokedexLeftSide,
  PokedexRightSide,
  PokedexLeftContent,
  PokedexRighContent,
} from './styles';

export function Pokedex() {
  return (
    <PokedexContainer>
      <PokedexLeftSide>
        <PokedexLeftContent></PokedexLeftContent>
      </PokedexLeftSide>

      <PokedexRightSide>
        <PokedexRighContent></PokedexRighContent>
      </PokedexRightSide>
    </PokedexContainer>
  );
}
