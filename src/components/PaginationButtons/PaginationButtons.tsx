import styles from "./style.module.scss";
import { IPaginationProps } from "../../interface";
import { useCallback } from "react";

const PaginationButtons = ({
  page,
  setPage,
  totalPages = 0,
}: IPaginationProps) => {
  const nextPage = useCallback(() => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  }, [page, totalPages, setPage]);
  const previousPage = useCallback(() => {
    setPage((prev) => prev - 1);
  }, [setPage]);
  return (
    <div className={styles.Buttons}>
      <button
        className={`${page === 1 && styles.trasparent}`}
        disabled={page === 1}
        onClick={previousPage}
      >
        {"<"}
      </button>
      <p className={`${page === 1 && styles.none}`}>{page - 1}</p>
      <p className={styles.page}>{page}</p>
      <p className={`${page === totalPages && styles.none}`}>{page + 1}</p>
      <button
        className={`${page === totalPages && styles.trasparent}`}
        disabled={page === totalPages}
        onClick={nextPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default PaginationButtons;
