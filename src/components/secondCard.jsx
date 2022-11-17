import React from "react";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import StarsRating from "./utils/starsRating";
import { Heart } from "./utils/svgs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0px 8px 6px black;
  background-color: whitesmoke;
  margin-top: 2rem;

  @media (min-width: 768px) {
    width: 35%;
  }
`;
const Img = styled.img`
  height: 8rem;
  width: 8rem;
  object-fit: cover;
  border-radius: 10px 0 0 0;
`;
const PartOne = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px darkgray solid;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  border-left: 1px darkgray solid;
`;
const PartTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
  margin: 1rem 0;
`;
const Paragraph = styled.p`
  width: 100%;
  text-align: center;
  font-size: small;
  margin-bottom: 1rem;
`;

export default function SecondCard({ image, color }) {
  const marginTop = css`
    margin-top: 1rem;
  `;

  const props = {
    color: color,
    emoticone: Heart(),
    size: "1.5rem",
  };

  return (
    <Container>
      <PartOne>
        <Img alt='Source: "https://picsum.photos/"' src={image} id="canvas" />
        <Wrapper>
          <h2>Nom de l'artiste</h2>
          <div css={marginTop}>
            <p>Titre de l'album</p>
            <p>Année de sortie</p>
          </div>
        </Wrapper>
      </PartOne>
      <PartTwo>
        <p>Note de l'album</p>
        <StarsRating {...props} />
      </PartTwo>
      <Paragraph>Card 2 - Made with @Emotion</Paragraph>
    </Container>
  );
}
