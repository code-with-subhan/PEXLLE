import { createSlice } from '@reduxjs/toolkit'

interface InitialStateType {
    query: string,
    Category: string,
    SubCategory: string,
    Condition: string[],
    SellerType: string[],
    Shipping: string[],
    Warranty: string,
    Negotiable: string,
    PaymentOptions: string[],
    ReturnPolicy: string[],
    AdType: string[],
    VerifiedSeller: string,
}

const initialState: InitialStateType = {
    query: "",
    Category: "All",
    SubCategory: "All",
    Condition: [],
    SellerType: [],
    Shipping: [],
    Warranty: "All",
    Negotiable: "All",
    PaymentOptions: [],
    ReturnPolicy: [],
    AdType: [],
    VerifiedSeller: "All",
}

const EcommerceFilters = createSlice({
    name: 'EcommerceFilter',
    initialState,
    reducers: {
        SearchQuery(state, action) {
            state.query = action.payload
        },
        SetCategory(state, action) {
            state.Category = action.payload
        },
        SetSubCategory(state, action) {
            state.SubCategory = action.payload
        },
        SetCondition(state, action) {
            state.Condition = action.payload
        },
        SetSellerType(state, action) {
            state.SellerType =action.payload
        },
        SetShipping(state, action) {
            state.Shipping = action.payload
        },
        SetWarranty(state, action) {
            state.Warranty = action.payload
        },
        SetNogoTiable(state, action) {
            state.Negotiable = action.payload
        },
        SetpaymentOption(state, action) {
            state.PaymentOptions = action.payload
        },
        SetReturnPolicy(state, action) {
            state.ReturnPolicy = action.payload
        },
        SetAdType(state, action) {
            state.AdType = action.payload
        },
        SetVerifiedSeller(state, action) {
            state.VerifiedSeller = action.payload
        },
    },
})

export const {
    SearchQuery,
    SetCategory,
    SetSubCategory,
    SetCondition,
    SetSellerType,
    SetShipping,
    SetWarranty,
    SetNogoTiable,
    SetpaymentOption,
    SetReturnPolicy,
    SetAdType,
    SetVerifiedSeller
} = EcommerceFilters.actions
export default EcommerceFilters.reducer