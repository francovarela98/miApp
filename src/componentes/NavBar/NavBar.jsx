import React from 'react'
import CartWidget from './CartWidget'
import './navBar.css'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="nav-main"> 
        <ul className="nav-list">
            <li>
              <NavLink className="styleLink" to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className="styleLink"  to='/articulos'>Artículos</NavLink>
            </li>
            <CartWidget></CartWidget>
        </ul>
        
    </nav>
  )
}

export default NavBar
