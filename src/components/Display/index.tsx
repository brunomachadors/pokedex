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

    case 'FOSSILS':
      displayText = item ? item.toUpperCase() : 'FOSSILS';
      break;

    case 'REGIONS':
      displayText = region ? region.toUpperCase() : 'REGIONS';
      break;

    default:
      break;
  }

  return (
    <BlackScreen id="blackScreen" aria-label="Black Screen">
      <AnimatedText id="animatedText" aria-label="Animated Text">
        <Word id="textDisplay" aria-label="Text Display">
          {displayText}
        </Word>
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
      displayComponent = <PokemonDisplay aria-label="Pokemon display" />;
      break;
    case 'TYPES':
      displayComponent = <TypesDisplay aria-label="Types display" />;
      break;
    case 'ITEMS':
      displayComponent = <ItemsDisplay aria-label="Items display" />;
      break;
    case 'FOSSILS':
      displayComponent = <FossilsDisplay aria-label="Fossils display" />;
      break;
    case 'REGIONS':
      displayComponent = <RegionsDisplay aria-label="Regions display" />;
      break;
    default:
      displayComponent = <NoSelection aria-label="No Selection display" />;
  }

  return (
    <WhiteScreen id="whiteScreen" aria-label="White Screen">
      {displayComponent}
      <InfoPainel aria-label="Info Panel" />
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
    <Screen
      color={backgroundColor}
      id="screen"
      aria-label="Pokemon Display Screen"
    >
      {!selectedType && (
        <Name id="selectPokemon" aria-label="Select Pokemon">
          SELECT POKÉMON
        </Name>
      )}
      {selectedType && infoMenu === 'photo' && (
        <PokemonPhoto aria-label="Pokemon Photo" />
      )}
      {selectedType && infoMenu === 'info' && (
        <PokemonInfo aria-label="Pokemon Info" />
      )}
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
    <Screen
      color={backgroundColor}
      id="screen"
      aria-label="Types Display Screen"
    >
      {!selectedType && (
        <Name id="selectType" aria-label="Select Type">
          SELECT TYPE
        </Name>
      )}
      {selectedType && infoMenu === 'photo' && (
        <TypePhoto aria-label="Type Photo" />
      )}
      {selectedType && infoMenu === 'info' && (
        <PokemonTypeInfo aria-label="Pokemon Type Info" />
      )}
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
    <Screen
      color={backgroundColor}
      id="screen"
      aria-label="Items Display Screen"
    >
      {!itemColor && (
        <Name id="selectItem" aria-label="Select Item">
          SELECT ITEM
        </Name>
      )}
      {itemColor && infoMenu === 'photo' && (
        <ItemPhoto aria-label="Item Photo" />
      )}
      {itemColor && infoMenu === 'info' && <ItemInfo aria-label="Item Info" />}
    </Screen>
  );
}

export function FossilsDisplay() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);
  const itemColor = useSelector(
    (state: State) =>
      state.item.selectedItem.category
        ?.name as keyof typeof themes.colors.itemGradientMap
  );

  const backgroundColor = themes.colors.itemGradientMap[itemColor];

  return (
    <Screen
      color={backgroundColor}
      id="screen"
      aria-label="Fossils Display Screen"
    >
      {!itemColor && (
        <Name id="selectItem" aria-label="Select Fossil">
          SELECT FOSSIL
        </Name>
      )}
      {itemColor && infoMenu === 'photo' && (
        <ItemPhoto aria-label="Fossil Photo" />
      )}
      {itemColor && infoMenu === 'info' && (
        <ItemInfo aria-label="Fossil Info" />
      )}
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
    <Screen
      color={backgroundColor}
      id="screen"
      aria-label="Regions Display Screen"
    >
      {!regionColor && (
        <Name id="selectRegions" aria-label="Select Region">
          SELECT REGION
        </Name>
      )}
      {regionColor && infoMenu === 'photo' && (
        <RegionPhoto aria-label="Region Photo" />
      )}
      {regionColor && infoMenu === 'info' && (
        <RegionInfo aria-label="Region Info" />
      )}
    </Screen>
  );
}

export function NoSelection() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);
  return (
    <Screen id="screen" aria-label="No Selection Screen">
      {infoMenu === 'photo' && <LandingPhoto aria-label="Landing Photo" />}
      {infoMenu === 'info' && <LandingInfo aria-label="Landing Info" />}
    </Screen>
  );
}
export default Display;
