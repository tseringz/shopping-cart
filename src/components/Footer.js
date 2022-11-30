import React from  'react';
import '../GlobalStyle.css';

function Footer() {
    return (
        <div className="Footer">
            <div className='Contact'>
            <h3>CONTACT</h3>
                <h3 className="grey-heading">GOODWOOD@CO.IN</h3>
               <h3 className="grey-heading">+919377012932</h3>
            </div>
            <div className='Newsletter'>
                <h3>NEWSLETTER</h3>
                <h3 className="grey-heading">ENTER YOUR MAIL</h3>
            </div>
            <div className='Connect'>
            <h3>CONNECT</h3>
                <h3 className="grey-heading">INSTAGRAM</h3>
                <h3 className="grey-heading">FACEBOOK</h3>
            </div>
        </div>
    )
}

export default Footer;