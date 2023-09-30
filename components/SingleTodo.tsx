'use client'
import { deleteTodo } from '@/utils/redux/todoSlice';
import { TodoStateType, type TodoType } from '@/utils/types';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import TodoModal from './TodoModal';

type SingleTodoProps = {
    todo: TodoType,
    setAllTodoList?: any
}

const SingleTodo: FC<SingleTodoProps> = ({ todo, setAllTodoList }) => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [todoId, setTodoId] = useState<number | undefined>(undefined);

    const todoList = useSelector((state: TodoStateType) => state.todo.todoList);
    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id));
        toast.success("Todo Deleted Successfully.");
        console.log(todoList)
    }
    const handleEdit = (id: number) => {
        setTodoId(id);
        setOpenModal(true);
    }

    return (
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-2'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-slate-800'>{todo?.title}</h2>
                <span suppressHydrationWarning className='font-light text-xs'>{todo?.time}</span>
                <p className='mt-0.5 font-medium text-gray-800 text-sm'>Assigned To: {todo?.assignedTo.name}</p>
            </div>

            {/* Action buttons  */}
            <p className='text-slate-800'>Status: <span className='font-medium'>{todo?.status}</span> </p>

            <div className='flex gap-3 items-center'>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>

            {openModal && <TodoModal openModal setOpenModal={setOpenModal} id={todoId} setAllTodoList={setAllTodoList} />}
        </div>
    );
};

export default SingleTodo;