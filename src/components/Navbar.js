import React, { Component } from 'react'
import '../styles/Navbar.css'

import Navitem from './Navitem';

class Navbar extends Component {

    state = {

    }

    render() {
        return (
            <div className="nav-container">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1200px-YouTube_full-color_icon_%282017%29.svg.png" 
                    width="100" height="60"></img>
                </div>
                {this.props.navitems.map(
                    navitem => <Navitem name={navitem.name}
                                description={navitem.description}   
                                url={navitem.url}/>
                )}

                <div className="search-bar">
                    <input className="input-bar" type="text"></input>
                </div>
            </div>
        )
    }
}

export default Navbar;
