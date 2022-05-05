import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    characterSearch: statusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
