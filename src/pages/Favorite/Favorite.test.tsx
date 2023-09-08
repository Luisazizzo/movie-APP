import { PreloadedState } from "@reduxjs/toolkit";
import Favorite from "./Favorite";
import { RootState, setupStore } from "../../store/store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

jest.mock("../../components/index", () => ({
  ListCard: () => <div data-testid="listCard" />,
}));

const renderFavorite = (preloadedState?: PreloadedState<RootState>) => {
  render(
    <Provider store={setupStore(preloadedState)}>
      <Favorite />
    </Provider>
  );
};

describe("Favorite Page", () => {
  test("should render ListCard", () => {
    const preloadedState: PreloadedState<RootState> = {
      favoriteSlice: [
        {
          id: 2,
          poster_path: " poster_path",
          title: "title",
          backdrop_path: "backdrop_path",
          overview: "overview",
        },
      ],
    };
    renderFavorite(preloadedState);
    expect(screen.getByTestId("listCard")).toBeInTheDocument();
  });
  test("should not render ListCard", () => {
    const preloadedState: PreloadedState<RootState> = {
      favoriteSlice: [],
    };
    renderFavorite(preloadedState);
    expect(screen.getByText(/Non ci sono preferiti/)).toBeInTheDocument();
  });
});
