import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { Movies } from "../../interface";
import "@testing-library/jest-dom";

const mock: Movies = [
  {
    id: 123,
    poster_path: "poster_path",
    title: "title",
    backdrop_path: "backdrop_path",
    overview: "overview",
  },
];

const renderHero = () => render(<Hero list={mock} />);

jest.mock("../Card/CarouselCard/CarouselCard", () => () => (
  <div>{mock[0].backdrop_path}</div>
));

describe("Hero", () => {
  test("Should render hero if list prop is defined", () => {
    renderHero();
    expect(screen.getByText(/backdrop_path/)).toBeInTheDocument();
  });
});
