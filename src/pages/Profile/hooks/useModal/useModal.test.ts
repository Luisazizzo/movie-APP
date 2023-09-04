import { renderHook } from "@testing-library/react";
import useModal from "./useModal";

const mockSetIsModal = jest.fn();

describe("useModal", () => {
  test("should render useModal if setIsModalOpen it's true", () => {
    const { result } = renderHook(() => useModal(mockSetIsModal));
    result.current.showModal();
    expect(mockSetIsModal).toHaveBeenCalledWith(true);
  });
  test("should not render useModal if setIsModalOpen it's false", () => {
    const { result } = renderHook(() => useModal(mockSetIsModal));
    result.current.closeModal();
    expect(mockSetIsModal).toHaveBeenCalledWith(false);
  });
});
