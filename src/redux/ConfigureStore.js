import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import {token} from "./UsersReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      token,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};

