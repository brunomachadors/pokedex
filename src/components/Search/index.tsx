import { SearchContainer, SearchInput } from './styles';
import { State } from '../../types/pokemon';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredList } from '../../store/pokemonList/pokemonList';
import { updateFilteredTypeList } from '../../store/pokemonTypes/pokemonTypeList';

function Search() {
  const pokemonLists = useSelector((state: State) => state.pokemonList.lists);
  const typeLists = useSelector((state: State) => state.typeList.lists);
  const dispatch = useDispatch();
  const selectedMenu = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  function handleSearch(searchTerm: string) {
    switch (selectedMenu) {
      case 'POKEMON':
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
      default:
        break;
    }
  }

  const placeHolderText = `Search ${selectedMenu.toLocaleLowerCase()}...`;

  return (
    <SearchContainer>
      <SearchInput
        placeholder={placeHolderText}
        id="searchBox"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </SearchContainer>
  );
}

export default Search;
