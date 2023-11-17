import styled from 'styled-components';
export const InfoButtonContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const ButtonPhoto = styled.button`
  border-radius: 20px;
  background-color: #8d0303;
  color: white;
  width: 100px;
  font-size: 10px;
  font-family: 'RetroGaming', sans-serif;
`;

export const ButtonInfo = styled.button`
  border-radius: 20px;
  background-color: #4747f7;
  color: white;
  width: 100px;
  font-size: 10px;
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
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const Name = styled.div`
  color: white;
  font-size: 20px;
`;
export const Id = styled.div`
  color: white;
  font-size: 15px;
`;

export const Flavour = styled.div`
  font-size: 10px;
  color: white;
  width: 80%;
  border: solid white 1px;
  border-radius: 12px;
  padding: 10px;
  background-color: #0000009d;
  text-align: center;
  line-height: 2;
  max-height: 100px;
  overflow-y: auto;

  @media (max-width: 1280px) {
    font-size: 8px;
  }
`;
