import { IGetIdVideos } from "./IGetIdVideos";

export interface IGetMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: GenresDetails[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Companies[];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: IGetIdVideos;
  vote_average: number;
  vote_count: number;
}

export interface GenresDetails {
  id: number;
  name: string;
}

export interface Companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
