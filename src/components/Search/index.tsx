import { SearchContainer, SearchInput } from './styles';
import { State } from '../../types/pokemon';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredList } from '../../store/pokemonList/pokemonList';

function Search() {
  const pokemonLists = useSelector((state: State) => state.pokemonList.lists);
  const dispatch = useDispatch();
  const selectedMenu = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  const handleSearch = (searchTerm: string) => {
    if (searchTerm === '') {
      dispatch(updateFilteredList(pokemonLists.originalList));
    } else {
      const filteredResults = pokemonLists.originalList.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      dispatch(updateFilteredList(filteredResults));
    }
  };
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
