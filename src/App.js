import "./App.css";
import MuiContainer from "./Components/MuiContainer";
import MuiMenu from "./Components/MuiMenu";

const App = () => {
  return (
    <div className="App">
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
        <h1>the good stuff</h1>
        <MuiContainer />
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
