export type StatusType = { value: string | number, name: string };
export type UserType = { value: string | number, name: string };
export type TodoType = {
    id: number,
    title: string,
    time: string,
    assignedBy: UserType,
    assignedTo: UserType,
    status: string;
}
export type TodoStateType = {
    todo: {
        currentUser: { value: number, name: string },
        todoList: TodoType[]
    }
}