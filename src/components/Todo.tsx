import * as React from 'react';
import { useSelector } from 'react-redux';
import { TodoType } from '../todoSlice';

const Todo = () => {
    const {} = useSelector((state: TodoType) => state);

};

export default Todo;
