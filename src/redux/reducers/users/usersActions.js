import { usersActionTypes } from "./usersTypes";
import axios from "axios";

export const getUsersStart = () => ({
  type: usersActionTypes.GET_USERS_START,
});
export const getUsersSuccess = (users) => ({
  type: usersActionTypes.GET_USERS_SUCCESS,
  payload: { data: users },
});
export const getUsersFailure = (error) => ({
  type: usersActionTypes.GET_USERS_FAILURE,
  payload: { error: error },
});

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(getUsersStart());
    return axios
      .get("http://localhost:3006/api/users")
      .then((response) => {
        const users = response.data;
        dispatch(getUsersSuccess(users));
      })
      .catch((error) => {
        console.log({ error, msg: error.message });
        dispatch(getUsersFailure(error.message));
      });
  };
};
