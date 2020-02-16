import React, { Component } from 'react'
import '../styles/Navbar.css'

class Navitem extends Component {
    render() {
        return (
            <div className="nav-item">
                <a href={this.props.url}>
                    {this.props.name}
                </a>
                
            </div>
        )
    }
}

export default Navitem;

