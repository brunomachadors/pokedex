import styled from 'styled-components';

interface ButtonProps {
  selected?: boolean;
}

export const ButtonContainer = styled.div`
  display: flex;
  width: 75%;
  height: 15%;
  gap: 6px;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    height: 12%;
  }

  @media (max-width: 600px) {
    height: 10%;
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.selected ? '#325a6d' : '#437c90')};
  color: ${(props) => (props.selected ? '#b9e9f9' : 'white')};
  width: 25%;
  height: 100%;
  font-family: 'RetroGaming', sans-serif;
  font-size: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-top: ${(props) => (props.selected ? '2px solid #1c2d37' : 'none')};
  border-left: ${(props) => (props.selected ? '2px solid #1c2d37' : 'none')};
  border-right: ${(props) => (props.selected ? 'none' : '3px solid #4990a9')};
  border-bottom: ${(props) => (props.selected ? 'none' : '3px solid #4990a9')};
  transition: background-color 0.1s;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    font-size: 4vw;
    width: 30%;
  }

  @media (max-width: 720px) {
    font-size: 6px;
  }
`;

export const ButtonSelect = styled.button`
  width: 100%;
  position: relative;
  background: ${(props) =>
    props.color ? props.color : 'linear-gradient(to right, #afafaf, #929292)'};
  cursor: pointer;

  @media (max-width: 1280px) {
    width: 300px;
    padding: 10px;
    max-width: 20vw;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100vw;
  }
`;

export const ButtonText = styled.p`
  position: relative;
  font-size: 0.8vw;

  @media screen and (max-width: 1280px) {
    font-size: 2vw;
  }

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonIcon = styled.img`
  display: flex;
  height: 40%;
  max-width: 50%;
  box-sizing: border-box;
`;
