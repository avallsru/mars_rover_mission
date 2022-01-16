import React, { useEffect, useState } from "react";

import mapSetUp from "../../logic/mapSetUp";
import defineObstacles from "../../logic/defineObstacles";

import "./EmptyPlanet.scss";

const EmptyPlanet = () => {
  let mapToPrint = mapSetUp("empty");

  useEffect(() => {
    defineObstacles();
  }, []);
  return (
    <div className="helper-map">
      <p>
        Here we give you a map of the planet to know the places where you will
        find obstacles (and not place there the robot)
      </p>
      <div id="empty-planet" className="planet coords">
        {mapToPrint}
      </div>
    </div>
  );
};

export default EmptyPlanet;
