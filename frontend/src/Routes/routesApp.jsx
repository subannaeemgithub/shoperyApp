import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import ProductDetail from '../pages/Products/ProductDetail';
import AddProduct from '../pages/Products/AddProduct';
import AdminPage from '../pages/Products/AdminPage';


const routesApp = () => {
     return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path='/add/product' element={<AddProduct />} />
      <Route path="/admin" element={<AdminPage />} />

      
    </Routes>
  );
}

export default routesApp
