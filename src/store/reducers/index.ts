import { AnyAction, combineReducers, Reducer } from "@reduxjs/toolkit";
import userReducer from "./user";
import localeReducer from "./locale";
import appReducer from "./app";
import provinceReducer from "./province";

export * from "./locale";
export * from "./user";
export * from "./app";
export * from "./province";

const productReducer = combineReducers({
  user: userReducer,
  locale: localeReducer,
  app: appReducer,
  province: provinceReducer,
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
