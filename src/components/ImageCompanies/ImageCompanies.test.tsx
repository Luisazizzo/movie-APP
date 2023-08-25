import { render, screen } from "@testing-library/react";
import ImageCompanies from "./ImageCompanies";

const mockData = {
  id: 3,
  logo_path: "logo",
  name: "name",
  origin_country: "origin",
};

const renderImageCompanies = () => render(<ImageCompanies comp={mockData} />);

describe("ImageCompanies", () => {
  test("Should render img from logo_path", () => {
    renderImageCompanies();
    expect(screen.getByAltText("name Logo")).toBeInTheDocument();
  });
});
