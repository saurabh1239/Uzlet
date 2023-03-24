import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Products" element={<Product />} />
        <Route exact path="/ProductList" element={<ProductList />} />
        <Route exact path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;