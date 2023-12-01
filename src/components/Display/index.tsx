import { AnimatedText, BlackScreen, WhiteScreen, Word } from './styles';
import { useSelector } from 'react-redux';
import { State } from '../../types/pokemon';
import PokemonPhoto, {
  ItemPhoto,
  LandingPhoto,
  RegionPhoto,
  TypePhoto,
} from '../Photo';
import InfoPainel, {
  ItemInfo,
  LandingInfo,
  PokemonInfo,
  PokemonTypeInfo,
  RegionInfo,
} from '../Info';
import { Screen } from '../Photo/styles';
import themes from '../../utils/themes';
import { Name } from '../Info/styles';

export function Display() {
  const menu = useSelector((state: State) => state.mainMenu.selectedMainMenu);
  const pokemon = useSelector(
    (state: State) => state.pokemon.selectedPokemon.name
  );
  const type = useSelector((state: State) => state.type.selectedType);
  const item = useSelector((state: State) => state.item.selectedItem.name);
  const region = useSelector(
    (state: State) => state.regions.lists.selected.name
  );

  let displayText = menu !== '' ? menu : 'POKÉDEX';

  switch (menu) {
    case 'POKÉMON':
      displayText = pokemon ? pokemon.toUpperCase() : 'POKÉMON';
      break;

    case 'TYPES':
      displayText = type ? type.toUpperCase() : 'TYPES';
      break;

    case 'ITEMS':
      displayText = item ? item.toUpperCase() : 'ITEMS';
      break;

    case 'REGIONS':
      displayText = region ? region.toUpperCase() : 'REGIONS';
      break;

    default:
      break;
  }

  return (
    <BlackScreen id="blackScreen">
      <AnimatedText id="animatedText">
        <Word id="textDisplay">{displayText}</Word>
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
    case 'POKÉMON':
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
    <WhiteScreen id="whiteScreen">
      {displayComponent}
      <InfoPainel />
    </WhiteScreen>
  );
}

export function PokemonDisplay() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);
  const selectedType = useSelector((state: State) => {
    const types = state.pokemon.selectedPokemon.types;
    return types && types.length > 0 ? types[0] : null;
  }) as keyof typeof themes.colors.background;

  const backgroundColor =
    selectedType && themes.colors.background[selectedType];

  return (
    <Screen color={backgroundColor} id="screen">
      {!selectedType && <Name id="selectPokemon">SELECT POKÉMON</Name>}
      {selectedType && infoMenu === 'photo' && <PokemonPhoto />}
      {selectedType && infoMenu === 'info' && <PokemonInfo />}
    </Screen>
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
      {!selectedType && <Name id="selectType">SELECT TYPE</Name>}
      {selectedType && infoMenu === 'photo' && <TypePhoto />}
      {selectedType && infoMenu === 'info' && <PokemonTypeInfo />}
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
    <Screen color={backgroundColor} id="screen">
      {!itemColor && <Name id="selectItem">SELECT ITEM</Name>}
      {itemColor && infoMenu === 'photo' && <ItemPhoto />}
      {itemColor && infoMenu === 'info' && <ItemInfo />}
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
      {!regionColor && <Name id="selectRegions">SELECT REGION</Name>}
      {regionColor && infoMenu === 'photo' && <RegionPhoto />}
      {regionColor && infoMenu === 'info' && <RegionInfo />}
    </Screen>
  );
}

export function NoSelection() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);
  return (
    <Screen id="screen">
      {infoMenu === 'photo' && <LandingPhoto></LandingPhoto>}
      {infoMenu === 'info' && <LandingInfo></LandingInfo>}
    </Screen>
  );
}
export default Display;
