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
            console.log(state.rooms.includes(action.payload) , state)
            if (state.rooms.includes(action.payload)) {
                state.rooms.filter(e => e.toLowerCase() != action.payload.toLowerCase())
            } else {
                state.rooms.push(action.payload)
            }
        },
        SetBasicCreteria: (state, action) => {
            if (state.BasicCreteria.includes(action.payload)) {
                state.BasicCreteria.filter(e => e != action.payload)
            } else {
                state.BasicCreteria.push(action.payload)
            }
        }
    },
})

export const { SearchQuery, SetRooms, SetBasicCreteria, SetPropertyType } = RealListingSlice.actions
export default RealListingSlice.reducer