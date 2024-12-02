import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./page/Navbar"; // Navbar 컴포넌트 추가
import Cart from "./page/Cart";
import CartItem from "./page/CartItem";
import Modal from "./page/Modal";

function App() {
  return (
    <Router>
      {/* Navbar를 Router 내부에 추가 */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/cart-item" element={<CartItem />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </Router>
  );
}

export default App;
