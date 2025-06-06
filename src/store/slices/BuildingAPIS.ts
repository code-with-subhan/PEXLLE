// store/BuildingSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBuilding = createAsyncThunk('Building/fetch', async () => {
  const res = await fetch('https://mocki.io/v1/0ad92b49-09d7-4a5d-aec1-5c4fd80e5f13', {
    method: 'GET',
    mode: 'cors',            // required for cross-site requests
    cache: 'no-cache',
    credentials: 'omit',     // or 'include' if using cookies or auth
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer YOUR_TOKEN', // if needed
    }
  });
  return res.json();
});

const BuildingAPIS = createSlice({
  name: 'Building',
  initialState: {
    data: [] as any[],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuilding.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBuilding.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBuilding.rejected, (state) => {
        state.loading = false;
        // state.error = 'Failed to fetch products';
      });
  },
});

export default BuildingAPIS.reducer;
