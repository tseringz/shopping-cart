import React from  'react';
import '../GlobalStyle.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav>
            <ul className='navlinks-wrapper'>
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <Link to="/Collection">
                    <li>COLLECTION</li>
                </Link>
                <Link to="/Contact">
                    <li>CONTACT</li>
                </Link>
                <Link to="/Contact">
                    <li>CART(<span>0</span>)</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;