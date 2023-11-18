import {
  PokedexContainer,
  PokedexLeftSide,
  PokedexRightSide,
  PokedexLeftContent,
  PokedexRightContent,
} from './styles';

import Display, { DisplayMonitor } from '../Display';
import Search from '../Search';
import ButtonsMenu from '../Buttons';
import Header from '../Header';
import Lists from '../Lists';
import { Music } from '../Music';

export function Pokedex() {
  return (
    <PokedexContainer>
      <PokedexLeftSide>
        <Header></Header>
        <PokedexLeftContent>
          <Display></Display>
          <ButtonsMenu></ButtonsMenu>
          <Search></Search>
          <Music></Music>
        </PokedexLeftContent>
      </PokedexLeftSide>
      <PokedexRightSide>
        <PokedexRightContent>
          <DisplayMonitor></DisplayMonitor>
          <Lists></Lists>
        </PokedexRightContent>
      </PokedexRightSide>
    </PokedexContainer>
  );
}
