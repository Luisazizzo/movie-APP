import useHandleScroll from "./useHandleScroll";
import { fireEvent, renderHook } from "@testing-library/react";

const addEventListenerMock = jest.spyOn(window, "addEventListener");
const removeEventListenerMock = jest.spyOn(window, "removeEventListener");

describe("useHandleScroll", () => {
  test("should calls add event listener on mount", () => {
    renderHook(useHandleScroll);

    expect(addEventListenerMock).toBeCalled();
  });
  test("should update position on scroll", () => {
    const { result } = renderHook(useHandleScroll);

    expect(result.current).toBe(0);
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(result.current).toBe(100);
  });
  test("should calls remove event listener on unmount", () => {
    const { unmount } = renderHook(useHandleScroll);
    unmount();
    expect(removeEventListenerMock).toBeCalled();
  });
});
