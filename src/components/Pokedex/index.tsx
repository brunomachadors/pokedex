import {
  PokedexContainer,
  PokedexLeftSide,
  PokedexRightSide,
  PokedexLeftContent,
  PokedexRightContent,
} from './styles';

import Display, { DisplayList, DisplayMonitor } from '../Display';

import Search from '../Search';

import ButtonsMenu from '../Buttons';
import InfoPainel from '../Info';
import Header from '../Header';

export function Pokedex() {
  return (
    <PokedexContainer>
      <PokedexLeftSide>
        <Header></Header>
        <PokedexLeftContent>
          <Display></Display>
          <ButtonsMenu></ButtonsMenu>
          <Search></Search>
        </PokedexLeftContent>
      </PokedexLeftSide>

      <PokedexRightSide>
        <PokedexRightContent>
          <DisplayMonitor></DisplayMonitor>
          <InfoPainel></InfoPainel>
          <DisplayList></DisplayList>
        </PokedexRightContent>
      </PokedexRightSide>
    </PokedexContainer>
  );
}
