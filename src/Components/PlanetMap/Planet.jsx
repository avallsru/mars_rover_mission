import React, { useEffect, useState } from 'react';

import {obstacles} from './obstacles.jsx';
import {Robot} from "./Robot";

import "./planet.scss";

const Planet = () => {
  let totalColumns = 10;
  let totalRows = 10;
  let planetMap= [];
  const [robotToPrint, setRobotToPrint] = useState([]);
  // const [mapToPrint, setMapToPrint] = useState([])

  useEffect(() => {
    let obstacleToPrint;
    for(let obstaclePosition of obstacles) {
      obstacleToPrint = document.getElementById(`${obstaclePosition[0]},${obstaclePosition[1]}`)
      obstacleToPrint.classList= "square obstacle";      
    }
    let robotCoords = Robot()
    let robot = document.getElementById(`${robotCoords[0]},${robotCoords[1]}`)
    robot.classList = "square robot west";
  }, [])

  for(let indexColumn = 0; indexColumn < totalColumns; indexColumn++) {
    let row = []
    for (let indexRow = totalRows-1; indexRow >= 0; indexRow--) {
      let mapPlace = {
        x: indexColumn,
        y: indexRow,
        coord:[indexColumn, indexRow],
        state:"empty"
      }
      row.push(mapPlace)
    }
    planetMap.push(row)
    
  }

  

  // let robotCoords = Robot();

  // function cellClass(xCoord, yCoord) {    
  //   for(let obstaclePosition of obstacles) {
  //     if(xCoord === obstaclePosition[0] && yCoord=== obstaclePosition[1]){
  //       return "square obstacle"
  //     } else if(xCoord === robotCoords[0] && yCoord=== robotCoords[1]){
  //       return "square robot"
  //     }
      
  //   }
  //   return "square"
  // }

    
  let mapToPrint = planetMap.map(row => {
    return(
      <div>
        {
          row.map(cell => {
            return(
              <div 
                // className = {cellClass(cell.x, cell.y)} 
                className="square"
                key={cell.coords} 
                id={`${cell.x},${cell.y}`}
               />
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