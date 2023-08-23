import { renderHook } from "@testing-library/react";
import useHandleClickCard from "./useHandleClickCard";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("useCustomHookHandleClick", () => {
  test("Should navigates to exact path", () => {
    const { result } = renderHook(() => useHandleClickCard(123));

    result.current();
    expect(mockNavigate).toHaveBeenCalled();
  });
});
