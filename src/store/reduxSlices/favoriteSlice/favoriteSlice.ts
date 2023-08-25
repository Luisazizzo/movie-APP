import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IGetMovieDetails, Movies } from "../../../interface";

const initialState: Movies = [];

export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addFavorites: (
      state,
      {
        payload: { id, poster_path, title, backdrop_path, overview },
      }: PayloadAction<IGetMovieDetails>
    ) => {
      localStorage.setItem(
        "favorites",
        JSON.stringify([
          ...state,
          { id, poster_path, title, backdrop_path, overview },
        ])
      );
      return [...state, { id, poster_path, title, backdrop_path, overview }];
    },

    deleteFavorites: (state, { payload }: PayloadAction<number>) => {
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.filter((item) => item.id !== payload))
      );
      return state.filter((item) => item.id !== payload);
    },
    retrieveFavorites: (_, { payload }: PayloadAction<Movies>) => payload,
  },
});

export const { addFavorites, deleteFavorites, retrieveFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
