import { AnimatedText, BlackScreen, WhiteScreen, Word } from './styles';
import { useSelector } from 'react-redux';
import { State } from '../../types/pokemon';
import PokemonPhoto, { ItemPhoto, RegionPhoto, TypePhoto } from '../Photo';
import InfoPainel, {
  ItemInfo,
  PokemonInfo,
  PokemonTypeInfo,
  RegionInfo,
} from '../Info';
import { Screen, StyledImage } from '../Photo/styles';
import themes from '../../utils/themes';

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

  let displayComponent;

  switch (mainMenu) {
    case 'POKEMON':
      displayComponent = <PokemonDisplay />;
      break;
    case 'TYPES':
      displayComponent = <TypesDisplay />;
      break;
    case 'ITEMS':
      displayComponent = <ItemsDisplay />;
      break;
    case 'REGIONS':
      displayComponent = <RegionsDisplay />;
      break;
    default:
      displayComponent = <NoSelection />;
  }

  return (
    <WhiteScreen>
      {displayComponent}
      <InfoPainel />
    </WhiteScreen>
  );
}

function PokemonDisplay() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);
  return (
    <>
      {infoMenu === 'photo' && <PokemonPhoto />}
      {infoMenu === 'info' && <PokemonInfo />}
    </>
  );
}

export function TypesDisplay() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);

  const selectedType = useSelector(
    (state: State) => state.type.selectedType
  ) as keyof typeof themes.colors.background;

  const backgroundColor =
    selectedType && themes.colors.background[selectedType];

  return (
    <Screen color={backgroundColor}>
      {infoMenu === 'photo' && <TypePhoto />}
      {infoMenu === 'info' && <PokemonTypeInfo />}
    </Screen>
  );
}

export function NoSelection() {
  return (
    <Screen>
      <StyledImage src="https://i.gifer.com/4tym.gif"></StyledImage>
    </Screen>
  );
}
export function ItemsDisplay() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);
  const itemColor = useSelector(
    (state: State) =>
      state.item.selectedItem.category
        ?.name as keyof typeof themes.colors.itemGradientMap
  );

  const backgroundColor = themes.colors.itemGradientMap[itemColor];

  return (
    <Screen color={backgroundColor}>
      {infoMenu === 'photo' && <ItemPhoto />}
      {infoMenu === 'info' && <ItemInfo />}
    </Screen>
  );
}

export function RegionsDisplay() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);

  const regionColor = useSelector(
    (state: State) =>
      state.regions.lists.selected
        .name as keyof typeof themes.colors.regionColorMapBackground
  );

  const backgroundColor = themes.colors.regionColorMapBackground[regionColor];
  return (
    <Screen color={backgroundColor}>
      {infoMenu === 'photo' && <RegionPhoto />}
      {infoMenu === 'info' && <RegionInfo />}
    </Screen>
  );
}

export default Display;
