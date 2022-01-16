import React from "react";
import { Container } from "@chakra-ui/react";

import CoordsInputs from "../Components/ConfigureRobot/CoordInputs";
import DirectionSelector from "../Components/ConfigureRobot/DirectionSelector";

const Home = () => {
  return (
    <div className="principal_container">
      <Container size="md">
        <DirectionSelector />
        <CoordsInputs />
      </Container>
    </div>
  );
};

export default Home;
