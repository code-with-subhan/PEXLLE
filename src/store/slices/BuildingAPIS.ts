// store/BuildingSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://mocki.io/v1/0ad92b49-09d7-4a5d-aec1-5c4fd80e5f13');
  return res.json();
});

const BuildingAPIS = createSlice({
  name: 'Building',
  initialState: {
    data: [] as any[],
    loading: false,
    error:  null  ,
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

export default BuildingAPIS.reducer;
