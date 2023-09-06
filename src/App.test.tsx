import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { setupStore } from "./store/store";
import { IGetMovieDetails, IUser } from "./interface";

jest.mock("./components/Menu/Navbar/Navbar", () => () => (
  <div data-testid="navbar" />
));

const mockUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

const mockUseLocation = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => mockUseLocation,
}));

const renderApp = () =>
  render(
    <Provider store={setupStore()}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

const mockIUser: IUser = {
  username: "username",
  email: "email",
  password: "password",
  isLogged: false,
};

const mockDetails: IGetMovieDetails = {
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
  videos: {
    id: 0,
    results: [
      {
        id: "id",
        iso_639_1: " iso_639_1",
        iso_3166_1: "iso_3166_1",
        key: "key",
        name: "name",
        official: true,
        published_at: "published_at",
        site: "site",
        size: 5,
        type: "type",
      },
    ],
  },
  vote_average: 8.271,
  vote_count: 2220,
};

describe("App component", () => {
  test("should render app", () => {
    renderApp();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
  //   test("should render", () => {
  //     renderApp();
  //     expect(localStorage.getItem("users")).toEqual(JSON.stringify(mockIUser));
  //   });
});
