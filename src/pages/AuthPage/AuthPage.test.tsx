import { PreloadedState } from "@reduxjs/toolkit";
import AuthPage from "./AuthPage";
import { RootState, setupStore } from "../../store/store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../../components/Form/LogIn/LogIn", () => () => (
  <div data-testid="login" />
));
jest.mock("../../components/Form/SignUp/SignUp", () => () => (
  <div data-testid="signup" />
));

const renderAuthPage = (preloadedState?: PreloadedState<RootState>) => {
  render(
    <Provider store={setupStore(preloadedState)}>
      <AuthPage />
    </Provider>
  );
};

describe("AuthPage", () => {
  test("should render login", () => {
    const preloadedState: PreloadedState<RootState> = {
      usersSlice: {
        username: "username",
        password: "password",
        email: "email",
        isLogged: true,
      },
    };
    renderAuthPage(preloadedState);
    expect(screen.getByTestId("login")).toBeInTheDocument();
  });
  test("should render signup", () => {
    const preloadedState: PreloadedState<RootState> = {
      usersSlice: {
        username: "",
        password: "",
        email: "",
        isLogged: false,
      },
    };
    renderAuthPage(preloadedState);
    expect(screen.getByTestId("signup")).toBeInTheDocument();
  });
});
