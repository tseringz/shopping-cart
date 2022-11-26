import React from  'react';
import '../App.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav>
            <ul className='navlinks-wrapper'>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/Collection">
                    <li>Collection</li>
                </Link>
                <Link to="/Contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;