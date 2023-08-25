import { render, screen } from "@testing-library/react";
import { Companies } from "../../interface/IGetMovieDetails";
import FooterDetails from "./FooterDetails";

const mockData: Companies[] = [
  {
    id: 3,
    logo_path: "logo",
    name: "name",
    origin_country: "origin",
  },
];

jest.mock("../ImageCompanies/ImageCompanies", () => () => (
  <div data-testId="company-card">{mockData[0].logo_path}</div>
));

const renderFooter = (mockData?: Companies[]) =>
  render(<FooterDetails companies={mockData} />);

describe("FooterDetails", () => {
  test("Should render company cards if companies prop is defined", () => {
    renderFooter(mockData);
    expect(screen.getByTestId("company-card")).toBeInTheDocument();
  });
  test("Should not render company cards if companies prop is not defined", () => {
    renderFooter();
    expect(screen.queryByTestId("company-card")).not.toBeInTheDocument();
  });
});
