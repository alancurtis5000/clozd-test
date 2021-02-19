import { userActionTypes } from "./userTypes";

const initalState = {
  data: {},
  isLoaded: false,
  error: "",
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case userActionTypes.GET_USER_START:
      return {
        ...state,
        isLoaded: false,
      };
    case userActionTypes.GET_USER_SUCCESS:
      console.log({ pay: action.payload });
      return {
        ...state,
        ...action.payload,
        isLoaded: true,
      };
    case userActionTypes.GET_USER_FAILURE:
      return {
        ...state,
        ...action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default userReducer;
