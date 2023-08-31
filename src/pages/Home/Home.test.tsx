import Home from "./Home";
import { useGetMoviesByRatedQuery } from "../../api/movieApi";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";
import { IGetMoviesRes } from "../../interface";

const mockData: IGetMoviesRes = {
  page: 1,
  results: [
    {
      id: 2,
      poster_path: " poster_path",
      title: "title",
      backdrop_path: "backdrop_path",
      overview: "overview",
    },
  ],
  total_pages: 10,
  total_results: 10,
};

jest.mock("../../api/movieApi", () => ({
  ...jest.requireActual("../../api/movieApi"),
  useGetMoviesByRatedQuery: jest.fn(),
}));

const mockedUseGetMoviesByRatedQuery = jest.mocked(useGetMoviesByRatedQuery);

const mockReturn = (
  data: IGetMoviesRes | undefined = undefined,
  isLoading = false,
  isFetching = false
) => {
  mockedUseGetMoviesByRatedQuery.mockReturnValueOnce({
    refetch: jest.fn(),
    data,
    isLoading,
    isFetching,
  });
};

jest.mock("../../components/PaginationButtons/PaginationButtons", () => () => (
  <div data-testid="buttons" />
));

jest.mock("../../components/ListCard/ListCard", () => () => (
  <div data-testid="movie-list" />
));
jest.mock("../../components/Hero/Hero", () => () => <div data-testid="hero" />);

jest.mock("react-icons/ri", () => ({
  ...jest.requireActual("react-icons/ri"),
  RiLoader4Fill: () => <div data-testid="icon" />,
}));

const renderHome = () =>
  render(
    <Provider store={setupStore()}>
      <Home />
    </Provider>
  );

describe("Home page", () => {
  test.each(["buttons", "movie-list", "hero"])(
    "should render home page",
    (value) => {
      mockReturn(mockData);
      renderHome();
      expect(screen.getByTestId(value)).toBeInTheDocument();
    }
  );
  test("should render icon if isFetching and isLoading are true", () => {
    mockReturn(mockData, true);
    renderHome();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
