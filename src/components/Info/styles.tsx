import styled from 'styled-components';
export const InfoButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
`;

export const ButtonPhoto = styled.button`
  border-radius: 20px;
  background-color: #8d0303;
  color: white;
  width: 30%;
  height: 100%;
  font-size: 0.5vw;
  font-family: 'RetroGaming', sans-serif;
`;

export const ButtonInfo = styled.button`
  border-radius: 20px;
  background-color: #4747f7;
  color: white;
  width: 30%;
  height: 100%;
  font-size: 0.5vw;
  font-family: 'RetroGaming', sans-serif;
`;

export const BlackScreenInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 40px;
  width: 80%;
  height: 80%;
  background-image: ${(props) => (props.color ? props.color : '#1d1e2c')};
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.div`
  color: white;
  font-size: 1.5vw;
  margin-top: 5px;
  font-family: 'RetroGaming', sans-serif;
`;

export const DoubleDamage = styled.div`
  color: white;
  font-size: 0.8vw;
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  flex-direction: column;
  border: 1px solid white;
  padding: 0.5vw;
  border-radius: 15px;
  background-color: #00000098;
  font-family: 'RetroGaming', sans-serif;
`;

export const DoubleDamageFrom = styled.div`
  color: white;
  font-size: 1.2vw;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  flex-direction: row;
`;

export const DoubleDamageTo = styled.div`
  color: white;
  font-size: 1.2vw;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  flex-direction: row;
`;

export const Damage = styled.div`
  color: white;
  font-size: 1vw;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`;

export const Flavour = styled.div`
  font-size: 0.8vw;
  color: white;
  width: 90%;
  border: solid white 1px;
  border-radius: 12px;
  padding: 15px;
  background-color: #0000009d;
  text-align: left;
  line-height: 2;
  overflow-y: auto;
  font-family: 'RetroGaming', sans-serif;
  max-height: 40%;

  @media (max-width: 1280px) {
    font-size: 8px;
  }
`;

export const Imune = styled.div`
  color: black;
  font-size: 0.8vw;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  flex-direction: column-reverse;
  font-family: 'RetroGaming', sans-serif;
`;

export const ImunityTypeContainer = styled.div`
  display: flex;
  gap: 10px;
  font-family: 'RetroGaming', sans-serif;
`;
