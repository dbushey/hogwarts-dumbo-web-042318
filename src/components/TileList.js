import React, { Component } from 'react';
import Tile from './Tile.js'


class TileList extends Component {
  createTileComponents = () => {
    console.log(this.props);
    return this.props.hogs.map(hog => <Tile key={hog.name} pig={hog}/>)
  }

  render() {

    return (
        <div className="ui cards">
          {this.createTileComponents()}
        </div>

    )
  }
}

export default TileList;
