'use client'
import { FC, Dispatch, SetStateAction, useState } from 'react';
import SelectDropdown from './SelectDropdown';
import { dateTime, statusList, usersList } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/utils/redux/todoSlice';
import { type UserType } from '@/utils/types';

type TodoModalProps = {
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

type TodoFields = {
    title: string,
    assignedTo: string | number,
    status: string
}

const TodoModal: FC<TodoModalProps> = ({ openModal, setOpenModal }) => {
    const dispatch = useDispatch();

    const [todoFields, setTodoFields] = useState<TodoFields>({
        title: "",
        assignedTo: "",
        status: ""
    });

    const handleSetTodoFields = (e: any) => {
        const { name, value } = e?.target;
        setTodoFields((prev: TodoFields) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleAddTodo = () => {
        if (todoFields.title !== "" && todoFields.assignedTo !== "" && todoFields.status !== "") {
            const payload = {
                ...todoFields,
                time: dateTime,
                assignedTo: usersList?.find((user: UserType) => user.value === Number(todoFields.assignedTo))
            };
            dispatch(addTodo(payload));
            setOpenModal(false);
        } else {
            alert("Put/Select some value!");
            return;
        }
    }



    return (
        <div tabIndex={-1} className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-start justify-center p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
            <div className="relative w-full max-w-lg">
                {/* Modal content  */}
                <div className="relative bg-white rounded-lg shadow">
                    {/* Modal header  */}
                    <div className="flex items-center justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl font-medium text-gray-900">
                            Add New Todo
                        </h3>
                        <button type="button" onClick={() => setOpenModal(!openModal)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="medium-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    {/* Modal body  */}
                    <div className="p-6">
                        <div className="mb-3">
                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                            <input onChange={handleSetTodoFields} name='title' type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>

                        <SelectDropdown handleSetTodoFields={handleSetTodoFields} name='assignedTo' data={usersList?.filter((user: UserType) => user.value !== 1)} label='Select User' width='w-full' mb='mb-3' />
                        <SelectDropdown handleSetTodoFields={handleSetTodoFields} name='status' data={statusList} label='Select Status' width='w-full' mb='mb-3' />
                    </div>

                    {/* Modal footer  */}
                    <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button onClick={handleAddTodo} data-modal-hide="medium-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center">Add Todo</button>
                        <button onClick={() => setOpenModal(!openModal)} data-modal-hide="medium-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoModal;
