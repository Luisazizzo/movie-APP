import { fireEvent, render, screen } from "@testing-library/react";
import TendinaMenu from "./MobileMenu";
import { MemoryRouter } from "react-router-dom";
import { EnumRoutes } from "../../constants";

const setIsVisible = jest.fn();

const renderMobileMenu = (location: Partial<Location>) =>
  render(
    <MemoryRouter initialEntries={[location]}>
      <TendinaMenu isVisible={true} setIsVisible={setIsVisible} />
    </MemoryRouter>
  );

describe("TendinaMenu", () => {
  test("Should closeMenu if isVisible is false", () => {
    renderMobileMenu({ pathname: `/${EnumRoutes.HOME}` });
    fireEvent.click(screen.getByText("Home"));
    expect(setIsVisible).toHaveBeenCalledWith(false);
  });

  test("Should add class active if path is home", () => {
    renderMobileMenu({ pathname: `/${EnumRoutes.HOME}` });
    expect(screen.getByTestId("home-mobile")).toHaveClass("active");
  });
  test("Should add class active if path is favorite", () => {
    renderMobileMenu({ pathname: `/${EnumRoutes.FAVORITE}` });
    expect(screen.getByTestId("favorite-mobile")).toHaveClass("active");
  });
  test("Should add class active if path is profile", () => {
    renderMobileMenu({ pathname: `/${EnumRoutes.PROFILE}` });
    expect(screen.getByTestId("profile-mobile")).toHaveClass("active");
  });
  test("Should add class active if path is search", () => {
    renderMobileMenu({ pathname: `/${EnumRoutes.SEARCH}` });
    expect(screen.getByTestId("search-mobile")).toHaveClass("active");
  });
});
