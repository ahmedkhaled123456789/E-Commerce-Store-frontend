import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {useGetData} from '../hooks/useGetData'
import {useInsertDataWithImage} from '../hooks/useInsertData'

export const getCategories= createAsyncThunk('category/getCategories', async(id,thunkAPI) =>{
  try{
const res = await useGetData('/api/v1/categories',id);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})

export const getCategory = createAsyncThunk('category/getCategory', async (id, thunkAPI) => {
  try {
    const res = await useGetData(`/api/v1/categories/${id}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const addCategory= createAsyncThunk('category/addCategory', async(formData,thunkAPI) =>{
  try{
const res = await useInsertDataWithImage(`/api/v1/categories`, formData);
// const data = await res.json();
return res.data;
   }catch(error) {
console.log(error);
  }
})


const initialState = {
  category:null,
  oneCategory: [],
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
     })

    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.oneCategory=action.payload;
      console.log(state.oneCategory)
     })
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.category=action.payload;
     })
  },
})
export default categoriesSlice.reducer;
