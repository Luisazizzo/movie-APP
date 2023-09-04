import { Provider } from "react-redux";
import { useGetIdParamsQuery } from "../../api/movieApi";
import { IGetMovieDetails } from "../../interface";
import Details from "./Details";
import { render, screen } from "@testing-library/react";
import { setupStore } from "../../store/store";

jest.mock(
  "../../components/SectionDetails/SectionDetailsRight/SectionDetailsRight",
  () => () => <div data-testid="sectionDetailsRight" />
);

jest.mock("../../components/FooterDetails/FooterDetails", () => () => (
  <div data-testid="footerDetails" />
));

jest.mock(
  "../../components/SectionDetails/SectionDetailsLeft/SectionDetailsLeft",
  () => () => <div data-testid="sectionDetailsLeft" />
);

jest.mock("../../components/GenresList/GenresList", () => () => (
  <div data-testid="genresList" />
));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => jest.fn().mockReturnValue({ id: "123" }),
}));

const mockData: IGetMovieDetails = {
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
    results: [],
  },
  vote_average: 8.271,
  vote_count: 2220,
};

jest.mock("../../api/movieApi", () => ({
  ...jest.requireActual("../../api/movieApi"),
  useGetIdParamsQuery: jest.fn(),
}));

const mockedUseGetIdParamsQuery = jest.mocked(useGetIdParamsQuery);

const mockReturn = (data: IGetMovieDetails | undefined = undefined) => {
  mockedUseGetIdParamsQuery.mockReturnValueOnce({
    refetch: jest.fn(),
    data,
  });
};

const renderDetailsPage = () => {
  mockReturn(mockData);
  render(
    <Provider store={setupStore()}>
      <Details />
    </Provider>
  );
};

describe("Details page", () => {
  test("should render sectionDetailsLeft", () => {
    mockReturn(mockData);
    renderDetailsPage();
    expect(screen.getByTestId("sectionDetailsLeft")).toBeInTheDocument();
  });
});
