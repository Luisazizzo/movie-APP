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

  const listControlled = useMemo(() => {
    if (isLoading || isFetching) {
      return (
        <div className={styles.loader}>
          <RiLoader4Fill className={styles.icon_loader} />
        </div>
      );
    }
    if (data) {
      return <ListCard movies={data.results} />;
    }
  }, [data, isFetching, isLoading]);

  const heroControlled = useMemo(() => {
    if (data) {
      return <Hero list={data.results} />;
    }
  }, [data]);

  const paginationControlled = useMemo(() => {
    if (data) {
      return (
        <PaginationButtons
          totalPages={data.total_pages}
          page={page}
          setPage={setPage}
        />
      );
    }
  }, [data, page]);
  return (
    <div className={styles.Home}>
      {heroControlled}
      {!isLoading && <h2 className={styles.title}>In arrivo</h2>}
      {listControlled}
      {paginationControlled}
    </div>
  );
};

export default Home;
