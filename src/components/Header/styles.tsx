import styled, { keyframes } from 'styled-components';

export const PokedexHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 18%;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 20px;
`;

export const PokedexHeaderLines = styled.div`
  display: flex;
  width: 50%;
  height: 10%;
  border-top: 5px solid black;
`;

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  }
`;

export const PokedexHeaderBall = styled.div`
  display: flex;
  width: 25%;
  height: 50%;
  border-top: 2px solid black;
  background: radial-gradient(#3db8f5, #277eaa, #184f6b);
  border-radius: 50%;
  margin-left: 30px;
  border: solid white 5px;

  animation: ${pulseAnimation} 3s ease-in-out infinite;
`;

export const BallsContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const LightsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  width: 50%;
  gap: 20px;
  margin-top: 60px;
  margin-left: 10px;
  position: relative;
`;
export const PokedexLightRed = styled.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#f53d3d, #aa2727, #6b1818);
  border-radius: 50%;
  border: solid black 1px;
`;

export const PokedexLightYellow = styled.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#f5d03d, #aa9927, #6b5518);
  border-radius: 50%;

  border: solid black 1px;
`;

export const PokedexLighGreen = styled.div`
  display: flex;
  width: 15%;
  height: 15%;
  border-top: 2px solid black;
  background: radial-gradient(#3df543, #27aa38, #186b23);
  border-radius: 50%;
  border: solid black 1px;
`;
