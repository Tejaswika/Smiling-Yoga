import React, { Component } from "react";

class BlockFour extends Component {
  render() {
    return (
      <div className="blockFour">
        <img
          className="imageDis"
          src={require("./Images/Mesa de trabajo 1 copia-100.jpg")}
        />
        <p className="bottom" style={{ display: "inline-block" }}>
          <p className="dis">CHECK YOUR IMPROVEMENTS</p>
          <div className="bottomBtn">
            <p>
              OPEN
            </p>
          </div>
        </p>
      </div>
    );
  }
}
export default BlockFour;
