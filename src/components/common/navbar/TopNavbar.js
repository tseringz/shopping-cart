import React from  'react';
import '../.././.././GlobalStyle.css';
import Cart from '.././cart/Cart';
import { Link } from 'react-router-dom';

function TopNavbar({items}) {

    return (
           <div className="nav-wrapper">
            <div className='brand-small'>
                <Link to="/">
                 <span>GOODWOOD</span></Link>
            </div>
            <ul className="topNav-bar">
                <li> <Link to="/Collection">
                    COLLECTION</Link>
             </li>
                <li><Link to="/Contact">
                    CONTACT</Link>
               </li>
                <li>
                    <Cart items={items} />
                </li>
            </ul>
            </div>
    )
}

export default TopNavbar;