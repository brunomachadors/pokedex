import React from 'react';
import {
  PaginationButton,
  PaginationContainer,
  PaginationItem,
  PaginationList,
} from './style';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationButton
            active={i === currentPage}
            onClick={() => onPageChange(i)}
          >
            {i}
          </PaginationButton>
        </PaginationItem>
      );
    }
    return items;
  };

  return (
    <PaginationContainer>
      <PaginationList>{renderPaginationItems()}</PaginationList>
    </PaginationContainer>
  );
};

export default Pagination;
