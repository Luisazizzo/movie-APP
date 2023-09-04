import SearchPage from "./Search";
import { IGetSearch } from "../../interface";
import { useGetSearchMovieQuery } from "../../api/movieApi";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

jest.mock("../../components/ListCard/ListCard", () => () => (
  <div data-testid="list" />
));

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Input: jest.fn(() => <input data-testid="search" />),
}));

jest.mock("react-icons/ri", () => ({
  ...jest.requireActual("react-icons/ri"),
  RiLoader4Fill: () => <div data-testid="icon" />,
}));

const mockData: IGetSearch = {
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
};

jest.mock("../../api/movieApi", () => ({
  ...jest.requireActual("../../api/movieApi"),
  useGetSearchMovieQuery: jest.fn(),
}));

const mockedUseSearchMovieQuery = jest.mocked(useGetSearchMovieQuery);

const mockReturn = (
  data: IGetSearch | undefined = undefined,
  isLoading = false,
  isFetching = false
) => {
  mockedUseSearchMovieQuery.mockReturnValueOnce({
    refetch: jest.fn(),
    data,
    isLoading,
    isFetching,
  });
};
const renderSearchPage = () =>
  render(
    <Provider store={setupStore()}>
      <SearchPage />
    </Provider>
  );
const mockSetSearchValue = jest.fn();
describe("Search Page", () => {
  test("should render search page", () => {
    mockReturn(mockData);
    renderSearchPage();
    expect(screen.getByTestId("list")).toBeInTheDocument();
  });

  test("should render icon", () => {
    mockReturn(mockData, true);
    renderSearchPage();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
  test("should render not result if data lenght is minor of one", () => {
    mockReturn();
    renderSearchPage();
    expect(screen.getByText(/Nessun risultato/)).toBeInTheDocument();
  });
});
