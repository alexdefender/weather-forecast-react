import { combineReducers } from "redux";
import cities from "./cities";
import current from "./current";
import forecast from "./forecast";

export default combineReducers({
  cities,
  current,
  forecast
});
