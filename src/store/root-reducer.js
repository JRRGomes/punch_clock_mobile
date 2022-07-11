import { combineReducers } from "redux";
import userPreferences from "./modules/user-preferences/user-preferences-reducer";

const rootReducer = combineReducers({
  userPreferences,
});

export default rootReducer;
