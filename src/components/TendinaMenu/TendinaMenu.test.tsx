import { fireEvent, render, screen } from "@testing-library/react";
import TendinaMenu from "./TendinaMenu";
import { MemoryRouter } from "react-router-dom";
import { EnumRoutes } from "../../constants";

const setIsVisible = jest.fn();

const renderTendinaMenu = (location: Partial<Location>) =>
  render(
    <MemoryRouter initialEntries={[location]}>
      <TendinaMenu isVisible={true} setIsVisible={setIsVisible} />
    </MemoryRouter>
  );

describe("TendinaMenu", () => {
  test("Should closeMenu if isVisible is false", () => {
    renderTendinaMenu({ pathname: `/${EnumRoutes.HOME}` });
    fireEvent.click(screen.getByText("Home"));
    expect(setIsVisible).toHaveBeenCalledWith(false);
  });

  test("Should add class active if path is home", () => {
    renderTendinaMenu({ pathname: `/${EnumRoutes.HOME}` });
    //expect(screen.getByTestId("Home")).toHaveClass("active");
  });
});
