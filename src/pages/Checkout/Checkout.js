import "../.././GlobalStyle.css";
import TopNavbar from '../.././components/common/navbar/TopNavbar';
import Footer from '../.././components/Footer';
import { useEffect, useState } from 'react';
import CardDetails from "./CartDetails";

function CheckOut({items, cartItems,  incrementNumberOfItems, decrementOfItems, counter}) {
    const [total, setTotal] = useState(0);
      

    useEffect(() => {
        const newTotal = cartItems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price 
        }, 0);

        console.log(newTotal);
        setTotal(newTotal);
    },[total, cartItems]);

    // function incrementNumberOfItems(id) {
    //    const updatedQuantity = cartItems.map(obj => {
    //        if (obj.id === id) {
    //           return { ...obj, quantity: obj.quantity + 1, price: obj.price  };
    //        } else { 
    //         return obj;
    //       }
    //     });
    //      setNumberOfItems(updatedQuantity);
    //      setCounter(counter + 1);
    //      console.log(updatedQuantity);
    // }

    return (
        <>
        <section>
            <div className="container">
            <TopNavbar items={items}/>
            <h1>Your Shopping Bag</h1>
           <CardDetails cartItems={cartItems}  decrementOfItems={decrementOfItems} incrementNumberOfItems={incrementNumberOfItems} counter={counter}   total={total}/>
            <Footer />
            </div>
        </section>
        </>
    )
}

export default CheckOut;