import "./App.css";
import MuiContainer from "./Components/MuiContainer";
import MuiMenu from "./Components/MuiMenu";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Routes";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="container1">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ flex: "1", marginLeft: "10px" }}>
              <h1>RateMyLandlord</h1>
            </div>
            <div style={{ flex: "5" }}></div>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <MuiMenu />
            </div>
          </div>
        </div>
        <div className="container2">
          <Routes />
        </div>
        <div className="container3">
          <p>
            made by{" "}
            <a href="https://chese.ca" target="_blank" rel="noreferrer">
              CJ Nour
            </a>
          </p>
        </div>
      </Router>
    </div>
  );
};

export default App;
