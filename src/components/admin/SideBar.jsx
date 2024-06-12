import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SideBar = () => {
  return (
    <div className="sidebar bg-light p-3">
      <div className="d-flex flex-column">
        {/* <Link to="/admin/allorders" className="text-decoration-none">
          <div className="admin-side-text py-2 border-bottom text-center">
            All Orders
          </div>
        </Link> */}
        <Link to="/admin/allproducts" className="text-decoration-none">
          <div className="admin-side-text py-2 border-bottom text-center">
            All Products
          </div>
        </Link>
        {/* <Link to="/admin/addbrand" className="text-decoration-none">
          <div className="admin-side-text py-2 border-bottom text-center">
            Add Brand
          </div>
        </Link> */}
        <Link to="/admin/addcategory" className="text-decoration-none">
          <div className="admin-side-text py-2 border-bottom text-center">
            Add Category
          </div>
        </Link>
        <Link to="/admin/addproduct" className="text-decoration-none">
          <div className="admin-side-text py-2 border-bottom text-center">
            Add Product
          </div>
        </Link>
        <Link to="/admin/addcoupon" className="text-decoration-none">
          <div className="admin-side-text py-2 border-bottom text-center">
            Add Coupon
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
