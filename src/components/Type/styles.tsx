import styled from 'styled-components';

export const StyledType = styled.div`
  background-color: ${(props) => props.color || 'black'};
  padding: 5px 10px;
  color: ${(props) => (props.color === '#E3D38E' ? 'black' : 'white')};
  font-size: 12px;
  border: 0.5px solid black;
  border-radius: 10px;
`;

export const PokemonTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TypeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TypeIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;
