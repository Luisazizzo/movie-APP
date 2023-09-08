import { ReactNode } from "react";
import {
  useGetMoviesByRatedQuery,
  useGetIdParamsQuery,
  useGetSearchMovieQuery,
} from "./movieApi";
import { setupStore } from "../store/store";
import { Provider } from "react-redux";
import { renderHook } from "@testing-library/react";

const Wrapper = (props: { children: ReactNode }) => {
  return <Provider store={setupStore()}>{props.children}</Provider>;
};

describe("movieApi", () => {
  test("should get movies", () => {
    const { result } = renderHook(() => useGetMoviesByRatedQuery(1), {
      wrapper: Wrapper,
    });
    expect(result.current).toMatchObject({
      status: "pending",
      endpointName: "getMoviesByRated",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });
  });
  test("should get details movies", () => {
    const { result } = renderHook(() => useGetIdParamsQuery("1234"), {
      wrapper: Wrapper,
    });
    expect(result.current).toMatchObject({
      status: "pending",
      endpointName: "getIdParams",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });
  });
  test("should get search movie", () => {
    const { result } = renderHook(
      () => useGetSearchMovieQuery({ search: "pippo", page: 1 }),
      {
        wrapper: Wrapper,
      }
    );
    expect(result.current).toMatchObject({
      status: "pending",
      endpointName: "getSearchMovie",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });
  });
});
