import React from  'react';
import '../GlobalStyle.css';


function Cart(props) {

    const show = props.show;

    return (
        <>
        <div className={`card-container ${show ? "" : "hide-cart"}`} style={{display: show.display}}>
            <h3>Your Shopping Cart</h3>
        </div>
        </>
    )
}

export default Cart;