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
import { useSelector } from 'react-redux';
import { State } from '../../types/pokemon';

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
  const menu = useSelector((state: State) => state.mainMenu.selectedMainMenu);
  return (
    <PokedexLeftContent>
      <DisplayMonitor />
      <ButtonsMenu />
      {menu !== '' && <Search />}
      <Lists />
    </PokedexLeftContent>
  );
}

export function PokedexTablet() {
  const menu = useSelector((state: State) => state.mainMenu.selectedMainMenu);

  return (
    <PokedexLeftContent>
      <Display />
      <DisplayMonitor />
      <ButtonsMenu />
      {menu !== '' && <Search />}
      <Lists />
    </PokedexLeftContent>
  );
}
