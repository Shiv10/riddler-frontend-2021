import styled from "styled-components";
import Brice from "./assets/Brice-Bold.otf";
import { Link as LinkRoute } from "react-router-dom";

export const PlaySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  background-color: black;
  min-height: calc(100vh - 80px);
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;

  @media screen and (max-width: 500px) {
    margin-bottom: 0.7rem;
  }
`;

export const TrackBox = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  padding: 0.3rem;
  border-radius: 5px;
  background-color: var(--map-bg);

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Trackname = styled.h3`
  @font-face {
    font-family: Brice;
    src: url(${Brice}) format("truetype");
  }

  font-family: Brice;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border: 3px solid var(--map-bg);
  border-radius: 5px;
  background-color: black;
  color: white;
  position: relative;
  font: "Poppins";
  margin-bottom: 1rem;

  @media screen and (max-width: 500px) {
    margin-bottom: 0.7rem;
  }
`;

export const QuestionBox = styled.div`
  height: 60vh;
  width: 100%;
  padding: 0 1rem;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-right: 5rem;
  margin-right: 0.25rem;

  ::-webkit-scrollbar {
    display: block;
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--map-bg);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track-piece:start {
    background: transparent;
  }

  @media screen and (max-width: 900px) {
    padding-right: 4rem;
  }

  @media screen and (max-width: 500px) {
    padding-right: 3rem;
  }
`;

export const QuestionContent = styled.p`
  font-family: "Poppins";
  line-height: 3;
  font-size: 1.2rem;

  

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;

  img {
    width: 100%;
    max-width: 600px;
  }
`;

export const LinkText = styled(LinkRoute)`
  font-family: "Poppins";
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  color: white;

  &:hover {
      opacity: 0.9;
  }
  
  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const QBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  gap: 1rem;
  width: 4rem;

  button {
    padding: 0;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 3rem;
  }

  @media screen and (max-width: 500px) {
    bottom: 0.5rem;
    right: 0.75rem;
    width: 2.5rem;
  }

  @media screen and (max-width: 400px) {
    width: 2rem;
  }
`;

export const AContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.7rem;
  }
`;

export const AnswerBox = styled.input`
  border: 3px solid var(--map-bg);
  background-color: black;
  color: white;
  padding: 1rem;
  width: 100%;
  outline: none;
  border-radius: 5px;
  font: "Poppins";

  ::placeholder {
    color: white;
    font: "Poppins";
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const OurButton = styled(LinkRoute)`
  border-radius: 30px;
  white-space: nowrap;
  padding: 10px 20px;
  color: black;
  font-size: 16px;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 6px solid rgba(254, 49, 118, 1);
  background-color: var(--map-bg);
  display: inline-block;
  position: relative;
  font-family: Ligconsolata;

  &:hover {
    top: 4px;
    border-bottom: 4px solid rgba(254, 49, 118, 1);
  }

  &:active {
    top: 6px;
    border: none;
  }
`;
