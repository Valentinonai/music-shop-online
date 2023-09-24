import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import albumReducer from "../reducers/albumReducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  album: albumReducer,
});
const persistedReducers = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persiStore = persistStore(store);
