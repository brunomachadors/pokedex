import {
  PokedexContainer,
  PokedexLeftSide,
  PokedexRightSide,
  PokedexLeftContent,
  PokedexRightContent,
  PokedexHeaderContainer,
  PokedexHeaderLines,
  PokedexHeaderBall,
  PokedexLightRed,
  LightsContainer,
  PokedexLightYellow,
  PokedexLighGreen,
  BallsContainer,
} from './styles';

import Display, { DisplayList, DisplayMonitor } from '../Display';

import Search from '../Search';

import ButtonsMenu from '../Buttons';
import InfoPainel from '../Info';

export function Pokedex() {
  return (
    <PokedexContainer>
      <PokedexLeftSide>
        <PokedexHeaderContainer>
          <BallsContainer>
            <PokedexHeaderBall></PokedexHeaderBall>
            <LightsContainer>
              <PokedexLightRed></PokedexLightRed>
              <PokedexLightYellow></PokedexLightYellow>
              <PokedexLighGreen></PokedexLighGreen>
            </LightsContainer>
          </BallsContainer>
          <PokedexHeaderLines></PokedexHeaderLines>
        </PokedexHeaderContainer>

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
