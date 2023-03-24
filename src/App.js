import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './Component/Calculator';
import Navbar from './Component/Navbar';

import Home from './Pages/Home';
import Quote from './Pages/Quote';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
