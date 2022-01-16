import React from "react";
import { Container } from "@chakra-ui/react";

import CoordsInputs from "../Components/ConfigureRobot/CoordInputs";
import DirectionSelector from "../Components/ConfigureRobot/DirectionSelector";

import "./Home.scss";

const Home = () => {
  return (
    <div className="principal-container">
      <div className="text-container">
        <div className="title">
          <h1>Welcome to</h1>
          <h1>MARS ROVER CONTROLER</h1>
        </div>
        <div className="description">
          <p>
            Now you are able to control a vehicle that is on Mars's surface.
          </p>
          <p>First of all, you have to set your robot. </p>
          <p>
            Decide the direction and the exactly point where you want to begin.
          </p>
        </div>
      </div>
      <div>
        <DirectionSelector />
        <CoordsInputs />
      </div>
    </div>
  );
};

export default Home;
