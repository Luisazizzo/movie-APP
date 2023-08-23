import { render, screen } from "@testing-library/react";
import ListCard from "./ListCard";
import "@testing-library/jest-dom";
import { Movies } from "../../interface";

const mock: Movies = [
  {
    id: 615656,
    poster_path: "/55gBDwzQ2RVGfxJWfPJbSxZbB4B.jpg",
    title: "Shark 2 - L'abisso",
    backdrop_path: "mockBackdrop_path",
    overview: "mockOverview",
  },
];

const renderListCard = (mockList?: Movies) =>
  render(<ListCard movies={mockList} />);

jest.mock("../Card/MovieCard/MovieCard", () => () => (
  <div>{mock[0].title}</div>
));

describe("ListCard", () => {
  test("Should render card if movies prop is defined", () => {
    renderListCard(mock);
    expect(screen.getByText(/Shark 2 - L'abisso/)).toBeInTheDocument();
  });
  test("Should not render card if movies prop is undefined", () => {
    renderListCard();
    expect(screen.queryByText(/Shark 2 - L'abisso/)).not.toBeInTheDocument();
  });
});
