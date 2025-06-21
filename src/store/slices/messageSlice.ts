import { createSlice } from '@reduxjs/toolkit'
import MessagesUserType from '@/components/Messages/DATAOBJECTS/MessagesDataTypes'

interface InitialStateType { Userobject: null | MessagesUserType}

const initialState: InitialStateType = { Userobject: null}

const MessageSlice = createSlice({
    name: 'Message',
    initialState,
    reducers: {
        SelectUser(state, action) {
            state.Userobject = action.payload
        },
    },
})

export const { SelectUser } = MessageSlice.actions
export default MessageSlice.reducer