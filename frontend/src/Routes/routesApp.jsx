import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import ProductDetail from '../pages/Products/ProductDetail';
<<<<<<< HEAD
import Categories from '../pages/Categories';
import Futter from '../components/Futter';
=======
import AddProduct from '../pages/admin/AddProduct';
import AdminDashboard from '../pages/admin/AdminDashboard';
import EditProduct from '../pages/admin/EdiProduct';

>>>>>>> f1d339aea8acdb27f4944a569eb4c0b781d33ce6

const RoutesApp = () => {
     return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
<<<<<<< HEAD
      <Route path="/categories" element={< Categories/>} />
      <Route path="/fottor" element={< Futter/>} />

      
      
=======
      <Route path='/add/product' element={<AddProduct />} />
      <Route path="/admin" element={<AdminDashboard />} /> 
      <Route path="/edit/product/:id" element={<EditProduct />} />    
>>>>>>> f1d339aea8acdb27f4944a569eb4c0b781d33ce6
    </Routes>
  );
}

export default RoutesApp;
