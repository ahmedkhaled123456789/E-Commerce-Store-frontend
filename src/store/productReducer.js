import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from '../hooks/useGetData'
 export const getProducts= createAsyncThunk('product/getProducts', async(limit,thunkAPI) =>{
  try{
const res = await useGetData(`/api/v1/products?limit=${limit}`);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})
export const getProduct= createAsyncThunk('product/getProduct', async(id,thunkAPI) =>{
  try{
const res = await useGetData(`/api/v1/products/${id}`);
 return res.data;
   }catch(error) {
console.log(error);
  }
})
export const getAllProductsSearch= createAsyncThunk('product/getAllProductsSearch', async(queryString,thunkAPI) =>{
  try{
const res = await useGetData(`/api/v1/products?keyword=${queryString}`);
 return res.data;
   }catch(error) {
console.log(error);
  }
})
const initialState = {
  products:null,
  product: null,
  
 };

const productReduer = createSlice({
  name: "products", 
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products=action.payload;
     })

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product=action.payload;
     })
    builder.addCase(getAllProductsSearch.fulfilled, (state, action) => {
      state.products=action.payload;
      console.log(state.products)
    })
  },
})
export default productReduer.reducer;
