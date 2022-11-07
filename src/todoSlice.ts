import { createSlice } from "@reduxjs/toolkit";

export interface TodoDetailsType {
    title: string;
    completed: boolean;  
}

export interface TodoType {
    id: number;
    details?: TodoDetailsType;
}

const initialState: TodoType = {
    id: 1,
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        setDetails: (state: TodoType, { payload }) => {
            state.details = payload;
        }
    },
});

export const { setDetails } = todoSlice.actions;

export default todoSlice.reducer;
