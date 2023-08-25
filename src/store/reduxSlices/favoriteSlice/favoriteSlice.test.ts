import { IGetMovieDetails, Movies } from "../../../interface";

import reducer, {
  addFavorites,
  deleteFavorites,
  retrieveFavorites,
} from "./favoriteSlice";

const initialState: Movies = [];
describe("favoriteSlice", () => {
  // test("Should handle addFavorites reducer", () => {
  //   const details: IGetMovieDetails = {
  //     adult: false,
  //     backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
  //     belongs_to_collection: null,
  //     budget: 100000000,
  //     genres: [],
  //     homepage: "",
  //     id: 872585,
  //     imdb_id: "tt15398776",
  //     original_language: "en",
  //     original_title: "Oppenheimer",
  //     overview:
  //       "La storia del ruolo di J. Robert Oppenheimer, i quali studi condussero alle scoperte legate alla bomba atomica, con il conseguente utilizzo durante le stragi di Hiroshima e Nagasaki durante la Seconda Guerra Mondiale.",
  //     popularity: 688.702,
  //     poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  //     production_companies: [],
  //     production_countries: [],
  //     release_date: "2023-07-19",
  //     revenue: 722772416,
  //     runtime: 189,
  //     spoken_languages: [],
  //     status: "Released",
  //     tagline: "Il mondo cambia per sempre",
  //     title: "Oppenheimer",
  //     video: false,
  //     vote_average: 8.271,
  //     vote_count: 2220,
  //   };

  //   expect(reducer(initialState, addFavorites(details))).toEqual();
  // });

  test("should handle remove favorite movie", () => {
    const movieIdToDelete = 1;
    expect(reducer(initialState, deleteFavorites(movieIdToDelete))).toEqual([]);
  });
  test("Should handle retrieving favorite movies", () => {
    expect(reducer(initialState, retrieveFavorites(initialState))).toEqual(
      initialState
    );
  });
});
