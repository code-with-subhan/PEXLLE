import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/store/slices/authSlice';
import fetchProduct from '@/store/slices/Products'
import categoryReducer from "@/store/slices/SelectProductCategorySlice"
import BuildingReducer from "@/store/slices/BuildingAPIS"
import RealstateListingSlice from "@/store/slices/RealListing"
import EcommerceFilter from "@/store/slices/EcommerCe_Filter"
import MessageSlice from "@/store/slices/messageSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    fetchProducts: fetchProduct,
    category: categoryReducer,
    Building: BuildingReducer,
    RealListing : RealstateListingSlice,
    EcommerceFilter : EcommerceFilter,
    Messages : MessageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
