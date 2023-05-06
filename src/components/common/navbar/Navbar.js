import React from  'react';
import '../../.././GlobalStyle.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <>
        <nav>
            <ul className='navlinks-wrapper'>
                <Link to="/Collection">
                    <li>COLLECTION</li>
                </Link>
                <Link to="/Contact">
                    <li>CONTACT</li>
                </Link>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;