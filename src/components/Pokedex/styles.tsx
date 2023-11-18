import styled from 'styled-components';

export const PokedexContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: auto;
  height: 95%;
  flex-direction: row;
  margin: 1vw;

  @media (max-width: 1280px) {
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

export const PokedexLeftSide = styled.div`
  background: radial-gradient(#eb090d, #950406);
  width: 40%;
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
    height: 50%;
    width: 100%;
    align-items: center;
    padding-bottom: 0px;
    border-radius: 0px;
  }
`;

export const PokedexRightSide = styled.div`
  background: radial-gradient(#eb090d, #950406);
  width: 34%;
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
    width: 100%;
    height: 50%;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0px;
    border-radius: 0px;
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
  justify-content: flex-start;
  flex-direction: column;
  gap: 150px;

  @media (max-width: 720px) {
    height: 100%;
    justify-content: space-evenly;
  }
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
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 5px;
  gap: 1vw;

  @media (max-width: 720px) {
    height: 95%;
    width: 90%;
    margin-top: 2px;
    border-top: none;
    border-left: 12px solid #680708;
    border-bottom: solid #680708 12px;
    border-right: 2px solid black;
    margin-left: 0;
  }
`;
