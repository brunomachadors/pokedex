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
