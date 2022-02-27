import { combineReducers } from "redux";
import forecastReducer from "./reducer-forecast";

// will most likely create another reducer for default and also maybe current location

const rootReducer = combineReducers({
  forecast: forecastReducer,
});

export default rootReducer;