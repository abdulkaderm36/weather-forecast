import React from "react";
import "./App.css";

import ScreenLoader from "./components/ScreenLoader.js";
import CardsHolder from "./components/CardsHolder";

function App() {
  return (
    <div className="App">
      <ScreenLoader />
      <h1 style={{ fontSize: "4rem" }}>Weather Forecast</h1>
      <CardsHolder />
    </div>
  );
}

export default App;
