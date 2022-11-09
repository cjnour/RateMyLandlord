import "./App.css";
import MuiMenu from "./Components/MuiMenu";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Components/Routes";
import HouseMap from "./Components/HouseMap";

const App = () => {
  return (
    <div className="App">
      <Router>
        <HouseMap/>>
      </Router>
    </div>
  );
};

export default App;
