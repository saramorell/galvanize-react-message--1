import React, { Component } from 'react';


class Header extends Component {



    render() {
        return (
          <nav className="navbar navbar-dark bg-info">
            <div className="navbar-brand">Message Board</div>
            <button type="button" className="btn btn-light" onClick={this.props.composeToggle}>+</button>
          </nav>
        )
    }
}

export default Header;
