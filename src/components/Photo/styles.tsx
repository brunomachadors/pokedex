import styled from 'styled-components';

export const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  width: 80%;
  height: 80%;
  background-image: ${(props) =>
    props.color ? props.color : 'radial-gradient(#1d1e2c, #09090d)'};
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: 85%;
`;

export const StyledTypeImage = styled.img`
  width: 55%;
`;

export const StyledItemImage = styled.img`
  width: 1.8vw;
  height: auto;

  @media screen and (max-width: 1024px) {
    width: 5vw;
  }

  @media screen and (max-width: 480px) {
    width: 8vw;
  }
`;

export const StyledItemImageLarge = styled.img`
  width: 3vw;
  height: auto;
  border: 3px solid black;
  background-color: black;
  border: 2px solid white;

  @media screen and (max-width: 1024px) {
    width: 10vw;
  }

  @media screen and (max-width: 480px) {
    width: 18vw;
  }
`;
