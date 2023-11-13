import styled, { keyframes } from 'styled-components';

export const PokedexContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 1600px;
  height: 800px;
  flex-direction: row;

  @media (max-width: 1280px) {
    width: 1400px;
    height: 700px;
  }

  @media (max-width: 720px) {
    width: 1100px;
    height: 1200px;
    flex-direction: column;
    align-items: center;
  }
`;

export const PokedexLeftSide = styled.div`
  background: radial-gradient(#eb090d, #950406);
  width: 35%;
  height: 100%;
  border: solid black 1px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: inset 0 0 15px rgba(251, 56, 56, 0.5);
  padding-bottom: 10px;

  @media (max-width: 720px) {
    width: 40%;
    height: 50%;
  }
`;

export const PokedexRightSide = styled.div`
  background: radial-gradient(#eb090d, #950406);
  width: 32%;
  height: 80%;
  border: solid black 1px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: inset 0 0 15px rgba(251, 56, 56, 0.5);
  margin-bottom: 10px;

  @media (max-width: 720px) {
    width: 35%;
    height: 50%;
  }
`;

export const PokedexLeftContent = styled.div`
  background: radial-gradient(#de0b0f, #750406);
  width: 90%;
  height: 80%;
  border: solid black 2px;
  border-left: 12px solid #680708;
  border-top: solid #680708 12px;
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const PokedexRightContent = styled.div`
  background: radial-gradient(#de0b0f, #750406);
  width: 95%;
  height: 94%;
  border-right: 6px solid #680708;
  border-top: 6px solid #680708;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 5px;
`;

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
