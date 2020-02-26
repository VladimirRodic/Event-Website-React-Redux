import { combineReducers } from "redux";
import eventsReducer from "./events";
import usersReducer from "./users";

export default combineReducers({
  events: eventsReducer,
  users: usersReducer
});
