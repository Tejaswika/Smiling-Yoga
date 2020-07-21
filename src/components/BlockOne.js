import React, { Component } from 'react';

class BlockOne extends Component {
  render() {
    return (
      <div className="blockOne">
        <img className="imageOne" src={require('./Images/678-100.jpg')} />
        <img
          className="imageTwo"
          src={require('./Images//Flat_People_doing_Yoga_01_by_MissChatz-100.jpg')}
        />
        <img className="imageThree" src={require('./Images/9087-100.jpg')} />
        <img className="imageFour" src={require('./Images/11111-100.jpg')} />
        <img className="imageFive" src={require('./Images/4567-100.jpg')} />
        <div className="button1">VIEW MORE</div>
      </div>
    );
  }
}
export default BlockOne;
