import styled from 'styled-components';

export const PokedexContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 1400px;
  height: 700px;
`;

export const PokedexLeftSide = styled.div`
  background: linear-gradient(to left, #eb090d, #950406);
  width: 35%;
  height: 100%;
  border: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: inset 0 0 15px rgba(251, 56, 56, 0.5);
`;

export const PokedexRightSide = styled.div`
  background: linear-gradient(to right, #eb090d, #950406);
  width: 35%;
  height: 100%;
  border: solid black 1px;
  border-left: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: inset 0 0 15px rgba(251, 56, 56, 0.5);
`;

export const PokedexLeftContent = styled.div`
  background: linear-gradient(to left, #de0b0f, #750406);
  width: 90%;
  height: 90%;
  border: solid black 2px;
  border-left: solid #680708 2px;
  border-top: solid solid #680708 2px;
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
`;

export const PokedexRightContent = styled.div`
  background: linear-gradient(to right, #de0b0f, #750406);
  width: 90%;
  height: 90%;
  border: solid black 2px;
  border-left: solid #680708 2px;
  border-top: solid solid #680708 2px;
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
