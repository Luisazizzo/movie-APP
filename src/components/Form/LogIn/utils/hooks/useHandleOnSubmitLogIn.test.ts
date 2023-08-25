import { renderHook } from "@testing-library/react";
import useHandleOnSubmitLogIn from "./useHandleOnSubmitLogIn";

const mockUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

jest.mock("../../../../../store/reduxSlices/userSlice/usersSlice.ts", () => ({
  logUser: () => jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("useHandleOnSubmitLogIn", () => {
  test("Should return the function and call useDispatch", () => {
    const { result } = renderHook(() => useHandleOnSubmitLogIn());

    expect(result.current).toBeInstanceOf(Function);
    result.current();
    expect(mockUseDispatch).toHaveBeenCalled();
  });
});
