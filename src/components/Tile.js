import React, { Component } from 'react';

class Tile extends Component {
  render() {
    return (
        <div className="tile">
        <h1>This is the Tile Component</h1>

        <div className="ui card">
         <div className="image">
           <img src="/images/avatar2/large/kristy.png" />
         </div>
         <div className="content">
           <a className="header">{this.props.pig.name}</a>
         </div>
         <div className="extra content">

         </div>
        </div>



        </div>

    )
  }
}

export default Tile;
