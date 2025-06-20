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
    Warranty: "",
    Negotiable: "",
    PaymentOptions: [],
    ReturnPolicy: [],
    AdType: [],
    VerifiedSeller: "",
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
            state.Condition.push(action.payload)
        },
        SetSellerType(state, action) {
            state.SellerType.push(action.payload)
        },
        SetShipping(state, action) {
            state.Shipping.push(action.payload)
        },
        SetWarranty(state, action) {
            state.Warranty = action.payload
        },
        SetNogoTiable(state, action) {
            state.Negotiable = action.payload
        },
        SetpaymentOption(state, action) {
            state.PaymentOptions.push(action.payload)
        },
        SetReturnPolicy(state, action) {
            state.ReturnPolicy.push(action.payload)
        },
        SetAdType(state, action) {
            state.AdType.push(action.payload)
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