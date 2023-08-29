import { renderHook } from "@testing-library/react";
import usePagination from "./usePagination";

describe("usePagination", () => {
  test("should increment the page qhen nextPage is called", () => {
    const prevState = 1;
    let nextState: number = 0;
    const mockSetState = jest.fn().mockImplementation((callback) => {
      nextState = callback(prevState);
    });
    const { result } = renderHook(() => usePagination(mockSetState));

    result.current.nextPage();
    expect(nextState).toEqual(prevState + 1);
  });
  test("should decrement the page when previousPage is called", () => {
    const prevState = 2;
    let previsiousState: number = 0;
    const mockSetState = jest.fn().mockImplementation((callback) => {
      previsiousState = callback(prevState);
    });
    const { result } = renderHook(() => usePagination(mockSetState));

    result.current.previousPage();
    expect(previsiousState).toEqual(prevState - 1);
  });
});
