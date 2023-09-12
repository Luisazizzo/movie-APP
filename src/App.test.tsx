import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
import { IGetMovieDetails, IUser } from "./interface";
import { EnumRoutes } from "./constants";
import { retrieveUser } from "./store/reduxSlices/userSlice/usersSlice";
import { retrieveFavorites } from "./store/reduxSlices/favoriteSlice/favoriteSlice";
import { MemoryRouter } from "react-router-dom";

jest.mock("./components/Menu/Navbar/Navbar", () => () => (
  <div data-testid="navbar" />
));

const mockUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

const mockOutlet = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Outlet: () => mockOutlet,
}));

const renderApp = (location: Partial<Location> | string = "") =>
  render(
    <MemoryRouter initialEntries={[EnumRoutes.BASE + location]}>
      <App />
    </MemoryRouter>
  );

const mockGetItemReturn = (isDefined = false) => {
  const storage: { [key: string]: string } = {
    users: JSON.stringify(mockedUser),
    favorites: JSON.stringify([mockedFavorites]),
  };
  const mockedLocalStorageGetItem = jest.fn((key: string) =>
    isDefined ? storage[key] : null
  );
  global.Storage.prototype.getItem = mockedLocalStorageGetItem;
  return mockedLocalStorageGetItem;
};

const mockedUser: IUser = {
  username: "username",
  email: "email",
  password: "password",
  isLogged: false,
};

const mockedFavorites: IGetMovieDetails = {
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
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  afterAll(() => {
    (global.Storage.prototype.getItem as jest.Mock<any, any>).mockRestore();
  });
  test("should render navbar if location is different from /", () => {
    renderApp({ pathname: EnumRoutes.HOME });
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
  test("should not render navbar if location is the same from /", () => {
    renderApp();
    expect(screen.queryByTestId("navbar")).not.toBeInTheDocument();
  });
  test("should render mockedUser and mockedFavorites", () => {
    mockGetItemReturn(true).mockReturnValueOnce(JSON.stringify(mockedUser));
    renderApp();
    expect(mockUseDispatch).toHaveBeenCalledWith(retrieveUser(mockedUser));
    mockGetItemReturn(true).mockReturnValueOnce(
      JSON.stringify([mockedFavorites])
    );
    expect(mockUseDispatch).toHaveBeenCalledWith(
      retrieveFavorites([mockedFavorites])
    );
  });
});
