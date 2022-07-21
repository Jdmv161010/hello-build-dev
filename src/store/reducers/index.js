import { combineReducers } from "redux";
import appReducer from "./appReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  app: appReducer,
  ui: uiReducer,
});

export default rootReducer;
