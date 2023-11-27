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

export function PokedexWeb() {
  return (
    <PokedexContainer>
      <PokedexLeftSide>
        <Header />
        <PokedexLeftContent>
          <Display />
          <ButtonsMenu />
          <Search />
          <Music />
        </PokedexLeftContent>
      </PokedexLeftSide>
      <PokedexRightSide>
        <PokedexRightContent>
          <DisplayMonitor />
          <Lists />
        </PokedexRightContent>
      </PokedexRightSide>
    </PokedexContainer>
  );
}

export function PokedexMobile() {
  return (
    <PokedexLeftContent>
      <DisplayMonitor />
      <ButtonsMenu />
      <Search />
      <Lists />
    </PokedexLeftContent>
  );
}
