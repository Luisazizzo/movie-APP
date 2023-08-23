import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reduxSlices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { movieApi } from "../api/movieApi";
import favoriteSlice from "./reduxSlices/favoriteSlice";

export const store = configureStore({
  reducer: {
    usersSlice: usersSlice,
    favoriteSlice: favoriteSlice,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
