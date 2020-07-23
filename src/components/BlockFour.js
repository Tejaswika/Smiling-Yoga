import React, { Component } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
          </div>
        </p>
      </div>
    );
  }
}
export default BlockFour;
