import { createSlice } from '@reduxjs/toolkit'

interface InitialStateType { query: string, rooms: string[], BasicCreteria: string[], PropertyType: string }

const initialState: InitialStateType = { query: "", rooms: [], BasicCreteria: [], PropertyType: "" }

const RealListingSlice = createSlice({
    name: 'RealLising',
    initialState,
    reducers: {
        SearchQuery(state, action) {
            state.query = action.payload
        },
        SetPropertyType(state, action) {
            state.PropertyType = action.payload
        },
        SetRooms: (state, action) => {
            state.rooms = action.payload
        },
        SetBasicCreteria: (state, action) => {
           state.BasicCreteria = action.payload
        }
    },
})

export const { SearchQuery, SetRooms, SetBasicCreteria, SetPropertyType } = RealListingSlice.actions
export default RealListingSlice.reducer