import styled from 'styled-components';

interface ButtonProps {
  selected?: boolean;
}

export const ButtonContainer = styled.div`
  display: flex;
  width: 70%;
  height: 12%;
  gap: 6px;
  cursor: pointer;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.selected ? '#325a6d' : '#437c90')};
  color: ${(props) => (props.selected ? '#b9e9f9' : 'white')};
  width: 25%;
  height: 100%;
  font-family: 'RetroGaming', sans-serif;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-top: ${(props) => (props.selected ? '2px solid #1c2d37' : 'none')};
  border-left: ${(props) => (props.selected ? '2px solid #1c2d37' : 'none')};
  border-right: ${(props) => (props.selected ? 'none' : '3px solid #4990a9')};
  border-bottom: ${(props) => (props.selected ? 'none' : '3px solid #4990a9')};
  transition: background-color 0.1s;
  cursor: pointer;

  @media (max-width: 1280px) {
    font-size: 9px;
  }

  @media (max-width: 720px) {
    font-size: 6px;
  }
`;

export const ButtonSelect = styled.button`
  width: 100%;
  position: relative;
  background: ${(props) =>
    props.color ? props.color : 'linear-gradient(#1d1e2c, #09090d)'};
  background-color: ${(props) => (props.color ? 'transparent' : '#1d1e2c')};
  cursor: pointer;
`;

export const ButtonText = styled.p`
  position: relative;
  margin-bottom: -100px;
  font-size: 12px;
  color: #350000;

  @media (max-width: 1280px) {
    font-size: 10px;
  }

  @media (max-width: 720px) {
    font-size: 8px;
  }
`;
