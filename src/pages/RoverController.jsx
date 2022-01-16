import React from "react";

import Planet from "../Components/PlanetMap/Planet.jsx";
import CommandInput from "../Components/PlanetMap/CommandInput.jsx";

import "./RoverController.scss";
import { list } from "@chakra-ui/react";

const RoverController = () => {
  return (
    <div className="controller-general-container">
      <div className="map-container">
        <div className="instructions-container">
          <h3>Instructions</h3>
          <div>
            <p>-Each command moves the rover 1 step.</p>
            <br />
            <p>-Each movement ALSO changes the direction.</p>
            <br />
            <p>-The command line could be as long as you want.</p>

            <br />
            <h3>Commands</h3>
            <p className="control">f {`->`} Moves forward</p>
            <p className="control">l {`->`} Turns to the left</p>
            <p className="control">r {`->`} Turns to the right</p>
          </div>
        </div>
        <div>
          <Planet />
          <CommandInput />
        </div>
      </div>
    </div>
  );
};

export default RoverController;
