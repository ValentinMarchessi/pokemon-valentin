import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
