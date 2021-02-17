import { usersActionTypes } from "./usersTypes";

const initalState = {
  data: [],
  isLoaded: false,
  error: "",
};

const usersReducer = (state = initalState, action) => {
  switch (action.type) {
    case usersActionTypes.GET_USERS_START:
      return {
        ...state,
        isLoaded: false,
      };
    case usersActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoaded: true,
      };
    case usersActionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        ...action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default usersReducer;
