import { combineReducers } from "redux";
import usersReducer from "./reducers/users/usersReducer";
import userReducer from "./reducers/user/userReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
});

export default rootReducer;
