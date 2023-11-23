import styled from 'styled-components';

export const StyledType = styled.div`
  background-color: ${(props) => props.color || 'black'};
  padding: 5px 10px;
  color: ${(props) => (props.color === '#E3D38E' ? 'black' : 'white')};
  font-size: 1.1vw;
  border: 0.5px solid black;
  border-radius: 10px;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1024px) {
    font-size: 3vw;
  }
`;

export const PokemonTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

export const TypeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

export const TypeIcon = styled.img`
  width: 1vw;
  height: auto;

  @media screen and (max-width: 1024px) {
    width: 16%;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const TypeColoredDiv = styled.img`
  display: flex;
  flex-direction: row;
`;

export const TypeColoredIcon = styled.img`
  width: 1.8vw;
  height: auto;

  @media screen and (max-width: 1024px) {
    width: 45px;
    padding: 6px;
  }

  @media (max-width: 720px) {
    width: 12px;
  }

  @media screen and (max-width: 480px) {
    width: 20px;
  }
`;
