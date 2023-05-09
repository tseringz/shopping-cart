import React from  'react';
import '../GlobalStyle.css';

function Footer() {
    return (
        <footer>
        <div className="Footer">
            <div className='Contact'>
            <h4>CONTACT</h4>
                <h4 className="grey-heading">GOODWOOD@CO.IN</h4>
               <h4 className="grey-heading">+919377012932</h4>
            </div>
            <div className='Newsletter'>
                <h4>NEWSLETTER</h4>
                <h4 className="grey-heading">ENTER YOUR MAIL</h4>
            </div>
            <div className='Connect'>
            <h4>CONNECT</h4>
                <h4 className="grey-heading">INSTAGRAM</h4>
                <h4 className="grey-heading">FACEBOOK</h4>
            </div>
        </div>
        </footer>
    )
}

export default Footer;