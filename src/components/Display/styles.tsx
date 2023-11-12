import styled, { keyframes } from 'styled-components';

export const BlackScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
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
  font-size: 24px;
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
  width: 70%;
  height: 40%;
  background-image: radial-gradient(#1d1e2c, #09090d);
  border: 3px solid black;
  overflow: hidden;
  margin-top: -20px;
  flex-direction: column;
  overflow-y: auto;
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
`;

export const ListText = styled.li`
  font-size: 18px;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'RetroGaming', sans-serif;
`;

export const Button = styled.button`
  width: 100%;
  position: relative;
  background-image: radial-gradient(#1d1e2c, #09090d);
`;

export const WhiteScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 45%;
  background-image: radial-gradient(#f1f1f4, #bdbdbd);
  border: 3px solid black;
  overflow: hidden;
  margin-top: -20px;
  border-radius: 10px;
`;

export const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  width: 80%;
  height: 80%;
  background-image: radial-gradient(#1d1e2c, #09090d);
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
`;
