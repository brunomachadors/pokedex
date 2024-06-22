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
    <PokedexHeaderContainer aria-label="Pokedex Header Container">
      <BallsContainer aria-label="Balls Container">
        <PokedexHeaderBall aria-label="Pokedex Header Ball"></PokedexHeaderBall>
        <LightsContainer aria-label="Lights Container">
          <PokedexLightRed aria-label="Red Light"></PokedexLightRed>
          <PokedexLightYellow aria-label="Yellow Light"></PokedexLightYellow>
          <PokedexLighGreen aria-label="Green Light"></PokedexLighGreen>
        </LightsContainer>
      </BallsContainer>
      <PokedexHeaderLines aria-label="Pokedex Header Lines"></PokedexHeaderLines>
    </PokedexHeaderContainer>
  );
}

export default Header;
