import { configureStore } from "@reduxjs/toolkit";

import todoReducer, { TodoDetailsType } from "./todoSlice";

const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});

export const fetchTodo = async (dispatch, getState) => {
    const { id } = getState();

    const details: TodoDetailsType = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());

    dispatch({ type: 'todo/setDetails', payload: details });
};

export default store;
