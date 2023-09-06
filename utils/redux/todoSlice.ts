import { createSlice } from '@reduxjs/toolkit';
import { dateTime, usersList } from '../constants';


const initialState = {
    currentUser: usersList[0],
    todoList: [
        {
            id: Math.random(),
            title: "Test Todo 1",
            time: dateTime,
            assignedBy: usersList[0],
            assignedTo: usersList[2],
            status: "incomplete"
        },
        {
            id: Math.random(),
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
        }
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;