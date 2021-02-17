import { usersActionTypes } from "./usersTypes";
import axios from "axios";

export const getUsersStart = () => ({
  type: usersActionTypes.GET_USERS_START,
});
export const getUsersSuccess = () => ({
  type: usersActionTypes.GET_USERS_SUCCESS,
  payload: {},
});
export const getUsersFailure = () => ({
  type: usersActionTypes.GET_USERS_FAILURE,
});

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(getUsersStart());
    return axios
      .get("https://randomuser.me/api/?results=5000")
      .then((response) => {
        console.log({ response, data: response.data });
        dispatch(getUsersSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(getUsersFailure());
      });
  };
};
