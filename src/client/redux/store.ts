import { createRootReducer, rootSaga } from "./";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: createRootReducer(),
    devTools: true,
    middleware: [sagaMiddleware],
    preloadedState: initialState
  });

  sagaMiddleware.run(rootSaga);
  return store;
};
