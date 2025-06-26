// Filename - App.js

import React, { useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";

import { AuthContext } from './context/AuthContext.jsx';
import { Logout } from "./Logout.jsx";

import Header from "./components/Header.jsx";
import MainHome from "./components/MainHome.jsx";
import UserLogin from "./Users/UserLogin.jsx";
import Auth from "./Users/Auth.jsx";
import Cart from "./components/Cart.jsx";
import PaymentSuccessPage from './components/PaymentSuccessPage.jsx';

import Dashboard from "./components/admin/Dashboard.jsx";
import Login from "./components/admin/Login.jsx";

import Category from './components/admin/Category.jsx';
import CreateCategory from './components/admin/CreateCategory.jsx';
import EditCategory from './components/admin/EditCategory.jsx';

import Courses from "./components/admin/Courses.jsx";
import CreateCourse from "./components/admin/CreateCourse.jsx";
import EditCourse from "./components/admin/EditCourse.jsx";

import CourseContent from "./components/admin/CourseContent.jsx";
import CreateCourseContent from "./components/admin/CreateCourseContent.jsx";
import EditCourseContent from "./components/admin/EditCourseContent.jsx";

import Feedback from "./components/admin/Feedback.jsx";
import CreateFeedback from "./components/admin/CreateFeedback.jsx";
import EditFeedback from "./components/admin/EditFeedback.jsx";

import Payments from "./components/admin/Payments.jsx";
import Users from "./components/admin/Users.jsx";

import { ToastContainer, toast } from 'react-toastify';

function App() {
  const { isAdminLogin, loading } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  if (loading) return null;

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.itemId === product.itemId);
    if (existingItem) {
      setCartItems(cartItems.map((item) =>
        item.itemId === product.itemId ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success('🦄 Item added successfully to cart', {
      position: "top-right",
      autoClose: 1000,
      theme: "colored"
    });
  };

  const updateCartItem = (productId, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map(item =>
        item.itemId === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter(item => item.itemId !== productId));
  };

  return (
    <div className="App">
      <Router>
        {!isAdminLogin && <Header />}
        <Routes>

          <Route path="/" element={<MainHome addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems} // ✅ FIXED: renamed from cartItems1
                removeFromCart={removeFromCart}
                updateQuantity={updateCartItem}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/payment-success/:orderId" element={<PaymentSuccessPage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Auth />} />

          <Route path="/admin" element={<Dashboard />}>
            <Route index element={<Courses />} />
            <Route path="course" element={<Courses />} />
            <Route path="course/create" element={<CreateCourse />} />
            <Route path="course/edit/:id" element={<EditCourse />} />

            <Route path="category" element={<Category />} />
            <Route path="category/create" element={<CreateCategory />} />
            <Route path="category/edit/:id" element={<EditCategory />} />

            <Route path="content" element={<CourseContent />} />
            <Route path="content/create" element={<CreateCourseContent />} />
            <Route path="content/edit/:id" element={<EditCourseContent />} />

            <Route path="feedback" element={<Feedback />} />
            <Route path="feedback/create" element={<CreateFeedback />} />
            <Route path="feedback/edit/:id" element={<EditFeedback />} />

            <Route path="payments" element={<Payments />} />
            <Route path="users" element={<Users />} />
          </Route>

          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
