import { PreloadedState } from "@reduxjs/toolkit";
import SectionDetailsLeft from "./SectionDetailsLeft";
import { RootState, setupStore } from "../../../store/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { IGetMovieDetails } from "../../../interface";

const addFavorite = jest.fn();
const deleteFavorite = jest.fn();

jest.mock("./hook/useFavorite", () => () => ({
  addfavorite: () => addFavorite,
  deleteFavorite: () => deleteFavorite,
}));

jest.mock("react-icons/bs", () => ({
  ...jest.requireActual("react-icons/bs"),
  BsHeartFill: () => <div data-testid="mocked-heart-fill" />,
  BsHeart: () => <div data-testid="mocked-heart" />,
}));

const preloadedState: PreloadedState<RootState> = {
  favoriteSlice: [
    {
      id: 2,
      poster_path: " poster_path",
      title: "title",
      backdrop_path: "backdrop_path",
      overview: "overview",
    },
  ],
};

const details: IGetMovieDetails = {
  adult: false,
  backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
  belongs_to_collection: null,
  budget: 100000000,
  genres: [],
  homepage: "",
  id: 872585,
  imdb_id: "tt15398776",
  original_language: "en",
  original_title: "Oppenheimer",
  overview:
    "La storia del ruolo di J. Robert Oppenheimer, i quali studi condussero alle scoperte legate alla bomba atomica, con il conseguente utilizzo durante le stragi di Hiroshima e Nagasaki durante la Seconda Guerra Mondiale.",
  popularity: 688.702,
  poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  production_companies: [],
  production_countries: [],
  release_date: "2023-07-19",
  revenue: 722772416,
  runtime: 189,
  spoken_languages: [],
  status: "Released",
  tagline: "Il mondo cambia per sempre",
  title: "Oppenheimer",
  video: false,
  vote_average: 8.271,
  vote_count: 2220,
};

const renderSectionDetailsLeft = (details: IGetMovieDetails) => {
  render(
    <Provider store={setupStore(preloadedState)}>
      <SectionDetailsLeft data={details} />
    </Provider>
  );
};

describe("SectionDetailsLeft", () => {
  test("should render adultDot correctly if is false", () => {
    renderSectionDetailsLeft(details);
    expect(screen.getByTestId("adult_false")).toHaveClass("adulti_false");
    expect(screen.getByText("Per tutti")).toBeInTheDocument();
  });
  test("should render adultDot correctly if is true", () => {
    renderSectionDetailsLeft({ ...details, adult: true });
    expect(screen.getByTestId("adult_true")).toHaveClass("adulti_true");
    expect(screen.getByText("18 +")).toBeInTheDocument();
  });
  test("should render controlledOverwie if is defined", () => {
    renderSectionDetailsLeft(details);
    expect(screen.getByText(details.overview)).toBeInTheDocument();
  });
  test("should render controlledOverwie if is undefined", () => {
    renderSectionDetailsLeft({ ...details, overview: "" });
    expect(
      screen.getByText(
        "Mi dispiace ma non c'è nessuna descrizione per questo film"
      )
    ).toBeInTheDocument();
  });

  test("should render correctly icon heart if it's in your favorites", () => {
    renderSectionDetailsLeft({ ...details, id: 2 });
    expect(screen.getByTestId("mocked-heart-fill")).toBeInTheDocument();
  });
  test("should render correctly icon heart if it's not in your favorites", () => {
    renderSectionDetailsLeft(details);
    expect(screen.getByTestId("mocked-heart")).toBeInTheDocument();
  });
});
