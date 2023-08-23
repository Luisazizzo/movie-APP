import { render, screen } from "@testing-library/react";
import { IMovie } from "../../../interface";
import CarouselCard from "./CarouselCard";
import "@testing-library/jest-dom";

jest.mock("../../../hooks/useHandleClickCard");

jest.mock("../../../commons/assets/images/img.png", () => "coverNotFound.png");

const mock: IMovie = {
  id: 615656,
  poster_path: "/55gBDwzQ2RVGfxJWfPJbSxZbB4B.jpg",
  title: "Shark 2 - L'abisso",
  backdrop_path: "/55gBDwzQ2RVGfxJWfPJbSxZbB4B.jpg",
  overview: "mockOverview",
};

const renderCarouselCard = (param: IMovie) =>
  render(<CarouselCard item={param} />);

describe("Render Component", () => {
  test("Should render img from backdrop_path if is defined", () => {
    renderCarouselCard(mock);
    expect(screen.getByAltText("Locandina")).toBeInTheDocument();
    expect(screen.queryByAltText("Placeholder")).not.toBeInTheDocument();
  });
  test("Should render template img if backdrop_path is undefined", () => {
    renderCarouselCard({ ...mock, backdrop_path: undefined });
    expect(screen.getByAltText("Placeholder")).toBeInTheDocument();
    expect(screen.queryByAltText("Locandina")).not.toBeInTheDocument();
  });
});
