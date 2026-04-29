import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import ProductDetail from '../pages/Products/ProductDetail';

const routesApp = () => {
     return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      
    </Routes>
  );
}

export default routesApp
