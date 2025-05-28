// store/productsSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [] as any[],
    loading: false,
    error: null ,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        // state.error = 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer;
