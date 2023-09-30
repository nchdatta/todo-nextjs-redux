import { createSlice } from '@reduxjs/toolkit';
import { dateTime, usersList } from '../constants';


const initialState = {
    currentUser: usersList[0],
    todoList: [
        {
            id: 1,
            title: "Test Todo 1",
            time: dateTime,
            assignedBy: usersList[0],
            assignedTo: usersList[2],
            status: "incomplete"
        },
        {
            id: 2,
            title: "Test Todo 2",
            time: dateTime,
            assignedBy: usersList[0],
            assignedTo: usersList[3],
            status: "complete"
        },
    ]

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        deleteTodo: (state, action) => {
            const f = state.todoList.filter((todo) => todo.id !== action.payload);
            for (const item of f) {
                state.todoList.push(item);
            }
        },
        updateTodo: (state, action) => {
            const f = state.todoList.filter((todo) => todo.id !== action.payload.id);
            for (const item of f) {
                state.todoList.push(item);
            }
            state.todoList.push(action.payload);
        }
    }
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;