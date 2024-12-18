import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { listReducer } from "./listReducer";

export const reducers = combineReducers({
  list: listReducer,
  card: cardReducer,
});
