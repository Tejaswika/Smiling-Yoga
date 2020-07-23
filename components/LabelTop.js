import React, { Component } from "react";

class LabelTop extends Component {
  render() {
    return (
      <label className="labeltop">
        <h1 className="labelHeading">SMILING YOGA</h1>
        <img className="labelImage" src={require("./Images/7899-100.jpg")} />
      </label>
    );
  }
}
export default LabelTop;
