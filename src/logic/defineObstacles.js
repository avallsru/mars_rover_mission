import obstacles from "../Components/PlanetMap/obstacles";

export default function defineObstacles() {
  let obstacleToPrint;
  for (let obstaclePosition of obstacles) {
    obstacleToPrint = document.getElementById(
      `${obstaclePosition[0]},${obstaclePosition[1]}`
    );
    obstacleToPrint.className += " obstacle";
  }
}
