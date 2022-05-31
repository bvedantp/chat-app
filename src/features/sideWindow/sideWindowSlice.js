import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const initialState = {
    value: data,
    valueAfterOperation: [],
    activeUser: ``
}

export const sideWindowSlice = createSlice({
    name: 'sideWindow',
    initialState,
    reducers: {
        nameFind: (state, action) => {
            let alreadyPresent = state.valueAfterOperation.find(element=> element.name === action.payload);
            if(alreadyPresent !== undefined) {
                console.log("This name is already present");
            } else {
                let found = state.value.find(element=> element.name === action.payload); //payload you use, not simply action
                if(found !== undefined) { 
                    state.valueAfterOperation.push(found) ;
                }
            }
        },
        findById: (state, action) => {
            let active = state.valueAfterOperation.find(element=> element.name === action.payload);
            state.activeUser = active;
        },
        insertMessage: (state, action) => {
            let message = action.payload;
            if(state.activeUser.messages === undefined) {
                state.activeUser = {...state.activeUser, messages: [message]};
            } else {
                state.activeUser.messages.push(message); 
            }
        },
        insertToArray: (state, action) => {
            let indexWhereInsert = state.valueAfterOperation.findIndex(element=> element.id === action.payload);
            state.valueAfterOperation[indexWhereInsert] = state.activeUser;
        },
        insertStarred: (state, action) => {
            let star = action.payload;
            if(state.activeUser.starred === undefined) {
                state.activeUser = {...state.activeUser, starred: [star]};
            } else {
                state.activeUser.starred.push(star); 
            }
        }
    }
})

export const { nameFind, findById, insertMessage, insertToArray, insertStarred } = sideWindowSlice.actions;

export default sideWindowSlice.reducer;