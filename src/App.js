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
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
      </div>
      <div
        className="row col-8"
        style={{ marginLeft: "20rem", marginRight: "5rem" }}
      >
        <div className="col-lg-12 col-md-10 col-sm-8 col-6">
          <LabelTop />
        </div>
      </div>
      <div className="row">
        <div
          className=" row col-8"
          style={{ marginLeft: "20rem", marginRight: "5rem" }}
        >
          <div className="col-lg-6 col-md-10 col-sm-8 col-6">
            <BlockOne />
          </div>
          <div className="col-lg-6 col-md-10 col-sm-8 col-6">
            <BlockTwo />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row col-lg-8 col-md-10 col-10" id="rowMid">
          <div className="col-6">
            <BlockThree />
          </div>
          <div className="col-6">
            <BlockFour />
          </div>
        </div>
      </div>
      <div className="row col-lg-8 col-md-12 col-12" id="rowMid">
        <div className="col-12">
          <BlockFive />
        </div>
      </div>
    </div>
  );
}

export default App;
