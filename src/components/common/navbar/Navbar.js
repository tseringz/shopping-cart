import React from  'react';
import '../../.././GlobalStyle.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <>
        <nav>
            <ul>
                <li><Link to="/Collection">
                    COLLECTION
                    </Link></li>
                    <li>
                    <Link to="/Contact">
                    CONTACT
                    </Link>
                    </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;