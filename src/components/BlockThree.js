import React, { Component } from 'react';
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BlockThree extends Component {
  render() {
    return (
      <div className="blockThree">
        <img className="imagevideo" src={require('./Images/666666-100.jpg')} />
        <img className="imageDis" src={require('./Images/11111-100.jpg')} />
        <p className="bottom" style={{ display: 'inline-block' }}>
          <p className="dis">LETS MONITOR YOUR YOGA POSTURE!!</p>
          <div
            className="bottomBtn"
            style={{
              position: 'relative',
              margin: '2%',
              top: '-2vh',
              left: '5%',
            }}
          >
            <p>OPEN</p>
          </div>
        </p>
      </div>
    );
  }
}
export default BlockThree;
