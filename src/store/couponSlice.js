import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {useGetDataToken} from '../hooks/useGetData'
import {useInsertData} from '../hooks/useInsertData'
import useDeleteData from '../hooks/useDeleteData'
import { useInsUpdateData } from "../hooks/useUpdateData";

export const getCoupons= createAsyncThunk('coupon/getCoupons', async(_,thunkAPI) =>{
  try{
const res = await useGetDataToken('/api/v1/coupon');
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})


export const getCoupon= createAsyncThunk('coupon/getCoupon', async(id,thunkAPI) =>{
  try{
const res = await useGetDataToken(`/api/v1/coupon/${id}`);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})

export const addCoupon= createAsyncThunk('coupon/addCoupon', async(formData,thunkAPI) =>{
  try{
const res = await useInsertData(`/api/v1/coupon`, formData);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})



export const deleteCoupon= createAsyncThunk('coupon/deleteCoupon', async(id,thunkAPI) =>{
  try{
const res = await useDeleteData(`/api/v1/coupon/${id}`);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})


export const editCoupon= createAsyncThunk('coupon/editCoupon', async(formData,thunkAPI) =>{
  try{
const res = await useInsUpdateData(`/api/v1/coupon/${formData.id}`, formData.data);
// const data = await res.json(); 
return res;
   }catch(error) {
console.log(error);
  }
})

const initialState = {
  addCoupon: [],
  allCoupon: [],
  deleteCoupon: [],
  oneCoupon: [],
  editCoupon: [],
 };

const couponSlice = createSlice({
  name: "coupon", 
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCoupons.fulfilled, (state, action) => {
      state.allCoupon=action.payload;
      console.log(state.allCoupon)
    })

    builder.addCase(getCoupon.fulfilled, (state, action) => {
      state.oneCoupon=action.payload;
      console.log(state.oneCoupon)
    })

    builder.addCase(addCoupon.fulfilled, (state, action) => {
      state.addCoupon=action.payload;
      console.log(state.addCoupon)
    })

    builder.addCase(deleteCoupon.fulfilled, (state, action) => {
      state.deleteCoupon=action.payload;
      console.log(state.deleteCoupon)
    })

    builder.addCase(editCoupon.fulfilled, (state, action) => {
      state.editCoupon=action.payload;
      console.log(state.editCoupon)
    })
  },
})
export default couponSlice.reducer;
