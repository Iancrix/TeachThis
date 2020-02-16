import React, { Component } from 'react'
import './App.css';

import Navbar from './components/Navbar'

class App extends Component {

  state = {
    navitems: [
      {
        name: "Home",
        description: "Whatever it takes",
        url: "home"
      },
      {
        name: "Communities",
        description: "Whatever it takes",
        url: "communities"
      },
      {
        name: "About us",
        description: "Contact",
        url: "contact"
      }
    ]
  }

  render() {
    return (
      <div>
        <Navbar navitems={this.state.navitems}/>
      </div>
    )
  }
}


export default App;
