import ChangePassword from "./ChangePassword";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore } from "../../../store/store";

jest.mock("./utils/hooks/useHandleOnSubmitChangePass");

const closeModalMock = jest.fn();

const preloadedState: PreloadedState<RootState> = {
  usersSlice: {
    username: "username",
    password: "password",
    email: "email",
    isLogged: true,
  },
};

const renderChangePassword = (preloadedState?: PreloadedState<RootState>) => {
  render(
    <Provider store={setupStore(preloadedState)}>
      <ChangePassword closeModal={closeModalMock} />
    </Provider>
  );
};

describe("ChangePassword component", () => {
  test("Should render correctly", async () => {
    renderChangePassword(preloadedState);
    expect(await screen.findByText(/Old Password/)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("Button should be enabled if correct input values", () => {
    renderChangePassword(preloadedState);
    const inputOldPassword = screen.getAllByRole("textbox")[0];
    const inputNewPassword = screen.getAllByRole("textbox")[1];
    const inputConfirmPassword = screen.getAllByRole("textbox")[2];

    fireEvent.change(inputOldPassword, { target: { value: "Pippo1234" } });
    fireEvent.change(inputNewPassword, { target: { value: "Luisa1234" } });
    fireEvent.change(inputConfirmPassword, {
      target: { value: "Luisa1234" },
    });

    expect(screen.queryByRole("button")).not.toBeDisabled();
  });
  test("Should render error messagges when input fields are not valid", async () => {
    renderChangePassword(preloadedState);
    const inputOldPassword = screen.getAllByRole("textbox")[0];
    const inputNewPassword = screen.getAllByRole("textbox")[1];
    const inputConfirmPassword = screen.getAllByRole("textbox")[2];
    fireEvent.blur(inputOldPassword);
    fireEvent.blur(inputNewPassword);
    fireEvent.blur(inputConfirmPassword);

    expect(
      await screen.findByText(/Old Password Richiesta/)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/New Password Richiesta/)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Conferma la password/)).toBeInTheDocument();
  });
});
