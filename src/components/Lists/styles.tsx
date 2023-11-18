import styled from 'styled-components';

export const ListsContainer = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  overflow-y: auto;
`;

export const ListText = styled.li`
  font-size: 1vw;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'RetroGaming', sans-serif;
  text-shadow: -1px -1px 1px black, 1px -1px 1px black, -1px 1px 1px black,
    1px 1px 1px black;
  margin-left: 10%;

  @media (max-width: 720px) {
    margin-left: 5%;
  }
`;

export const WhiteScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 45%;
  background-image: linear-gradient(to bottom, #f1f1f4, #a5a5a5);
  border: 3px solid black;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 10px;
`;

export const BlackScreenList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;

  @media (max-width: 720px) {
    width: 60%;
  }
`;
