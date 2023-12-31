import styled, { keyframes } from 'styled-components';

export const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 40px;
  width: 90%;
  height: 80%;
  background-image: ${(props) =>
    props.color ? props.color : 'radial-gradient(#1d1e2c, #09090d)'};
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0); 
    
  }
  to {
    opacity: 1;
    transform: scale(1); 
  }
`;

export const StyledImage = styled.img`
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 90%;

  animation: ${fadeIn} 1s ease-out;

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const StyledTypeImage = styled.img`
  width: 55%;
  max-height: 90%;

  animation: ${fadeIn} 1s ease-out;
`;

export const StyledRegionImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledRegionImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const RegionName = styled.div`
  position: absolute;
  background-color: #ffffffbb;
  color: black;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1vw;
  margin-top: 0.5vw;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 4vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 6vw;
  }
`;

export const StyledItemImage = styled.img`
  width: 1.8vw;
  height: auto;

  @media screen and (max-width: 1280px) {
    width: 5vw;
  }

  @media screen and (max-width: 600px) {
    width: 8vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 3vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 3vw;
  }
`;

export const StyledItemImageLarge = styled.img`
  width: 3vw;
  height: auto;
  border: 3px solid black;
  background-color: black;
  border: 2px solid white;

  @media screen and (max-width: 1280px) {
    width: 10vw;
  }

  @media screen and (max-width: 600px) {
    width: 18vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    width: 8vw;
  }
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMap = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledImageMap = styled.img`
  max-width: 80vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  position: relative;

  @media screen and (max-width: 1280px) {
    max-width: 95vw;
    max-height: 95vh;
  }
`;

export const StyledPokemoneImage = styled.img`
  max-width: 100vw;
  max-height: 100vh;
  width: auto;
  height: auto;
  position: relative;
`;

export const GitAccount = styled.div`
  color: white;
  font-family: 'RetroGaming', sans-serif;
  font-size: 1vw;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`;

export const GitImage = styled.img`
  width: 1vw;
  background-color: transparent;

  @media screen and (max-width: 1280px) {
    width: 3vw;
  }

  @media screen and (max-width: 600px) {
    width: 4vw;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const PantufaImage = styled.img`
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 90%;

  animation: ${fadeIn} 1s ease-out;
  position: relative;
`;
