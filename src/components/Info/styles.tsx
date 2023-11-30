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
  background-color: #038d0e;
  color: white;
  width: 30%;
  height: 100%;
  font-size: 0.5vw;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }
`;

export const ButtonInfo = styled.button`
  border-radius: 20px;
  background-color: #4747f7;
  color: white;
  width: 30%;
  height: 100%;
  font-size: 0.5vw;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }
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

  @media screen and (max-width: 1280px) {
    gap: 5px;
  }

  @media screen and (max-width: 600px) {
    gap: 0px;
  }
`;

export const Name = styled.div`
  color: white;
  font-size: 1.5vw;
  margin-top: 5px;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 5vw;
  }
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

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
    width: 90%;
    height: 60%;
    justify-content: space-evenly;
    padding: 2vw;
    gap: 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 2vw;
    width: 80%;
    height: 50%;
    justify-content: space-evenly;
    gap: 0;
  }
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

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
    justify-content: center;
    margin-right: 0px;
  }

  @media screen and (max-width: 600px) {
  }
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

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
    justify-content: space-around;
  }

  @media screen and (max-width: 600px) {
    padding: 0 5vw 0 4vw;
  }
`;

export const Damage = styled.div`
  color: white;
  font-size: 1vw;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1280px) {
    font-size: 2vw;
    justify-content: center;
  }
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
  padding: 10px;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.5vw;
    width: 70%;
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

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`;

export const ImunityTypeContainer = styled.div`
  display: flex;
  gap: 10px;
  font-family: 'RetroGaming', sans-serif;
  justify-content: space-around;
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: 'RetroGaming', sans-serif;
  margin-top: 1vw;
  gap: 0.4vw;

  @media screen and (max-width: 1280px) {
    gap: 1vw;
  }

  @media screen and (max-width: 600px) {
    gap: 2vw;
    height: 100%;
  }
`;

export const ItemName = styled.div`
  color: white;

  font-size: 1vw;
  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`;

export const ItemId = styled.div`
  color: white;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`;

export const ItemShortEffect = styled.div`
  font-size: 0.7vw;
  color: black;
  background-color: #ffffffac;
  width: 80%;
  border-radius: 15px;
  padding: 5px;
  text-align: center;
  border: 1px solid black;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.2vw;
  }
`;

export const ItemAttributesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 0;
`;
export const ItemAttributes = styled.li`
  color: #ffffff;
  font-size: 0.8vw;
  font-family: 'RetroGaming', sans-serif;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`;

export const RegionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: 'RetroGaming', sans-serif;
  width: 100%;

  height: 100%;
`;

export const RegionId = styled.div`
  color: white;

  @media screen and (max-width: 1280px) {
    font-size: 3vw;
  }

  @media screen and (max-width: 480px) {
    font-size: 4vw;
  }
`;

export const RegionName = styled.div`
  color: white;
  font-size: 3vw;
  @media screen and (max-width: 1280px) {
    font-size: 4vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`;

export const Versions = styled.div`
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

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
    width: 50%;
    height: 50%;
    padding: 1vw;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`;

export const VersionGroups = styled.div`
  font-size: 0.5vw;

  @media screen and (max-width: 1280px) {
    font-size: 1vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;

export const MainGeneration = styled.div`
  color: black;
  font-size: 1vw;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`;
