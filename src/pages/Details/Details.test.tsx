import { Provider } from "react-redux";
import { useGetIdParamsQuery } from "../../api/movieApi";
import { IGetMovieDetails } from "../../interface";
import Details from "./Details";
import { render, screen } from "@testing-library/react";
import { setupStore } from "../../store/store";
import { IVideoResults } from "../../interface/IGetIdVideos";

jest.mock("../../components/index", () => ({
  SectionDetailsRight: () => <div data-testid="sectionDetailsRight" />,
  FooterDetails: () => <div data-testid="footerDetails" />,
  SectionDetailsLeft: () => <div data-testid="sectionDetailsLeft" />,
  GenresList: () => <div data-testid="genresList" />,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => jest.fn().mockReturnValue({ id: "123" }),
}));

const mockData = (video?: IVideoResults): IGetMovieDetails => ({
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
    results: video ? [video] : [],
  },
  vote_average: 8.271,
  vote_count: 2220,
});

const mockVideo = {
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
};

jest.mock("../../api/movieApi", () => ({
  ...jest.requireActual("../../api/movieApi"),
  useGetIdParamsQuery: jest.fn(),
}));

const mockedUseGetIdParamsQuery = jest.mocked(useGetIdParamsQuery);

const mockReturn = (data: IGetMovieDetails | undefined = undefined) => {
  mockedUseGetIdParamsQuery.mockReturnValue({
    refetch: jest.fn(),
    data,
  });
};

const renderDetailsPage = () => {
  render(
    <Provider store={setupStore()}>
      <Details />
    </Provider>
  );
};

describe("Details page", () => {
  test.each(["sectionDetailsLeft", "sectionDetailsRight"])(
    "should render sectionDetailsLeft and sectionDetailsRight if data is found",
    (value) => {
      mockReturn(mockData(mockVideo));
      renderDetailsPage();
      expect(screen.getByTestId(value)).toBeInTheDocument();
    }
  );
  test("should render paragraph if data is undefined", () => {
    mockReturn();
    renderDetailsPage();
    expect(screen.getByText(/Details not available/)).toBeInTheDocument();
  });
  test("should render GenresList component if data is found", () => {
    mockReturn(mockData(mockVideo));
    renderDetailsPage();
    expect(screen.getByTestId("genresList")).toBeInTheDocument();
  });
  test("should render video if is defined", () => {
    mockReturn(mockData(mockVideo));
    renderDetailsPage();
    expect(screen.getByTestId("iframe")).toBeInTheDocument();
  });
  test("should render image if video is undefined e image is defined", () => {
    mockReturn(mockData({ ...mockVideo, key: "" }));
    renderDetailsPage();
    expect(screen.getByAltText("Copertina")).toBeInTheDocument();
  });
});
