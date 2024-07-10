import styled from 'styled-components';

export const PaginationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 5px 0;
`;

export const PaginationItem = styled.li`
  margin: 0;
`;

export const PaginationButton = styled.button<{ active: boolean }>`
  width: 10%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) => (active ? '#000' : '#1e4fef')};
  color: ${({ active }) => (active ? '#fff' : '#ffffff')};
  border: 1px solid #000;
  cursor: pointer;
  margin-left: -1px;

  &:hover {
    background-color: ${({ active }) => (active ? '#000' : '#f0f0f0')};
    color: ${({ active }) => (active ? '#ffffff' : '#000000')};
  }

  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 1025px) {
    width: 100%;
    height: 100%;
  }
`;
