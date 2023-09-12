import { useGetSearchMovieQuery } from "../../api/movieApi";
import { ListCard, PaginationButtons } from "../../components/index";
import styles from "./styles.module.scss";
import { Input } from "antd";
import { useMemo, useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetSearchMovieQuery(
    { search: searchValue, page: page },
    {
      skip: searchValue.length <= 1,
    }
  );

  const controlledLoader = useMemo(() => {
    if (isLoading || isFetching) {
      return (
        <div className={styles.loader}>
          <RiLoader4Fill className={styles.icon_loader} />
        </div>
      );
    }
  }, [isFetching, isLoading]);

  const controlledResults = useMemo(() => {
    if (!isLoading || !isFetching) {
      if (data?.results.length) {
        return (
          <>
            <ListCard movies={data.results} />
            <PaginationButtons page={page} setPage={setPage} />
          </>
        );
      }
      return (
        <div className={styles.notResults}>
          <p>No result</p>
        </div>
      );
    }
  }, [data?.results, isFetching, isLoading, page]);

  return (
    <div className={styles.Search}>
      <h2>Search</h2>

      <Input
        data-testid="search"
        className={styles.inputSearch}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        style={{ width: 400 }}
        value={searchValue}
      />

      {controlledResults}
      {controlledLoader}
    </div>
  );
};
export default SearchPage;
