import styled, { keyframes } from 'styled-components';

export const BlackScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 15%;
  background-image: radial-gradient(#1d1e2c, #09090d);
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  margin-top: -20px;
`;

const wordAnimation = keyframes`
  0% { opacity: 1  }
  50% { opacity: 0 }
  100% { opacity: 1 }
`;

export const AnimatedText = styled.div`
  font-size: 30px;
  color: yellow;
`;

export const Word = styled.div`
  display: inline-block;
  animation: ${wordAnimation} 3s linear infinite;
`;

export const BlackScreenList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  width: 50%;
  height: 40%;
  overflow: hidden;
  flex-direction: column;

  @media (max-width: 720px) {
    width: 60%;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  font-size: 20px;
  overflow-y: auto;
`;

export const ListText = styled.li`
  font-size: 16px;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'RetroGaming', sans-serif;
  text-shadow: -1px -1px 1px black, 1px -1px 1px black, -1px 1px 1px black,
    1px 1px 1px black;
  margin-left: 10%;

  @media (max-width: 720px) {
    margin-left: 5%;
  }
`;

export const WhiteScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 45%;
  background-image: linear-gradient(to bottom, #f1f1f4, #a5a5a5);
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
`;

export const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  width: 80%;
  height: 80%;
  background-image: ${(props) => (props.color ? props.color : '#1d1e2c')};
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: 70%;
`;

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
  margin-bottom: 10px;
`;

export const TextInfo = styled.div`
  font-size: 20px;
  color: yellow;
`;

export const BlackScreenInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 25%;
  background-image: radial-gradient(#1d1e2c, #09090d);
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  margin-top: -20px;
`;
