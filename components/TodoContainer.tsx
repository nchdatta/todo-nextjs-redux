'use client'
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoContainer = () => {
    const todoLength: number = useSelector((state: { todo: { length: number } }) => state.todo.length);
    const dispatch = useDispatch();
    const incrementCounter = useCallback(() => dispatch({ type: "todo/increment" }), []);

    return (
        <div className='py-3'>
            <h1 className='mb-2'>Number of Todos: {todoLength}</h1>
            <button className='border px-3 py-1' onClick={incrementCounter}>Increment</button>
        </div>
    );
};

export default TodoContainer;