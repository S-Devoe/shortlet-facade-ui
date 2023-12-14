import { AnyAction, EmptyObject, combineReducers } from "@reduxjs/toolkit";

const appReducer = combineReducers({});

const rootReducer = (state: EmptyObject | undefined, action: AnyAction) => {
  return appReducer(state, action);
};
export default rootReducer;
