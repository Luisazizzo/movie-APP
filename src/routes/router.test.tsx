import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routerConfig } from "./router";
import { render, screen } from "@testing-library/react";
import { EnumRoutes } from "../constants";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";

jest.mock("../pages", () => ({
  Home: () => <div data-testid={EnumRoutes.HOME} />,
  ErrorPage: () => <div data-testid={EnumRoutes.ERROR} />,
  Favorite: () => <div data-testid={EnumRoutes.FAVORITE} />,
  Profile: () => <div data-testid={EnumRoutes.PROFILE} />,
  Details: () => <div data-testid={EnumRoutes.DETAILS} />,
  Search: () => <div data-testid={EnumRoutes.SEARCH} />,
}));

const router = (pathname: EnumRoutes) =>
  createMemoryRouter(routerConfig, {
    initialEntries: [EnumRoutes.BASE + pathname],
  });

const renderRouter = (pathname: EnumRoutes) =>
  render(
    <Provider store={setupStore()}>
      <RouterProvider router={router(pathname)} />
    </Provider>
  );
describe("router", () => {
  test.each([
    EnumRoutes.HOME,
    EnumRoutes.FAVORITE,
    EnumRoutes.PROFILE,
    EnumRoutes.SEARCH,
    EnumRoutes.ERROR,
  ])("should render %s page", (pathId) => {
    renderRouter(pathId);
    expect(screen.getByTestId(pathId)).toBeInTheDocument();
  });
});
