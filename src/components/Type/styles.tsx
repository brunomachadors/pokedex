import styled from 'styled-components';

export const StyledType = styled.div`
  background-color: ${(props) => props.color || 'black'};
  padding: 5px 10px;
  color: ${(props) => (props.color === '#E3D38E' ? 'black' : 'white')};
  font-size: 1.1vw;
  border: 0.5px solid black;
  border-radius: 10px;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 1vw;
    padding: 0 3vw 0 3vw;
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
    padding: 0 30px;
    font-size: 1vw;
    width: 15vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 3vh;
    padding: 5px 15px;
  }
`;

export const PokemonTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: row;

  @media screen and (max-width: 1280px) {
    width: 70%;
    gap: 5px;
  }
`;

export const TypeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
    padding: 0 15px;
  }

  @media screen and (max-width: 600px) {
    gap: 1px;
    font-size: 3vw;
    padding: 0 15px;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 1.5vw;
    padding: 0 2px;
  }
`;

export const TypeIcon = styled.img`
  width: 1vw;
  height: auto;

  @media screen and (max-width: 1280px) {
    width: 16%;
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    width: 3vw;
    padding: 0;
    gap: 2vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 15%;
  }
`;

export const TypeColoredDiv = styled.img`
  display: flex;
  flex-direction: row;
`;

export const TypeColoredIcon = styled.img`
  width: 1.5vw;
  height: auto;

  @media screen and (max-width: 1280px) {
    width: 4vw;
    padding: 6px;
  }

  @media (max-width: 600px) {
    width: 6vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 100%;
    max-height: 3vh;
  }

  @media (orientation: landscape) and (max-width: 800px) {
    width: 100%;
    max-height: 5vh;
  }
`;
