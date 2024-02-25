import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <ul>
        <li >
            <Link to="/Home">Home</Link>
            </li>
            <li >
            <Link to="/About">About</Link>
            </li>
            <li >
            <Link to="/Education">Education</Link>
            </li>
            <li >
            <Link to="/Contact">Contacy</Link>
            </li>
    </ul>
      
    </div>
  )
}
export default Navbar;