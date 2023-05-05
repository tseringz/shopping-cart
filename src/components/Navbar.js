import React from  'react';
import '../GlobalStyle.css';
import Cart from './Cart';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [ show, setShow ] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }

   
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
                <Link to="" >
                    <li noClick={() => handleHide()}>CART(<span>0</span>)</li>
                </Link>
            </ul>
        </nav>
        <Cart show={show} onHide={handleHide}/>
        </>
    )
}

export default Navbar;