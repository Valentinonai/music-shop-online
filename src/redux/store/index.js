import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
// eslint-disable-next-line no-unused-vars
import LogIn from "../../components/logIn";
import logIn from "../reducers/logIn";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  usersData: logIn,
});
const persistedReducers = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export const persiStore = persistStore(store);
