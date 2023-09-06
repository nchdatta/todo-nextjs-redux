'use client'
import { type TodoType } from '@/utils/types';
import { FC } from 'react';

type SingleTodoProps = {
    todo: TodoType
}

const SingleTodo: FC<SingleTodoProps> = ({ todo }) => {
    return (
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-2'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-slate-800'>{todo?.title}</h2>
                <span suppressHydrationWarning className='font-light text-xs'>{todo?.time}</span>
                <p className='mt-0.5 font-medium text-gray-800 text-sm'>Assigned To: {todo?.assignedTo.name}</p>
            </div>

            {/* Action buttons  */}
            <p className='text-slate-800'>Status: <span className='font-medium'>{todo?.status}</span> </p>
        </div>
    );
};

export default SingleTodo;