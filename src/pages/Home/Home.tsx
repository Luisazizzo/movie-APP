import { useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { useGetMoviesByRatedQuery } from "../../api/movieApi";
import ListCard from "../../components/ListCard/ListCard";
import Hero from "../../components/Hero/Hero";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";
import { RiLoader4Fill } from "react-icons/ri";

const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetMoviesByRatedQuery(page);

  const controlled = useMemo(() => {
    if (isLoading || isFetching) {
      return (
        <div className={styles.loader}>
          <RiLoader4Fill className={styles.icon_loader} />
        </div>
      );
    }
    return <ListCard movies={data?.results} />;
  }, [data?.results, isFetching, isLoading]);

  return (
    <div className={styles.Home}>
      <Hero list={data?.results} />
      {!isLoading && <h2 className={styles.title}>In arrivo</h2>}
      {controlled}
      <PaginationButtons
        totalPages={data?.total_pages}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Home;
