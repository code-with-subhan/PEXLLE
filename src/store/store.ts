import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/store/slices/authSlice';
import fetchProduct from '@/store/slices/Products'
import categoryReducer from "@/store/slices/SelectProductCategorySlice"
import BuildingReducer from "@/store/slices/BuildingAPIS"
import RealstateListingSlice from "@/store/slices/RealListing"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    fetchProducts: fetchProduct,
    category: categoryReducer,
    Building: BuildingReducer,
    RealListing : RealstateListingSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
