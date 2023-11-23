import styled from 'styled-components';

export const ListsContainer = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    height: 20%;
    position: absolute;
    margin-top: 600px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 35%;
    position: absolute;
    margin-top: 500px;
  }
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
  scrollbar-width: thin;
  border: solid 3px #000000;

  &::-webkit-scrollbar {
    width: 30px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #15a835;
    border: 2px solid black;
    height: 2vw;
  }

  &::-webkit-scrollbar-track {
    background-color: #494949;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    height: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;

    &::-webkit-scrollbar {
      width: 30px;
      display: flex;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #15a835;
      border: 2px solid black;
      height: 10vw;
    }

    &::-webkit-scrollbar-track {
      background-color: #494949;
    }
  }
`;

export const ListText = styled.li`
  font-size: 1vw;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'RetroGaming', sans-serif;
  text-shadow: -1px -1px 1px black, 1px -1px 1px black, -1px 1px 1px black,
    1px 1px 1px black;
  gap: 0.5vw;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: space-around;
    height: 100%;
    width: 150px;
  }

  @media (max-width: 720px) {
    flex-direction: row;
    width: 100%;
  }

  @media (max-width: 720px) {
    flex-direction: row;
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

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 720px) {
    width: 70%;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const TextContainer = styled.div`
  font-size: 0.8vw;

  @media screen and (max-width: 1024px) {
    font-size: 2vw;
    overflow-x: auto;
  }

  @media screen and (max-width: 480px) {
    font-size: 4vw;
    overflow-y: auto;
  }
`;
