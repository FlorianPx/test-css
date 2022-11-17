import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import FirstCard from "./components/firstCard";
import SecondCard from "./components/secondCard";
import ThirdCard from "./components/thirdCard";
import getAverageRgb from "./components/utils";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: 810px) {
    flex-direction: row;
  }
`;

function App() {
  const [color, setColor] = useState();

  const image = "https://picsum.photos/200";

  const getColor = useCallback(async () => {
    return await getAverageRgb(image).then((res) => setColor(res));
  }, []);

  useEffect(() => {
    getColor();
  }, [getColor]);

  const defaultProps = {
    color: color,
    image: image,
  };

  return (
    <>
      <div className="w-full flex justify-center mt-8">
        <h1 className="text-white text-3xl font-semibold montserrat-bold">
          Test de plusieurs framework CSS
        </h1>
      </div>
      <Container id="bodycontainer">
        <FirstCard {...defaultProps} />
        <SecondCard {...defaultProps} />
        <ThirdCard {...defaultProps} />
      </Container>
    </>
  );
}

export default App;
