import React from "react";

import CoordsInputs from "../Components/ConfigureRobot/CoordInputs";
import DirectionSelector from "../Components/ConfigureRobot/DirectionSelector";

const Home = () => {
  return (
    <div>
      <CoordsInputs />
      <DirectionSelector />
    </div>
  );
};

export default Home;