import React from 'react'
import CartWidget from './CartWidget'
import './navBar.css'

function NavBar() {
  return (
    <nav className="nav-main"> 
        <ul className="nav-list">
            <li>Link 1</li>
            <li>link 2</li>
            <li>Link 3</li>
            <CartWidget></CartWidget>
        </ul>
        
    </nav>
  )
}

export default NavBar
