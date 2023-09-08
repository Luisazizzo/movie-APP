import styles from "./styles.module.scss";
import "./styles.css";
import { useMemo } from "react";
import { invertDate, invertMinutes } from "../../../commons/utils/method";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ISectionLeftProps } from "../../../interface";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import useFavorite from "./hook/useFavorite";

const SectionDetailsLeft = ({ data }: ISectionLeftProps) => {
  const { addfavorite, deleteFavorite } = useFavorite(data);
  const stateFavorite = useSelector((state: RootState) => state.favoriteSlice);

  const adultDot = useMemo(() => {
    if (data.adult) {
      return (
        <div className={styles.categoria}>
          <div data-testid="adult_true" className="adulti_true"></div>
          <p>18 +</p>
        </div>
      );
    }
    return (
      <div className={styles.categoria}>
        <div data-testid="adult_false" className="adulti_false"></div>
        <p>Per tutti</p>
      </div>
    );
  }, [data.adult]);

  const controlledOverwie = useMemo(() => {
    if (data.overview) {
      return <p className={styles.overview}>{data.overview}</p>;
    }
    return (
      <p className={styles.overview}>
        I'm sorry but there is no description for this movie
      </p>
    );
  }, [data.overview]);

  const controlledHeart = useMemo(() => {
    if (stateFavorite.find((item) => item.id === data.id)) {
      return <BsHeartFill onClick={deleteFavorite} className={styles.icon} />;
    }
    return <BsHeart onClick={addfavorite} className={styles.icon} />;
  }, [data.id, deleteFavorite, addfavorite, stateFavorite]);

  return (
    <div className={styles.description}>
      <div className={styles.titleAndIcon}>
        <h1>{data.title}</h1>
        {controlledHeart}
      </div>
      <p>
        <b>Release:</b>
        {data.release_date && invertDate(data.release_date)}
      </p>
      <p>
        <b>Duration:</b> {invertMinutes(data.runtime)}
      </p>
      {adultDot}
      {controlledOverwie}
    </div>
  );
};
export default SectionDetailsLeft;
