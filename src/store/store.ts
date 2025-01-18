import AsyncStorage, {
  AsyncStorageStatic,
} from "@react-native-async-storage/async-storage";
import {
  combineReducers,
  configureStore,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
  useDispatch,
} from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/es/types";

import { invoicesSlice } from "../slices/invoices.slice";
import { userSlice } from "../slices/user.slice";

import { IStore } from "./types";

export const persistVersion = 3;

const combinedReducer = combineReducers({
  invoices: invoicesSlice.reducer,
  user: userSlice.reducer,
});

const rootReducer = (
  state: IStore | undefined,
  action: PayloadAction<string>
) => {
  if (action.type === "auth/logout/pending") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const persistConfig: {
  blacklist: any[];
  storage: AsyncStorageStatic;
  version: number;
  key: string;
} = {
  blacklist: [],
  key: "root",
  storage: AsyncStorage,
  version: persistVersion,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
