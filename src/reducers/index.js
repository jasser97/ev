import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import classReducer from "./classReducer";
import modelReducer from "./modelReducer";
import EventReducer from "./EventReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  classReducer,
  modelReducer,
  EventReducer,
});
