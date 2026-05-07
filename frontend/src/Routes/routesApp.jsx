import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import ProductDetail from '../pages/Products/ProductDetail';
import AddProduct from '../pages/admin/AddProduct';
import AdminDashboard from '../pages/admin/AdminDashboard';
import EditProduct from '../pages/admin/EdiProduct';
import Categories from '../pages/Categories';
import AddCategory from '../pages/AddCategory';



const RoutesApp = () => {
     return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/categories" element={< Categories/>} />
      <Route path='/add/product' element={<AddProduct />} />
      <Route path="/admin" element={<AdminDashboard />} /> 
      <Route path="/edit/product/:id" element={<EditProduct />} />   
      <Route path="/add/categories" element={<AddCategory />} />   

    </Routes>
  );
}

export default RoutesApp;
