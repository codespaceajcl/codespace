import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Container/Home/Home';
import About from './Container/About/About';
import Header from './Component/Header/Header';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
};
export default App