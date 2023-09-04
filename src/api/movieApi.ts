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
      query: (page) => `movie/upcoming?language=it-IT&page=${page}`,
    }),
    getIdParams: builder.query<IGetMovieDetails, string>({
      query: (id) => `movie/${id}?append_to_response=videos`,
    }),
    getSearchMovie: builder.query<IGetSearch, string>({
      query: (search) =>
        `search/movie?query=${search}&include_adult=false&language=it-US&page=1`,
    }),
  }),
});

export const {
  useGetMoviesByRatedQuery,
  useGetIdParamsQuery,
  useGetSearchMovieQuery,
} = movieApi;
