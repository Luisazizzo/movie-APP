import { render, screen } from "@testing-library/react";
import GenresList from "./GenresList";
import { GenresDetails } from "../../interface/IGetMovieDetails";

const mockProps: GenresDetails[] = [
  {
    id: 1,
    name: "Action",
  },
];

const renderGenresList = (mockGenres?: GenresDetails[]) =>
  render(<GenresList genresList={mockGenres} />);

describe("GenresList", () => {
  test("Should render genres", () => {
    renderGenresList(mockProps);
    expect(screen.getByText(/Action/)).toBeInTheDocument();
  });
  test("Should not render genres if genresList prop is not defined", () => {
    renderGenresList();
    expect(screen.queryByText(/Action/)).not.toBeInTheDocument();
  });
});
