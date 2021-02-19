import { userActionTypes } from "./userTypes";
import axios from "axios";

export const setUser = (user) => ({
  type: userActionTypes.SET_USER,
  payload: user,
});

export const getUserStart = () => ({
  type: userActionTypes.GET_USER_START,
});
export const getUserSuccess = (user) => ({
  type: userActionTypes.GET_USER_SUCCESS,
  payload: { data: user },
});
export const getUserFailure = (error) => ({
  type: userActionTypes.GET_USER_FAILURE,
  payload: { error: error },
});

export const getUser = (id) => {
  return async (dispatch) => {
    dispatch(getUserStart());
    return axios
      .get("http://localhost:3006/api/user", { params: { id } })
      .then((response) => {
        const user = response.data;
        dispatch(getUserSuccess(user));
      })
      .catch((error) => {
        console.log({ error, msg: error.message });
        dispatch(getUserFailure(error.message));
      });
  };
};
