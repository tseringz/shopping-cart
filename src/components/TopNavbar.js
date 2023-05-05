import React from  'react';
import '../GlobalStyle.css';
import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <nav className='top-navbar'>
            <div className='brand-small'>
            <Link to="/">
            <a href="#">GOODWOOD</a>
                </Link>
            </div>
            <ul className='navlinks-wrapper'>
                <Link to="/Collection">
                    <li>COLLECTION</li>
                </Link>
                <Link to="/Contact">
                    <li>CONTACT</li>
                </Link>
                <Link to="/Contact">
                    <li>CART(<span>{props.items}</span>)</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;