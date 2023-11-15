import {
  BallsContainer,
  LightsContainer,
  PokedexHeaderBall,
  PokedexHeaderContainer,
  PokedexHeaderLines,
  PokedexLighGreen,
  PokedexLightRed,
  PokedexLightYellow,
} from './styles';

function Header() {
  return (
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
  );
}

export default Header;
