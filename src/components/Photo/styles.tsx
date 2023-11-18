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
