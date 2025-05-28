import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/store/slices/authSlice';
import fetchProduct from '@/store/slices/Products'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    fetchProducts : fetchProduct
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
