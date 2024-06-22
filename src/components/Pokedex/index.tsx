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
    <PokedexContainer aria-label="Pokedex Web Container">
      <PokedexLeftSide aria-label="Pokedex Left Side">
        <Header aria-label="Header" />
        <PokedexLeftContent aria-label="Pokedex Left Content">
          <Display aria-label="Display" />
          <ButtonsMenu aria-label="Buttons Menu" />
          {menu !== '' && <Search aria-label="Search" />}
          <Music aria-label="Music Player" />
        </PokedexLeftContent>
      </PokedexLeftSide>
      <PokedexRightSide aria-label="Pokedex Right Side">
        <PokedexRightContent aria-label="Pokedex Right Content">
          <DisplayMonitor aria-label="Display Monitor" />
          <Lists aria-label="Lists" />
        </PokedexRightContent>
      </PokedexRightSide>
    </PokedexContainer>
  );
}

export function PokedexMobile() {
  const menu = useSelector((state: State) => state.mainMenu.selectedMainMenu);
  return (
    <PokedexLeftContent aria-label="Pokedex Mobile Content">
      <DisplayMonitor aria-label="Display Monitor" />
      <ButtonsMenu aria-label="Buttons Menu" />
      {menu !== '' && <Search aria-label="Search" />}
      <Lists aria-label="Lists" />
    </PokedexLeftContent>
  );
}

interface PokedexLandscapeProps {
  size: number;
}

export const PokedexLandscape: React.FC<PokedexLandscapeProps> = ({ size }) => {
  const menu = useSelector((state: State) => state.mainMenu.selectedMainMenu);
  return (
    <PokedexLeftContent aria-label="Pokedex Landscape Content">
      <DisplayMonitor aria-label="Display Monitor" />
      <PokedexLandscapeContainer aria-label="Pokedex Landscape Container">
        <ButtonsMenu aria-label="Buttons Menu" />
        {size >= 800 && menu !== '' && <Search aria-label="Search" />}
        <Lists aria-label="Lists" />
      </PokedexLandscapeContainer>
    </PokedexLeftContent>
  );
};

export function PokedexTablet() {
  const menu = useSelector((state: State) => state.mainMenu.selectedMainMenu);

  return (
    <PokedexLeftContent aria-label="Pokedex Tablet Content">
      <Display aria-label="Display" />
      <ButtonsMenu aria-label="Buttons Menu" />
      <DisplayMonitor aria-label="Display Monitor" />
      {menu !== '' && <Search aria-label="Search" />}
      <Lists aria-label="Lists" />
    </PokedexLeftContent>
  );
}
