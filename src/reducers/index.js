import { combineReducers } from "redux";
import forecast from "./forecast";
import cities from "./cities";

export default combineReducers({
	forecast,
	cities
});
