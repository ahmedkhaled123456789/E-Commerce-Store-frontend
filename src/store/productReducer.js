import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useGetData} from '../hooks/useGetData';
import useDeleteData from '../hooks/useDeleteData';
import {useInUpdateDataWithImage} from '../hooks/useUpdateData';
import { useInsertDataWithImage } from "../hooks/useInsertData";


// Thunks for asynchronous actions
export const getProducts = createAsyncThunk('product/getProducts', async (limit, thunkAPI) => {
  try {
    const res = await useGetData(`/api/v1/products?limit=${limit}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getProduct = createAsyncThunk('product/getProduct', async (id, thunkAPI) => {
  try {
    const res = await useGetData(`/api/v1/products/${id}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addProducts = createAsyncThunk('product/addProducts', async (data, thunkAPI) => {
  try {
    const res = await useInsertDataWithImage(`/api/v1/products`,data);
    
    return res.data;

  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getAllProductsSearch = createAsyncThunk('product/getAllProductsSearch', async (queryString, thunkAPI) => {
  try {
    const res = await useGetData(`/api/v1/products?keyword=${queryString}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});


export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id, thunkAPI) => {
  try {
    console.log(id)
    const res = await useDeleteData(`/api/v1/products/${id}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

 

export const updateProduct = createAsyncThunk('product/updateProduct', async (formData, thunkAPI) => {
  try {
    const res = await useInUpdateDataWithImage(`/api/v1/products/${formData.id}`, formData.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  products: null,
  product: null,
  loading: true,
  error: null,
  deleteProducts: [],
};

// Slice
const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // getProducts
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      console.log("aaaaaaa")
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // getProduct
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      console.log(state.product)

    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // getAllProductsSearch
    builder.addCase(getAllProductsSearch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllProductsSearch.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllProductsSearch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });


    // ========delete product===
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.deleteProducts = action.payload;
      console.log(state.deleteProducts)
      state.loading = false;
    });
    builder.addCase(addProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      console.log(action.payload)
      state.loading = false;

    });

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
  },
});

export default productReducer.reducer;
