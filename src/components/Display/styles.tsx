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
  margin-top: 5%;
`;

const wordAnimation = keyframes`
  0% { opacity: 1  }
  50% { opacity: 0 }
  100% { opacity: 1 }
`;

export const AnimatedText = styled.div`
  font-size: 2vw;
  color: yellow;
`;

export const Word = styled.div`
  display: inline-block;
  animation: ${wordAnimation} 3s linear infinite;
`;

export const WhiteScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 70%;
  height: 55%;
  background-image: linear-gradient(to bottom, #f1f1f4, #a5a5a5);
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 10px;
`;
