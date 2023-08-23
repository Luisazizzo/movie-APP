import LogIn from "./LogIn";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockUseSelector = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockUseSelector,
}));

jest.mock("./utils/hooks/useHandleOnSubmitLogIn");

const renderLogin = () => render(<LogIn />);

describe("Login component", () => {
  test("Should render correctly", () => {
    renderLogin();
    expect(screen.getByTestId("ComponentTitle")).toBeInTheDocument();
    expect(screen.getAllByRole("textbox").length).toBe(2);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });
  test("Button should be disabled if wrong input values", async () => {
    renderLogin();
    const inputUsername = screen.getAllByRole("textbox")[0];
    const inputPassword = screen.getAllByRole("textbox")[1];
    fireEvent.change(inputUsername, { target: { value: "testUser" } });
    fireEvent.change(inputPassword, { target: { value: "testPass" } });
    await waitFor(() => {
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });
  test("Button should be enabled if correct input values", () => {
    renderLogin();
    const inputUsername = screen.getAllByRole("textbox")[0];
    const inputPassword = screen.getAllByRole("textbox")[1];
    fireEvent.change(inputUsername, { target: { value: "pippo" } });
    fireEvent.change(inputPassword, { target: { value: "Pippo1234" } });

    expect(screen.queryByRole("button")).not.toBeDisabled();
  });
  test("Should render error messagges when input fields are not valid", async () => {
    renderLogin();
    const inputUsername = screen.getAllByRole("textbox")[0];
    const inputPassword = screen.getAllByRole("textbox")[1];
    fireEvent.blur(inputUsername);
    fireEvent.blur(inputPassword);

    expect(await screen.findByText(/Username richiesto/)).toBeInTheDocument();
    expect(await screen.findByText(/Password richiesta/)).toBeInTheDocument();
  });
});
