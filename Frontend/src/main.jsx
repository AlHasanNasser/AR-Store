import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop/shop';
import Collections from './pages/Collections/collections';
import Contactus from './pages/Contact US/contactus';
import Page from './pages/Page/Page';
import Accessories from './pages/Accessories/Accessories';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/page" element={<Page />} />
        <Route path="/accessories" element={<Accessories />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  </StrictMode>,
)
