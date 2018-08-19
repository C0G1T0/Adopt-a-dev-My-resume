import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import skillsReducer from "./skillsReducer";
import basketReducer from "./basketReducer";
import errorReducer from "./errorReducer";
import thankReducer from "./thankReducer";

export default combineReducers({
  categories: categoriesReducer,
  skills: skillsReducer,
  basket: basketReducer,
  errors: errorReducer,
  contact: thankReducer
});
