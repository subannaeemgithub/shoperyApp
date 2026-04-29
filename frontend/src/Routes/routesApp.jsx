import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage';

const routesApp = () => {
     return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default routesApp
