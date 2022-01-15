import React from "react";

import Planet from "../Components/PlanetMap/Planet.jsx";
import CommandInput from "../Components/PlanetMap/CommandInput.jsx";

const RoverController = () => {
  return (
    <div>
      <Planet />
      <CommandInput />
    </div>
  );
};

export default RoverController;
