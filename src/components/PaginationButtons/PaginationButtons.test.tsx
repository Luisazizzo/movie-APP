import { render, screen } from "@testing-library/react";
import PaginationButtons from "./PaginationButtons";

const setPage = jest.fn();
const mockNextPage = jest.fn();
const mockPrevisionPage = jest.fn();

jest.mock("./hook/usePagination", () => () => ({
  nextPage: () => mockNextPage,
  previousePage: () => mockPrevisionPage,
}));

const renderPaginationButtons = () =>
  render(<PaginationButtons page={1} setPage={setPage} totalPages={1} />);

describe("PaginationButtons component", () => {
  test("should render component", () => {
    renderPaginationButtons();
    expect(screen.getByTestId("button-previous")).toBeInTheDocument();
  });
});
