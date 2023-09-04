import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        length: 5
    },
    reducers: {
        increment: state => {
            state.length++;
        }
    }
});

export const { increment } = todoSlice.actions;
export default todoSlice.reducer;