import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Collection from '../src/pages/Collection/Collections';
import Contact from '../src/pages/Contact/Contact';
import CollectionDetails from  '../src/components/CollectionDetails';
import CheckOut from '../src/pages/Checkout/Checkout';
import { useState } from 'react';
import '../src/GlobalStyle.css';

function App() {
  const [items, setItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState([]);
  const [counter, setCounter] = useState(0);

  
 const addToCart = (selectedItem) => {
      const isItemRepeated = cartItems.find(cartItem => cartItem.id === selectedItem.id);
      if (isItemRepeated === undefined) {
        const  updatedCartItems = [...cartItems, selectedItem];
        const newUpdatedCart = updatedCartItems.map(obj => {
          if (obj.id === selectedItem.id) {
            return { ...obj, quantity: 1 };
          } else {
            return obj;
          }
        });
        setCartItems(newUpdatedCart);
        setItemQuantity([...itemQuantity, {id: selectedItem.id, quantity: 1, price: selectedItem.price}]);
        setItems(items + 1);
        console.log(cartItems);
      } else {
        const updatedQuantity = cartItems.map(obj => {
          if (obj.id === selectedItem.id) {
            return { ...obj, quantity: obj.quantity + 1, price: obj.price + selectedItem.price };
          } else {
            return obj;
          }
        });
        setCartItems(updatedQuantity);
        setItems(items + 1);
        console.log(cartItems);
      };
      }

      function incrementNumberOfItems(id) {
        const updatedQuantity = cartItems.map(obj => {
            if (obj.id === id) {
               return { ...obj, quantity: obj.quantity + 1, price: obj.price + 4000 };
            } else { 
             return obj;
           }
         });
          setCartItems(updatedQuantity);
          console.log(cartItems);
          setCounter(counter + 1);
     }

     function decrementOfItems(id) {
      const updatedQuantity = cartItems.map(obj => {
          if (obj.id === id) {
             return { ...obj, quantity: obj.quantity - 1, price: obj.price - 4000 };
          } else { 
           return obj;
         }
       });
        setCartItems(updatedQuantity);
        console.log(cartItems);
        setCounter(counter + 1);
   }

  return (
    <HashRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home items={items} />} />
      <Route path="/Collection" element={<Collection items={items}/>} />
      <Route path="/Contact" element={<Contact items={items}/>} />
      <Route path="/Collection/:id" element = {<CollectionDetails items={items} addToCart={addToCart} />} />
      <Route path="/CheckOut" element={<CheckOut counter={counter} decrementOfItems={decrementOfItems} incrementNumberOfItems={incrementNumberOfItems}  cartItems={cartItems} items={items} />} />
    </Routes>
    </div>
    </HashRouter>
  );
}


export default App;
