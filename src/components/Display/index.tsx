import {
  AnimatedText,
  BlackScreen,
  GitAccount,
  GitImage,
  WhiteScreen,
  Word,
} from './styles';
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

  let displayText = menu !== '' ? menu : 'POKEDEX';

  switch (menu) {
    case 'POKÉMON':
      displayText = pokemon ? pokemon.toUpperCase() : 'POKÉMON';
      break;

    case 'TYPES':
      displayText = type ? type.toUpperCase() : 'TYPE';
      break;

    case 'ITEMS':
      displayText = item ? item.toUpperCase() : 'ITEM';
      break;

    case 'REGIONS':
      displayText = region ? region.toUpperCase() : 'REGION';
      break;

    default:
      break;
  }

  return (
    <BlackScreen>
      <AnimatedText>
        <Word>{displayText}</Word>
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
    <WhiteScreen>
      {displayComponent}
      <InfoPainel />
    </WhiteScreen>
  );
}

function PokemonDisplay() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);
  const selectedType = useSelector((state: State) => {
    const types = state.pokemon.selectedPokemon.types;
    return types && types.length > 0 ? types[0] : null;
  }) as keyof typeof themes.colors.background;

  const backgroundColor =
    selectedType && themes.colors.background[selectedType];

  return (
    <Screen color={backgroundColor}>
      {!selectedType && <Name>SELECT POKÉMON</Name>}
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
      {!selectedType && <Name>SELECT TYPE</Name>}
      {selectedType && infoMenu === 'photo' && <TypePhoto />}
      {selectedType && infoMenu === 'info' && <PokemonTypeInfo />}
    </Screen>
  );
}

export function NoSelection() {
  return (
    <Screen>
      <StyledImage src="https://i.gifer.com/4tym.gif"></StyledImage>
      <GitAccount>
        <GitImage src="icons/git.png" />
        {'/brunomachadors'.toUpperCase()}
      </GitAccount>
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
      {!itemColor && <Name>SELECT ITEM</Name>}
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
      {!regionColor && <Name>SELECT REGION</Name>}
      {regionColor && infoMenu === 'photo' && <RegionPhoto />}
      {regionColor && infoMenu === 'info' && <RegionInfo />}
    </Screen>
  );
}

export default Display;
