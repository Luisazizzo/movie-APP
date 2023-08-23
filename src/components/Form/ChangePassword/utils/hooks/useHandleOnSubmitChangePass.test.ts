import { renderHook } from "@testing-library/react";
import useHandleOnSubmitChangePass from "./useHandleOnSubmitChangePass";

const mockUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

const closeModalMock = jest.fn();

describe("useHandleOnSubmitChangePass", () => {
  test("Should call useDispacht", () => {
    const values = {
      oldPassword: "Pippo1234",
      newPassword: "Luisa1234",
      confirmPassword: "Luisa1234",
    };
    const { result } = renderHook(() =>
      useHandleOnSubmitChangePass({ closeModal: closeModalMock })
    );

    result.current(values);
    expect(mockUseDispatch).toHaveBeenCalled();
  });
});
