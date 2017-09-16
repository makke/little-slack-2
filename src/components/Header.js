import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink to='/users' activeClassName="active">Users</NavLink></li>
            <li><NavLink to='/rooms' activeClassName="active">Rooms</NavLink></li>
            <li><NavLink to='/admin' activeClassName="active">Logout</NavLink></li>
            <li className="navtext">User: {this.props.userName} </li>
          </ul>
        </nav>
      </header>
    );
  }
}


export default Header;
