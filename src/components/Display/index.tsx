import { AnimatedText, BlackScreen, WhiteScreen, Word } from './styles';
import { useSelector } from 'react-redux';
import { State } from '../../types/pokemon';
import Photo from '../Photo';
import InfoPainel, { Info } from '../Info';

export function Display() {
  return (
    <BlackScreen>
      <AnimatedText>
        <Word>POKEDEX</Word>
      </AnimatedText>
    </BlackScreen>
  );
}

export function DisplayMonitor() {
  const mainMenu = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  return (
    <WhiteScreen>
      {mainMenu === 'POKEMON' && <PokemonDisplay />}
      <InfoPainel />
    </WhiteScreen>
  );
}

function PokemonDisplay() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);
  return (
    <>
      {infoMenu === 'photo' && <Photo />}
      {infoMenu === 'info' && <Info />}
    </>
  );
}

export default Display;
