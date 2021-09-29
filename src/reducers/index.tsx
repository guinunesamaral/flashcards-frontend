import { combineReducers } from "redux";
import { Reducer as authReducer } from "./auth/Reducer";
import { Reducer as flashcardReducer } from "./flashcard/Reducer";
import { Reducer as testReducer } from "./test/Reducer";

const rootReducer = combineReducers({
  authReducer,
  flashcardReducer,
  testReducer,
});

export default rootReducer;
