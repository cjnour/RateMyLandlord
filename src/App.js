import "./App.css";
import MuiMenu from "./Components/MuiMenu";

const App = () => {
  return (
    <div className="App">
      <div className="container1">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h1>RateMyLandlord</h1>
          </div>
          <div style={{ flex: "1" }}>
            <MuiMenu />
          </div>
        </div>
      </div>
      <div className="container2">
        <h1>the good stuff</h1>
      </div>
      <div className="container3">
        <p>
          made by{" "}
          <a href="https://chese.ca" target="_blank" rel="noreferrer">
            CJ Nour
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
