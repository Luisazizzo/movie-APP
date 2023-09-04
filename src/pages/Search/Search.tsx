import { useGetSearchMovieQuery } from "../../api/movieApi";
import ListCard from "../../components/ListCard/ListCard";
import styles from "./styles.module.scss";
import { Input } from "antd";
import { useMemo, useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading, isFetching } = useGetSearchMovieQuery(searchValue, {
    skip: searchValue.length <= 1,
  });

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
        return <ListCard movies={data.results} />;
      }
      return (
        <div className={styles.notResults}>
          <p>Nessun risultato</p>
        </div>
      );
    }
  }, [data?.results, isFetching, isLoading]);

  return (
    <div className={styles.Search}>
      <h2>Ricerca</h2>

      <Input
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
