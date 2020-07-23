import React, { Component } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BlockFive extends Component {
  render() {
    return (
      <div className="blockFive">
        <div className="row">
          <div className="dis1 col-4">
            <img className="image" src={require("./Images/3455-100.jpg")} />
            <p className="bottom">
              <div className="disBtn" style={{ position: "absolute" }}>
                <p>
                  VIEW
                  <FontAwesomeIcon icon={faCaretDown} />
                </p>
              </div>
            </p>
          </div>
          <div className="dis1 col-4">
            <img className="image" src={require("./Images/34-100.jpg")} />
            <p className="bottom">
              <div className="disBtn" style={{ position: "absolute" }}>
                <p>
                  VIEW
                  <FontAwesomeIcon icon={faCaretDown} />
                </p>
              </div>
            </p>
          </div>
          <div className="dis1 col-4">
            <img className="image" src={require("./Images/6789-100.jpg")} />
            <p className="bottom">
              <div className="disBtn" style={{ position: "absolute" }}>
                <p>
                  VIEW
                  <FontAwesomeIcon icon={faCaretDown} />
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="dis1 col-4">
            <img className="image" src={require("./Images/345-100.jpg")} />
            <p className="bottom">
              <div className="disBtn" style={{ position: "absolute" }}>
                <p>
                  VIEW
                  <FontAwesomeIcon icon={faCaretDown} />
                </p>
              </div>
            </p>
          </div>
          <div className="dis1 col-4">
            <img className="image" src={require("./Images/342-100.jpg")} />
            <p className="bottom">
              <div className="disBtn" style={{ position: "absolute" }}>
                <p>
                  VIEW
                  <FontAwesomeIcon icon={faCaretDown} />
                </p>
              </div>
            </p>
          </div>
          <div className="dis1 col-4">
            <img className="image" src={require("./Images/4567-100.jpg")} />
            <p className="bottom">
              <div className="disBtn" style={{ position: "absolute" }}>
                <p>
                  VIEW
                  <FontAwesomeIcon icon={faCaretDown} />
                </p>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default BlockFive;
