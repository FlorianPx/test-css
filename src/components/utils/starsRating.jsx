import React, { useState } from "react";
import styled from "styled-components";

import { Star } from "./svgs";

const Wrapper = styled.div`
  margin: 1rem 0;
`;

const Button = styled.button`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const Span = styled.span`
  margin-left: 1rem;
`;

const StarsRating = ({
  color,
  emoticone = Star(),
  size = "1rem",
  showSpan = false,
}) => {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(0);

  return (
    <Wrapper>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Button
            type="button"
            key={index}
            color={index <= (hover || rating) ? color : "#ccc"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            size={size}
          >
            {emoticone}
          </Button>
        );
      })}
      {showSpan && <Span>{rating}/5</Span>}
    </Wrapper>
  );
};

export default StarsRating;
