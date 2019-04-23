import {combineReducers} from "redux";
import cities from "./cities";
import currentWeather from "./currentWeather";

export default combineReducers({
    cities,
    currentWeather
})
