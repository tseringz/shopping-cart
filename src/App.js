import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Collection from '../src/pages/Collections';
import Contact from '../src/pages/Contact';
import CollectionDetails from  '../src/components/CollectionDetails';
import '../src/GlobalStyle.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Collection" element={<Collection />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/CollectionDetails" element={<CollectionDetails />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
