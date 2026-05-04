import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import ProductDetail from '../pages/Products/ProductDetail';
import Categories from '../pages/Categories';
import Futter from '../components/Futter';

const RoutesApp = () => {
     return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/categories" element={< Categories/>} />
      <Route path="/fottor" element={< Futter/>} />

      
      
    </Routes>
  );
}

export default RoutesApp;
