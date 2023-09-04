import { renderHook } from "@testing-library/react";
import useLogOut from "./useLogOut";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

const mockUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

describe("useLogOut", () => {
  test("should render costum hook useLogOut", () => {
    const { result } = renderHook(() => useLogOut());
    result.current();
    expect(mockUseDispatch).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalled();
  });
});
