import React from "react";
import "./style.css";
import "./mobile.css";
import Sidebar from "./components/sidebar";
import LabelTop from "./components/LabelTop";
import BlockOne from "./components/BlockOne";
import BlockTwo from "./components/BlockTwo";
import BlockThree from "./components/BlockThree";
import BlockFour from "./components/BlockFour";
import BlockFive from "./components/BlockFive";

function App() {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="row">
        <div className="col">
          <LabelTop />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <BlockOne />
        </div>
        <div className="col-6">
          <BlockTwo />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <BlockThree />
        </div>
        <div className="col-6">
          <BlockFour />
        </div>
      </div>
      <div className="row blockFive">
        <BlockFive />
      </div>
    </div>
  );
}

export default App;
