import { Movies } from "./IMovie";

export interface IGetMoviesRes {
  page: number;
  results: Movies;
  total_pages: number;
  total_results: number;
}
