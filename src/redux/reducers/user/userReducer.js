import { userActionTypes } from "./userTypes";

const initalState = {};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
