import styled from 'styled-components';

interface ButtonProps {
  selected?: boolean;
}

export const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  height: 15%;
  gap: 6px;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    height: 12%;
  }

  @media (max-width: 600px) {
    height: 10%;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    height: 10vw;
    width: 50vw;
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

  @media (orientation: landscape) and (max-width: 1366px) {
  }
`;

interface ButtonProps {
  active?: boolean;
  color?: string;
}

export const ButtonSelect = styled.button.attrs<ButtonProps>((props) => ({
  type: 'button',
  role: 'button',
  'aria-pressed': props.active ? 'true' : 'false',
}))<ButtonProps>`
  width: 100%;
  position: relative;
  background: ${(props) =>
    props.color ? props.color : 'linear-gradient(to right, #afafaf, #929292)'};
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.active ? '#000' : '#f0f0f0')};
    color: ${(props) => (props.active ? '#ffffff' : '#000000')};
  }

  @media (max-width: 1280px) {
    width: 300px;
    padding: 5px;
    max-width: 20vw;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
    max-width: 100vw;
  }

  @media (orientation: landscape) and (max-width: 1366px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100vw;
    height: 5vw;
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

  @media (orientation: landscape) and (max-width: 1366px) {
    font-size: 1.5vw;
  }
`;

export const ButtonIcon = styled.img`
  display: flex;
  height: 40%;
  max-width: 50%;
  box-sizing: border-box;
`;
