import { usersActionTypes } from "./usersTypes";
import axios from "axios";

export const getUsersStart = () => ({
  type: usersActionTypes.GET_USERS_START,
});
export const getUsersSuccess = (users) => ({
  type: usersActionTypes.GET_USERS_SUCCESS,
  payload: { data: users },
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
        const users = response.data.results;
        const mapUsers = users.map((user, index) => {
          return {
            key: index,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            city: user.location.city,
            country: user.location.country,
            address: `${user.location.street.number} ${user.location.street.name}`,
            postcode: user.location.postcode,
            picture: user.picture.medium,
            phone: user.phone,
            dob: user.dob.date,
          };
        });
        dispatch(getUsersSuccess(mapUsers));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getUsersFailure());
      });
  };
};
