import {configureStore} from '@reduxjs/toolkit';
 import productReducer from './productSlice';
 import favProductReducer from './favProductSlice';
 import productsReducer from './productReducer';
 import categoriesReducer from './categoriesSlice';

const store = configureStore({
reducer:{
  product:productReducer,
  favProduct:favProductReducer,
  products:productsReducer,
  category:categoriesReducer,

 }
}); 

export default store;