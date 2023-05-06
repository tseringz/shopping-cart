import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Collection from '../src/pages/Collection/Collections';
import Contact from '../src/pages/Contact/Contact';
import CollectionDetails from  '../src/components/CollectionDetails';
import CheckOut from '../src/pages/Checkout/Checkout';
import { useState } from 'react';
import '../src/GlobalStyle.css';

function App() {
  const [items, setItems] = useState(0);

  const addToCart = () => {
    setItems(items + 1);
}
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home items={items} />} />
      <Route path="/Collection" element={<Collection items={items}/>} />
      <Route path="/Contact" element={<Contact items={items}/>} />
      <Route path="/Collection/:id" element = {<CollectionDetails items={items} addToCart={addToCart} />} />
      <Route path="/CheckOut" element={<CheckOut items={items} />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

function sayHello() {
  console.log("Hello!");
}

sayHello();
export default App;
