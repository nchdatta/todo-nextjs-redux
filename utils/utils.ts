import { usersList } from "./constants";
import { type UserType } from "./types";

export const currentUser = (value: number = 1): UserType | undefined => {
    return usersList?.find((user: UserType) => user.value === value);
}