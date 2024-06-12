import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import WishList from '../pages/WishList';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Account from '../pages/Account';
import Product_Details from '../pages/Product_Details';
import data from '../components/UI/Data'
import Order from '../pages/Order';
import AllOrdersPage from '../pages/admin/AllOrdersPage';
import AllProductsPage from '../pages/admin/AllProductsPage';
import AddBrandsPage from '../pages/admin/AddBrandsPage';
import AddCategoriesPage from '../pages/admin/AddCategoriesPage';
import AddProductsPage from '../pages/admin/AddProductsPage';
import AddCouponPage from '../pages/admin/AddCouponPage';
import AdminEditProductsPage from '../pages/admin/AdminEditProductsPage';
import ProtectedRoute from '../components/Uitily/ProtectedRoute';
import ProtectedRouteHook from '../hook/auth/protected-route-hook';
import AdminEditCouponPage from '../pages/admin/AdminEditCouponPage';
 
 

const Routers = () => { 
  const [isUser, isAdmin, userData] = ProtectedRouteHook()

  return (
     <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
       <Route path="cart" element={<Cart />} />
       <Route path="wishlist" element={<WishList />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
       <Route path="account" element={<Account />} />
       <Route path="product/:id" element={<Product_Details/>} />
       <Route path="order" element={<Order />} />
       <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
        <Route path="checkout" element={<CheckOut />} />
            
             
            <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route path="admin/allproducts" element={<AllProductsPage />} />
             <Route path="admin/addbrand" element={<AddBrandsPage />} />
            <Route path="admin/addcategory" element={<AddCategoriesPage />} />
             <Route path="admin/addproduct" element={<AddProductsPage />} />
            <Route path="admin/addcoupon" element={<AddCouponPage />} />
            <Route path="admin/editproduct/:id" element={<AdminEditProductsPage />} />
            <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />


          </Route>

      </Routes>
  )
}

export default Routers