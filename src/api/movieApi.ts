import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EnumBaseUrl } from "../constants/enumBaseUrl";
import { IGetMoviesRes, IGetMovieDetails, IGetSearch } from "../interface";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${EnumBaseUrl.BASE}`,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
      );
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMoviesByRated: builder.query<IGetMoviesRes, number>({
      query: (page) => `movie/upcoming?page=${page}`,
    }),
    getIdParams: builder.query<IGetMovieDetails, string>({
      query: (id) => `movie/${id}?append_to_response=videos`,
    }),
    getSearchMovie: builder.query<IGetSearch, { search: string; page: number }>(
      {
        query: ({ search, page }) =>
          `search/movie?query=${search}&include_adult=false&page=${page}`,
      }
    ),
  }),
});

export const {
  useGetMoviesByRatedQuery,
  useGetIdParamsQuery,
  useGetSearchMovieQuery,
} = movieApi;
