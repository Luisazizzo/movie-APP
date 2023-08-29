import { Dispatch, useCallback } from "react";

const usePagination = (setPage: Dispatch<React.SetStateAction<number>>) => {
  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, [setPage]);

  const previousPage = useCallback(() => {
    setPage((prev) => prev - 1);
  }, [setPage]);

  return { nextPage, previousPage };
};

export default usePagination;
