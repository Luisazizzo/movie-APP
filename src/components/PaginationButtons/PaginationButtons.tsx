import styles from "./style.module.scss";
import { IPaginationProps } from "../../interface";
import usePagination from "./hook/usePagination";

const PaginationButtons = ({ page, setPage, totalPages }: IPaginationProps) => {
  const { nextPage, previousPage } = usePagination(setPage);

  return (
    <div className={styles.Buttons}>
      <button
        data-testid="button-previous"
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
        data-testid="button-next"
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
