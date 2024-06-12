import {configureStore} from '@reduxjs/toolkit';
 import productReducer from './productSlice';
 import favProductReducer from './favProductSlice';
 import productsReducer from './productReducer';
 import categoriesReducer from './categoriesSlice';
 import couponReducer from './couponSlice';

 import authReducer from './auth/authSlice';
 
const store = configureStore({
reducer:{
  product:productReducer,
  favProduct:favProductReducer,
  products:productsReducer,
  category:categoriesReducer,
  coupon:couponReducer,
  auth:authReducer,

 }
}); 

export default store;