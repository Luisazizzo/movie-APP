import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from "./SignUp";

jest.mock("./utils/hooks/useHandleOnSubmitSignUp");

const renderSignup = () => render(<SignUp />);

describe("Signup component", () => {
  test("Should render correctly", () => {
    renderSignup();

    expect(screen.getByTestId("ComponentTitle")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("Should render error messagges when input fields are not valid", async () => {
    renderSignup();
    const inputUsername = screen.getAllByRole("textbox")[0];
    const inputEmail = screen.getAllByRole("textbox")[1];
    const inputPassword = screen.getAllByRole("textbox")[2];
    const inputConfirmPassword = screen.getAllByRole("textbox")[3];
    fireEvent.blur(inputUsername);
    fireEvent.blur(inputEmail);
    fireEvent.blur(inputPassword);
    fireEvent.blur(inputConfirmPassword);

    expect(await screen.findByText(/Username required/)).toBeInTheDocument();
    expect(await screen.findByText(/Email required/)).toBeInTheDocument();
    expect(await screen.findByText(/Password required/)).toBeInTheDocument();
    expect(await screen.findByText(/Confirm password/)).toBeInTheDocument();
  });
});
