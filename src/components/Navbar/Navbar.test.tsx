import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";
import { EnumRoutes } from "../../constants";
import useHandleScroll from "./hook/useHandleScroll";

jest.mock("./hook/useHandleScroll");
const mockedHandleScroll = jest.mocked(useHandleScroll);

const renderNavbar = (location: Partial<Location>) =>
  render(
    <MemoryRouter initialEntries={[location]}>
      <Navbar />
    </MemoryRouter>
  );

jest.mock("../MobileMenu/MobileMenu", () => () => (
  <div data-testid="tendina-menu">Menu</div>
));

describe("Navbar", () => {
  test("Should add class if value is one", () => {
    mockedHandleScroll.mockReturnValueOnce(1);

    renderNavbar({ pathname: `/${EnumRoutes.HOME}` });
    expect(screen.getByTestId("scroll-position")).toHaveClass("scrolled");
  });
  test("Should add class if value is zero", () => {
    mockedHandleScroll.mockReturnValueOnce(0);
    renderNavbar({ pathname: `/${EnumRoutes.HOME}` });

    expect(screen.getByTestId("scroll-position")).not.toHaveClass("scrolled");
  });
  test("Should render component", () => {
    renderNavbar({ pathname: `/${EnumRoutes.HOME}` });
    expect(screen.getByText("FILMFLIX")).toBeInTheDocument();
  });
  test("Hamburger menu", () => {
    renderNavbar({ pathname: `/${EnumRoutes.HOME}` });
    fireEvent.click(screen.getByTestId("hamburger-menu"));
    expect(screen.getByTestId("tendina-menu")).toBeInTheDocument();
  });

  test("Should add class active if path is home", () => {
    renderNavbar({ pathname: `/${EnumRoutes.HOME}` });
    expect(screen.getByTestId("home-nav")).toHaveClass("active");
  });
  test("Should add class active if path is favorite", () => {
    renderNavbar({ pathname: `/${EnumRoutes.FAVORITE}` });
    expect(screen.getByTestId("favorite-nav")).toHaveClass("active");
  });
  test("Should add class active if path is profile", () => {
    renderNavbar({ pathname: `/${EnumRoutes.PROFILE}` });
    expect(screen.getByTestId("profile-nav")).toHaveClass("active");
  });
  test("Should add class active if path is search", () => {
    renderNavbar({ pathname: `/${EnumRoutes.SEARCH}` });
    expect(screen.getByTestId("search-nav")).toHaveClass("active");
  });
});
