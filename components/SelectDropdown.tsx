'use client'

import { FC } from "react";
import { type StatusType } from '@/utils/types';


type SelectDropdownProps = {
    label?: string,
    name: string,
    data: any[],
    width?: "w-full",
    mb?: "mb-3",
    handleSetTodoFields?: (e: any) => void,
    value?: any
}

const SelectDropdown: FC<SelectDropdownProps> = ({ label, name, data, width, mb, handleSetTodoFields, value }) => {

    return (
        <div className={mb}>
            {label && <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>}
            <select onChange={handleSetTodoFields} value={value} id={name} name={name} className={`border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-100 block p-2.5 ${width}`}>
                <option value="" >Choose a option</option>
                {data?.map((option: StatusType, index: number) => (
                    <option key={index} value={option?.value}>{option?.name}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectDropdown;