import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import usersSlice from "./reduxSlices/userSlice/usersSlice";
import { movieApi } from "../api/movieApi";
import favoriteSlice from "./reduxSlices/favoriteSlice/favoriteSlice";

const rootReducer = combineReducers({
  usersSlice: usersSlice,
  favoriteSlice: favoriteSlice,
  [movieApi.reducerPath]: movieApi.reducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
