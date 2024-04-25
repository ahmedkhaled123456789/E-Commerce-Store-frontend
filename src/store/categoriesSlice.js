import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from '../hooks/useGetData'
 
export const getCategories= createAsyncThunk('category/getCategories', async(id,thunkAPI) =>{
  try{
const res = await useGetData('/api/v1/categories',id);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})
const initialState = {
  category:null,
  
 };

const categoriesSlice = createSlice({
  name: "category", 
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.category=action.payload;
      console.log(state.category)
    })
  },
})
export default categoriesSlice.reducer;
