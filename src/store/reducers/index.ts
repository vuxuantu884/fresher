import { AnyAction, combineReducers, Reducer } from "@reduxjs/toolkit";
import userReducer from "./user";
import localeReducer from "./locale";
import appReducer from "./app";

export * from "./locale";
export * from "./user";
export * from "./app";
const productReducer = combineReducers({
  user: userReducer,
  local: localeReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "RESET") {
    // reset state
    state = {} as RootState;
    // reset local storage
    localStorage.clear();
  }
  return productReducer(state, action);
};
export default rootReducer;
