import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from '../hooks/useGetData';

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

export const getAllProductsSearch = createAsyncThunk('product/getAllProductsSearch', async (queryString, thunkAPI) => {
  try {
    const res = await useGetData(`/api/v1/products?keyword=${queryString}`);
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
  },
});

export default productReducer.reducer;
