import React, { Component } from "react";

class BlockTwo extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="blockTwo">
          <div className="music">
            <img
              className="musicIcon"
              src={require("./Images/Artboard 90-100.jpg")}
            />
            <p className="song">SONG</p>
            <p className="songArtist">SONG ARTIST</p>
          </div>
          <div className="music">
            <img
              className="musicIcon"
              src={require("./Images/Artboard 90-100.jpg")}
            />
            <p className="song">SONG</p>
            <p className="songArtist">SONG ARTIST</p>
          </div>
          <div className="music">
            <img
              className="musicIcon"
              src={require("./Images/Artboard 90-100.jpg")}
            />
            <p className="song">SONG</p>
            <p className="songArtist">SONG ARTIST</p>
          </div>
          <div className="music" id="Artisthidden">
            <img
              className="musicIcon"
              src={require("./Images/Artboard 90-100.jpg")}
            />
            <p className="song">SONG</p>
            <p className="songArtist">SONG ARTIST</p>
          </div>

          <div className="button2" style={{ bottom: "-9vh" }}>
            VIEW MORE
          </div>
        </div>
      </div>
    );
  }
}
export default BlockTwo;
