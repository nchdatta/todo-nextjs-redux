import { type StatusType, type UserType } from "./types";

export const statusList: StatusType[] = [
    { value: "incomplete", name: "Incomplete" },
    { value: "complete", name: "Complete" },
    { value: "pending", name: "Pending" }
];

export const usersList: UserType[] = [
    { value: 1, name: "John Doe" },
    { value: 2, name: "Nayan Datta" },
    { value: 3, name: "Fahim Khan" },
    { value: 4, name: "Hridoy Roy" },
]


export const dateTime = new Date().toDateString() + new Date().toLocaleTimeString();