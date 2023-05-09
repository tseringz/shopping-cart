import "../.././GlobalStyle.css";
import TopNavbar from '../.././components/common/navbar/TopNavbar';
import Footer from '../.././components/Footer';
import { useEffect, useState } from 'react';

function CheckOut({items, cartItems}) {
    const [total, setTotal] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(0);
    

    useEffect(() => {
        const newTotal = cartItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price;
        }, 0);

        console.log(newTotal);
        setTotal(newTotal);
    },[total, cartItems]);

    function onChange(e) {
        const newNumberOfItems = e.target.value;
        setNumberOfItems(newNumberOfItems);
    }

    function incrementNumberOfItems() {
        const totalNumberOfItems = numberOfItems + 1;
        setNumberOfItems(totalNumberOfItems);
    }

    function decrementNumberOfItems(id) {
        const totalNumberOfItems = numberOfItems - 1;
        setNumberOfItems(totalNumberOfItems);
    }

    return (
        <>
         <section>
            <div className="container">
            <TopNavbar items={items}/>
            <h1>Your Shopping Bag</h1>
            <div className="cart-wrapper">
                {cartItems.map((cartItems, index) => {
                    return <div key={index} className="item-wrapper">
                        <div className="item-details">
                        <img src={cartItems.src} alt={cartItems.alt}/> 
                        </div>
                        <div className="input-wrapper">
                        <button type="button"  className="sign" onClick={decrementNumberOfItems(index)}>-</button><input type="number" name="number" min="1" value={numberOfItems} max="100" onChange={onChange}/><button type="button" className="sign" onClick={incrementNumberOfItems}>+</button></div>
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