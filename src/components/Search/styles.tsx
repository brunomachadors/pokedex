import styled from 'styled-components';

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  font-family: 'RetroGaming', sans-serif;
  font-size: 1.3vw;
  border: 3px solid #1d1e2c;
  text-align: center;

  @media screen and (max-width: 1024px) {
    position: relative;
    margin-top: 150px;
  }
`;

export const SearchContainer = styled.div`
  height: 8%;
  width: 60%;
  background-color: black;
`;

export const PokemonListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const PokemonListItemContainer = styled.li`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  padding: 10px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

export const PokemonInfo = styled.div`
  font-size: 14px;
  color: #333;
`;
