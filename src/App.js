import logo from "./logo.svg";

import CoordsInputs from "./Components/ConfigureRobot/CoordInputs";
import DirectionSelector from "./Components/ConfigureRobot/DirectionSelector";
import Planet from "./Components/PlanetMap/Planet.jsx";
import CommandInput from "./Components/PlanetMap/CommandInput.jsx";

// import './App.css';

function App() {
  return (
    <div className="App">
      <CoordsInputs />
      <DirectionSelector />
      <Planet />
      <CommandInput />
    </div>
  );
}

export default App;
