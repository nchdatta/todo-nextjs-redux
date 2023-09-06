'use client'
import { useState } from 'react';
import SelectDropdown from './SelectDropdown';
import TodoList from './TodoList';
import TodoModal from './TodoModal';
import { statusList } from '@/utils/constants';
import { useSelector } from 'react-redux';
import { type TodoType, type TodoStateType } from '@/utils/types';

const TodoContainer = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const todoList = useSelector((state: TodoStateType) => state.todo.todoList);
    const [allTodoList, setAllTodoList] = useState<TodoType[]>(todoList ? todoList : []);
    const currentUser = useSelector((state: TodoStateType) => state.todo.currentUser);

    const handleStatusChange = (e: any) => {
        const { value } = e?.target;
        if (value) {
            const todoListFiltered: TodoType[] = todoList?.filter((todo: TodoType) => todo.status === value);
            setAllTodoList(todoListFiltered);
        } else {
            setAllTodoList(todoList);
        }
    }

    return (
        <div className='mt-5'>
            <p className='font-light text-sm text-slate-800'>Hello, <span className='font-medium'>{currentUser?.name}</span> </p>

            <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                <button onClick={() => setOpenModal(true)} className='border border-gray-100 bg-slate-400 hover:bg-slate-500 transition-colors px-3 py-1 rounded text-white' type='button'>Add Task</button>
                <SelectDropdown handleSetTodoFields={handleStatusChange} name='status' data={statusList} />
            </div>

            {/* Todo List  */}
            <TodoList todoList={allTodoList} />

            {openModal && <TodoModal openModal setOpenModal={setOpenModal} />}
        </div>
    );
};

export default TodoContainer;