import { DetectivePikachu, SearchContainer, SearchInput } from './styles';
import { State } from '../../types/pokemon';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredList } from '../../store/pokemon/pokemonList';
import { updateFilteredTypeList } from '../../store/type/pokemonTypeList';
import { updateFilteredItemList } from '../../store/item/itemList';
import { filteredRegionList } from '../../store/region/region';

function Search() {
  const pokemonLists = useSelector((state: State) => state.pokemonList.lists);
  const typeLists = useSelector((state: State) => state.typeList.lists);
  const itemLists = useSelector((state: State) => state.itemList.lists);
  const regionLists = useSelector((state: State) => state.regions.lists);
  const dispatch = useDispatch();
  const selectedMenu = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  function handleSearch(searchTerm: string) {
    switch (selectedMenu) {
      case 'POKÉMON':
        if (searchTerm === '') {
          dispatch(updateFilteredList(pokemonLists.originalList));
        } else {
          const filteredResults = pokemonLists.originalList.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          dispatch(updateFilteredList(filteredResults));
        }
        break;

      case 'TYPES':
        if (searchTerm === '') {
          dispatch(updateFilteredTypeList(typeLists.originalList));
        } else {
          const filteredResults = typeLists.originalList.filter((item) =>
            item.typeInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          dispatch(updateFilteredTypeList(filteredResults));
        }
        break;

      case 'ITEMS':
      case 'FOSSILS':
        if (searchTerm === '') {
          console.log('Updating with original list:', itemLists.originalList);
          dispatch(updateFilteredItemList(itemLists.originalList));
        } else {
          const filteredResults = itemLists.originalList.filter((item) => {
            if (item.name && searchTerm) {
              return item.name.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false;
          });

          dispatch(updateFilteredItemList(filteredResults));
        }
        break;

      case 'REGIONS':
        if (searchTerm === '') {
          dispatch(filteredRegionList(regionLists.originalList));
        } else {
          const filteredResults = regionLists.originalList.filter((region) =>
            region.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          dispatch(filteredRegionList(filteredResults));
        }
        break;
      default:
        break;
    }
  }

  const placeHolderText = `Search ${selectedMenu.toLocaleLowerCase()}...`;

  return (
    <SearchContainer id="searchContainer">
      <DetectivePikachu
        src="icons/detetive.png"
        id="detective"
        alt="Detective Pikachu"
        aria-label="Detective Pikachu"
      ></DetectivePikachu>
      <SearchInput
        placeholder={placeHolderText}
        id="searchBox"
        onChange={(e) => handleSearch(e.target.value)}
        aria-labelledby="searchContainer"
      ></SearchInput>
    </SearchContainer>
  );
}

export default Search;
