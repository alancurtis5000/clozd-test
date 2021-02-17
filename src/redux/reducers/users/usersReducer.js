import { usersActionTypes } from "./usersTypes";

const initalState = {
  currentUser: null,
};

const usersReducer = (state = initalState, action) => {
  switch (action.type) {
    case usersActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
