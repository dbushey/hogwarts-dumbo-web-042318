import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import porkersData from '../porkers_data';
import TileList from './TileList'
import Filter from './Filter'

class App extends Component {
  render() {
    return (
      <div className="App ui container">
        <header>
          < Nav />
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="ten wide column centered">
              < Filter />
            </div>
            <div className="sixteen wide column centered">
              < TileList
                hogs = {porkersData}
              />
            </div>
          </div>
        </div>






      </div>
    )
  }
}

export default App;
