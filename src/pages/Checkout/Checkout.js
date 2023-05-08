import "../.././GlobalStyle.css";
import TopNavbar from '../.././components/common/navbar/TopNavbar';
import Footer from '../.././components/Footer';
import { useEffect, useState } from 'react';

function CheckOut({items, cartItems}) {
    const [total, setTotal] = useState(0);
    

    useEffect(() => {
        const newTotal = cartItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price;
        }, 0);
        console.log(newTotal);
        setTotal(newTotal);
    },[total, cartItems]);


    return (
        <>
         <section>
            <div className="container">
            <TopNavbar items={items}/>
            <h1>Your Shopping Bag</h1>
            <div className="cart-wrapper">
                {cartItems.map((cartItems) => {
                    return <div key={cartItems.id} className="item-wrapper">
                        <div className="item-details">
                        <img src={cartItems.src} alt={cartItems.alt}/> 
                        </div>
                        <input type="number" name="number" min="1" max="100" value="1"/>
                        <h4>{cartItems.name}</h4>
                        <h4>₹{cartItems.price}</h4>
                    </div>
                })}  
                <h3 className="total">Total: {total}</h3>  
            </div>
            <Footer />
            </div>
        </section>
        </>
    )
}

export default CheckOut;