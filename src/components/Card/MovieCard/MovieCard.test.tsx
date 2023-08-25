import { render, screen } from "@testing-library/react";
import Card from "./MovieCard";
import { IMovie } from "../../../interface";

jest.mock("../../../hooks/useHandleClickCard");
jest.mock("../../../commons/assets/images/img.png", () => "coverNotFound.png");

const mock: IMovie = {
  id: 615656,
  poster_path: "/55gBDwzQ2RVGfxJWfPJbSxZbB4B.jpg",
  title: "Shark 2 - L'abisso",
  backdrop_path: "mockBackdrop_path",
  overview: "mockOverview",
};

const renderCard = (param: IMovie) => render(<Card item={param} />);

describe("Render Component", () => {
  test("Should render img from poster_path if is defined", () => {
    renderCard(mock);
    expect(screen.getByAltText("Locandina")).toBeInTheDocument();
    expect(screen.queryByAltText("Placeholder")).not.toBeInTheDocument();
  });
  test("Should render template img if poster_path is undefined", () => {
    renderCard({ ...mock, poster_path: undefined });
    expect(screen.getByAltText("Placeholder")).toBeInTheDocument();
    expect(screen.queryByAltText("Locandina")).not.toBeInTheDocument();
  });
});
