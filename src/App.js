import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Collection from '../src/pages/Collections';
import Contact from '../src/pages/Contact';
import '../src/App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Collection" element={<Collection />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
