import React from "react";
import styled from "styled-components";

import StarsRating from "./utils/starsRating";

const data = [
  { label: "Item 1" },
  { label: "Item 2" },
  { label: "Item 3" },
  { label: "Item 4" },
];

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
    width: 30%;
  }
`;
const Img = styled.img`
  height: 15rem;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;
const ItemButton = styled.button`
  border-radius: 10px;
  padding: 0.5rem;
  border: 1px gray solid;
  color: ${(props) => props.color};
  background-color: #e8e7e73d;
  font-weight: bold;
`;
const ItemButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 1rem auto;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin: 1rem 0;
`;
const Paragraph = styled.p`
  width: 100%;
  text-align: center;
  font-size: small;
  margin-bottom: 1rem;
`;

export default function FirstCard({ image, color }) {
  const items = data.map((item, index) => (
    <ItemButton color={color} key={`${index}-${item.label}`}>
      {item.label}
    </ItemButton>
  ));

  const props = {
    color: color,
    showSpan: true,
  };

  return (
    <Container>
      <Img alt='Source: "https://picsum.photos/"' src={image} id="canvas" />
      <Wrapper>
        <h2>Titre</h2>
        <StarsRating {...props} />
        <h3>Description</h3>
        <p>
          Maecenas sed bibendum diam. Cras rutrum placerat felis, eget tempor ex
          auctor quis. Maecenas iaculis orci quis est rhoncus feugiat. Donec
          elementum enim at lorem dignissim scelerisque.
        </p>
      </Wrapper>
      <Wrapper>
        <h3>Sous-titre</h3>
        <ItemButtonWrapper>{items}</ItemButtonWrapper>
      </Wrapper>
      <Paragraph>Card 1 - Made with Syled-Components</Paragraph>
    </Container>
  );
}
