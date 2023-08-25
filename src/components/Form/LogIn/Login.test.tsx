import LogIn from "./LogIn";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootState, setupStore } from "../../../store/store";

const preloadedState: PreloadedState<RootState> = {
  usersSlice: {
    username: "username",
    password: "password",
    email: "email",
    isLogged: true,
  },
};

const renderLogin = (preloadedState?: PreloadedState<RootState>) => {
  render(
    <Provider store={setupStore(preloadedState)}>
      <LogIn />
    </Provider>
  );
};

jest.mock("./utils/hooks/useHandleOnSubmitLogIn");

describe("Login component", () => {
  test("Should render correctly", () => {
    renderLogin(preloadedState);
    expect(screen.getByTestId("ComponentTitle")).toBeInTheDocument();
    expect(screen.getAllByRole("textbox").length).toBe(2);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });
  test("Button should be disabled if wrong input values", async () => {
    renderLogin(preloadedState);
    const inputUsername = screen.getAllByRole("textbox")[0];
    const inputPassword = screen.getAllByRole("textbox")[1];
    fireEvent.change(inputUsername, { target: { value: "testUser" } });
    fireEvent.change(inputPassword, { target: { value: "testPass" } });
    await waitFor(() => {
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });
  test("Button should be enabled if correct input values", () => {
    renderLogin(preloadedState);
    const inputUsername = screen.getAllByRole("textbox")[0];
    const inputPassword = screen.getAllByRole("textbox")[1];
    fireEvent.change(inputUsername, { target: { value: "pippo" } });
    fireEvent.change(inputPassword, { target: { value: "Pippo1234" } });

    expect(screen.queryByRole("button")).not.toBeDisabled();
  });
  test("Should render error messagges when input fields are not valid", async () => {
    renderLogin(preloadedState);
    const inputUsername = screen.getAllByRole("textbox")[0];
    const inputPassword = screen.getAllByRole("textbox")[1];
    fireEvent.blur(inputUsername);
    fireEvent.blur(inputPassword);

    expect(await screen.findByText(/Username richiesto/)).toBeInTheDocument();
    expect(await screen.findByText(/Password richiesta/)).toBeInTheDocument();
  });
});
