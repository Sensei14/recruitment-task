import { createStore, combineReducers } from "redux";
import compositionsReducer from "./reducers/compositionsReducer";

const rootReducer = combineReducers({
  compositions: compositionsReducer,
});

const store = createStore(rootReducer);

export default store;
