import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types/pokemon';
import { ButtonSelect } from '../Buttons/styles';
import themes from '../../utils/themes';
import { getItem, getItems } from '../../api/item/item';
import { IItem } from '../../types/item/item';
import PokeballLoading from '../Loading';
import { selectItem } from '../../store/item/item';

import { StyledItemImage } from '../Photo/styles';
import {
  BlackScreenList,
  List,
  ListText,
  TextContainer,
} from '../Lists/styles';
import Pagination from '../Pagination';
import {
  updateFilteredItemList,
  updateOriginalItemList,
} from '../../store/item/itemList';

function ItemList() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(300);

  const dispatch = useDispatch();
  const filteredItemList = useSelector(
    (state: State) => state.itemList.lists.filteredList
  );

  useEffect(() => {
    async function getAllItems() {
      try {
        const items = await getItems();

        const infos = await Promise.all(
          items.map(async (item: { url: string }) => {
            const info: IItem = await getItem(item.url);
            return info;
          })
        );

        dispatch(updateOriginalItemList(infos));
        dispatch(updateFilteredItemList(infos));

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setIsLoading(false);
      }
    }

    getAllItems();
  }, [dispatch]);

  const handleClick = (item: IItem) => {
    dispatch(selectItem(item));
  };

  // Paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItemList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredItemList.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <BlackScreenList>
      {isLoading ? (
        <PokeballLoading />
      ) : (
        <>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <List aria-label="Item list">
            {currentItems.map((item) => (
              <ButtonSelect
                key={item.id}
                active={item.active}
                color={
                  themes.colors.itemTypeColorMap[
                    item.category
                      ?.name as keyof typeof themes.colors.itemTypeColorMap
                  ]
                }
                aria-label={'Select the item ' + item.name}
                onClick={() => handleClick(item)}
              >
                <ListText>
                  <TextContainer>#{item.id}</TextContainer>
                  <TextContainer>
                    {item.name ? item.name.toUpperCase() : 'Unknown'}
                  </TextContainer>
                  <StyledItemImage src={item.sprites?.default} />
                </ListText>
              </ButtonSelect>
            ))}
          </List>
        </>
      )}
    </BlackScreenList>
  );
}

export default ItemList;
