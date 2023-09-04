import { renderHook } from "@testing-library/react";
import usePopup from "./usePopup";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

const mockUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

const mockSetOpen = jest.fn();
const mockSetConfirmLoading = jest.fn();

describe("usePopup", () => {
  test("should render function showPopconfirm if setOpen it's true", () => {
    const { result } = renderHook(() =>
      usePopup(mockSetOpen, mockSetConfirmLoading)
    );
    result.current.showPopconfirm();
    expect(mockSetOpen).toHaveBeenCalledWith(true);
  });
  test("should render function handleConfirmPopup if setConfirmLoading it's true", () => {
    const { result } = renderHook(() =>
      usePopup(mockSetOpen, mockSetConfirmLoading)
    );
    result.current.handleConfirmPopup();
    expect(mockSetConfirmLoading).toHaveBeenCalledWith(true);
    expect(mockSetOpen).toHaveBeenCalledWith(false);
    expect(mockSetConfirmLoading).toHaveBeenCalledWith(false);
  });
  test("should close popup if setOpen it's false", () => {
    const { result } = renderHook(() =>
      usePopup(mockSetOpen, mockSetConfirmLoading)
    );
    result.current.handleCancelPopup();
    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });
});
