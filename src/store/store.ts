import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/store/slices/authSlice';
import fetchProduct from '@/store/slices/Products'
import categoryReducer from "@/store/slices/SelectProductCategorySlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    fetchProducts: fetchProduct,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
