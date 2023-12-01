import {
  PokedexContainer,
  PokedexLeftSide,
  PokedexRightSide,
  PokedexLeftContent,
  PokedexRightContent,
  PokedexLandscapeContainer,
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
  const menu = useSelector((state: State) => state.mainMenu.selectedMainMenu);
  return (
    <PokedexContainer>
      <PokedexLeftSide>
        <Header />
        <PokedexLeftContent>
          <Display />
          <ButtonsMenu />
          {menu !== '' && <Search />}
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

interface PokedexLandscapeProps {
  size: number;
}

export const PokedexLandscape: React.FC<PokedexLandscapeProps> = ({ size }) => {
  const menu = useSelector((state: State) => state.mainMenu.selectedMainMenu);
  return (
    <PokedexLeftContent>
      <DisplayMonitor />
      <PokedexLandscapeContainer>
        <ButtonsMenu />
        {size >= 800 && menu !== '' && <Search />}
        <Lists />
      </PokedexLandscapeContainer>
    </PokedexLeftContent>
  );
};

export function PokedexTablet() {
  const menu = useSelector((state: State) => state.mainMenu.selectedMainMenu);

  return (
    <PokedexLeftContent>
      <Display />
      <ButtonsMenu />
      <DisplayMonitor />
      {menu !== '' && <Search />}
      <Lists />
    </PokedexLeftContent>
  );
}
