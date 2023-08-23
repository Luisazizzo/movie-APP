import { renderHook } from "@testing-library/react";
import useHandleOnSubmitSignUp from "./useHandleOnSubmitSignUp";

const mockUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("useHandleOnSubmitSignUp", () => {
  test("Should return the function and call useDispacht", () => {
    const { result } = renderHook(() => useHandleOnSubmitSignUp());
    const objInfoUsers = {
      username: "pippo",
      email: "pippo@pippo",
      password: "Pippo1234",
      isLogged: true,
      confirmPassword: "Pippo1234",
    };

    expect(result.current).toBeInstanceOf(Function);
    result.current(objInfoUsers);
    expect(mockUseDispatch).toHaveBeenCalled();
  });
});
