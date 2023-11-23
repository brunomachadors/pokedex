import styled from 'styled-components';

export const PokedexContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: auto;
  height: 95%;
  flex-direction: row;
  margin: 1vw;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    flex-direction: column-reverse;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 720px) {
  }

  @media (max-width: 480px) {
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

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 50%;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border-radius: 0px;
  }

  @media (max-width: 720px) {
  }

  @media (max-width: 480px) {
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

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 50%;
    flex-direction: row;
    margin: 0;
    padding: 0;
    border-radius: 0px;
    box-shadow: none;
    border: none;
  }

  @media (max-width: 720px) {
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
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    flex-direction: column-reverse;
    margin: 0;
    padding: 0;
    border-radius: 0px;
    padding: 0;
    margin-bottom: 0;
    border-left: none;
    border-top: none;
    justify-content: space-around;
    border: none;
  }

  @media (max-width: 720px) {
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

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border: none;
  }
`;
