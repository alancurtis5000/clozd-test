import { usersActionTypes } from "./usersTypes";
export const setCurrentUser = (user) => ({
  type: usersActionTypes.SET_CURRENT_USER,
  payload: user,
});
