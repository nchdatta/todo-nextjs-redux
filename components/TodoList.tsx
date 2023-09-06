import { TodoType } from "@/utils/types";
import { FC } from "react";
import SingleTodo from "./SingleTodo";

type TodoListProps = {
    todoList: TodoType[]
}

const TodoList: FC<TodoListProps> = ({ todoList }) => {
    return (
        <div className='flex flex-col justify-between items-center gap-2 my-4'>
            {todoList && todoList?.length > 0 &&
                todoList?.map((todo: TodoType) => (
                    <SingleTodo key={todo.id} todo={todo} />
                ))
            }
        </div>
    );
};

export default TodoList;