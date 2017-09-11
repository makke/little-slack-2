import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
        <li><NavLink to='/users' activeClassName="active">Users</NavLink></li>
        <li><NavLink to='/rooms' activeClassName="active">Rooms</NavLink></li>
        <li><NavLink to='/admin' activeClassName="active">Admin</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header
