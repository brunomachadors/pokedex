import { useSelector } from 'react-redux';
import { DisplayList } from '../Display';
import { State } from '../../types/pokemon';
import { ListsContainer } from './styles';

function Lists() {
  const selectedMenu = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  return (
    <ListsContainer>
      {selectedMenu === 'POKEMON' && <DisplayList></DisplayList>}
    </ListsContainer>
  );
}

export default Lists;
