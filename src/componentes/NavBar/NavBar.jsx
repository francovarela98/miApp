import React from 'react'
import CartWidget from './CartWidget'
import './navBar.css'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="nav-main"> 
        <ul className="nav-list">
            <li>
              <NavLink className="styleLink" to='/'>
                <img width="50px" src="./img/ceramix.png" alt="logo" />
              </NavLink>
            </li>
            <li>
              <NavLink className="styleLink" to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className="styleLink" to='/category/taza'>Tazas</NavLink>
            </li>
            <li>
              <NavLink className="styleLink" to='/category/cuenco'>Cuencos</NavLink>
            </li>
            <CartWidget></CartWidget>
        </ul>
        
    </nav>
  )
}

export default NavBar
