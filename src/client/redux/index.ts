import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
import { stockSearchReducers, stockSearchSagas } from "./stockSearch";

export const createRootReducer = () => {
  return combineReducers({
    stockSearch: stockSearchReducers
  });
};

export function* rootSaga() {
  const configuration = [...stockSearchSagas];
  const tasks = [];
  for (const config of configuration) {
    tasks.push(config.method(config.type, config.function));
  }
  yield all(tasks);
}
