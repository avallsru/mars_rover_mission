import React from 'react';

import {obstacles} from './obstacles.jsx';
import {Robot} from "./Robot";

import "./planet.scss";

const Planet = () => {
  let totalColumns = 10;
  let totalRows = 10;
  let planetMap= [];

  for(let indexColumn = 0; indexColumn < totalColumns; indexColumn++) {
    let row = []
    for (let indexRow = totalRows-1; indexRow >= 0; indexRow--) {
      let coord = {
        coords:[indexColumn, indexRow],
        state:"empty"
      }
      row.push(coord)
    }
    planetMap.push(row)
  }

  function isObstacle(coords) {
    for(let obstaclePosition of obstacles) {
      if(coords[0] === obstaclePosition[0] && coords[1] === obstaclePosition[1]) return true;
    }
    return false;
  }

  function cellClass(cellCoords) {
    console.log(Robot
      )
    for(let obstaclePosition of obstacles) {
      if(cellCoords[0] === obstaclePosition[0] && cellCoords[1] === obstaclePosition[1]){
        return "square obstacle"
      } else if(cellCoords[0] === Robot[0] && cellCoords[1] === Robot[1]){
        return "square robot"
      }
      
    }
    return "square"
  }
    
  let mapToPrint = planetMap.map(row => {
    return(
      <div>
        {
          row.map(cell => {
            let obstaclePosition = isObstacle(cell.coords);
            return(
              <button className = {cellClass(cell.coords)} key={cell.coords} id={cell.coords} ></button>
            )
          })
        }
      </div>
    )
  })

  return(
  <div className="planet">
    {mapToPrint}
  </div>
  )
}

export default Planet;