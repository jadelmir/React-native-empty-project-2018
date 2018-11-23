import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import mainReducer from "./appReducer";
import { nav } from "./navigationReducer";

const AppReducer = combineReducers({
  nav,
  ...mainReducer
});

export default AppReducer;
