/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Admin from './pages/Admin';
import CarAdd from './pages/CarAdd';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add-car" element={<CarAdd />} />
        <Route path ="/login" element = {<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
