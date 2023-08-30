import { render, screen } from "@testing-library/react";
import PaginationButtons from "./PaginationButtons";

const setPage = jest.fn();
const mockNextPage = jest.fn();
const mockPrevisionPage = jest.fn();

jest.mock("./hook/usePagination", () => () => ({
  nextPage: () => mockNextPage,
  previousePage: () => mockPrevisionPage,
}));

const renderPaginationButtons = (number: number) =>
  render(<PaginationButtons page={number} setPage={setPage} totalPages={10} />);

describe("PaginationButtons component", () => {
  test("should the button be disabled if the page is one", () => {
    renderPaginationButtons(1);
    expect(screen.getByTestId("button-previous")).toBeDisabled();
  });
  test("should the button be disabled if the page is equal totalPages", () => {
    renderPaginationButtons(10);
    expect(screen.getByTestId("button-next")).toBeDisabled();
  });
});
