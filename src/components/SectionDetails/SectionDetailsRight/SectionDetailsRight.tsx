import { useMemo } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { formatValue } from "../../../commons/utils/method";
import { ISectionRightProps } from "../../../interface";

const SectionDetailsRight = ({ data }: ISectionRightProps) => {
  const revenue = useMemo(() => {
    if (data.revenue) {
      return (
        <p>
          <b>Incasso attuale:</b>
          {formatValue(data.revenue)}
        </p>
      );
    }
  }, [data?.revenue]);

  const judgment = useMemo(() => {
    if (data.vote_count && data.vote_average) {
      return (
        <p>
          <b>Voto:</b> {data.vote_average.toFixed(1)} su {data.vote_count}{" "}
          giudizi
        </p>
      );
    }
  }, [data.vote_average, data.vote_count]);

  const tag = useMemo(() => {
    if (data.tagline) {
      return (
        <cite>
          <h3>
            <q>{data.tagline}</q>
          </h3>
        </cite>
      );
    }
  }, [data?.tagline]);

  return (
    <div className={styles.moreInfo}>
      {tag}
      {revenue}
      {judgment}
      <p>
        <b>Lingua originale:</b> {data.original_language}
      </p>
      <Link to={`https://www.imdb.com/title/${data.imdb_id}/`} target="_blank">
        Vai su IMDb
      </Link>
    </div>
  );
};
export default SectionDetailsRight;
