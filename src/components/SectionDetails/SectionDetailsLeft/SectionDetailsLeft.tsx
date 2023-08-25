import styles from "./styles.module.scss";
import { useCallback, useMemo } from "react";
import { invertDate, invertMinutes } from "../../../commons/utils/method";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ISectionLeftProps } from "../../../interface";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  deleteFavorites,
} from "../../../store/reduxSlices/favoriteSlice/favoriteSlice";
import { RootState } from "../../../store/store";

const SectionDetailsLeft = ({ data }: ISectionLeftProps) => {
  const dispatch = useDispatch();
  const stateFavorite = useSelector((state: RootState) => state.favoriteSlice);

  const adultDot = useMemo(() => {
    if (data.adult) {
      return (
        <div className={styles.categoria}>
          <div className={styles.adulti_true}></div>
          <p>18 +</p>
        </div>
      );
    }
    return (
      <div className={styles.categoria}>
        <div className={styles.adulti_false}></div>
        <p>Per tutti</p>
      </div>
    );
  }, [data?.adult]);

  const controlledOverwie = useMemo(() => {
    if (data.overview) {
      return <p className={styles.overview}>{data.overview}</p>;
    }
    return (
      <p className={styles.overview}>
        Mi dispiace ma non c'è nessuna descrizione per questo film
      </p>
    );
  }, [data.overview]);

  const addfavorite = useCallback(() => {
    dispatch(addFavorites(data));
  }, [data, dispatch]);

  const deleteFavorite = useCallback(() => {
    dispatch(deleteFavorites(data.id));
  }, [data, dispatch]);

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
        <b>Uscita:</b>
        {data.release_date && invertDate(data.release_date)}
      </p>
      <p>
        <b>Durata:</b> {invertMinutes(data.runtime)}
      </p>
      {adultDot}
      {controlledOverwie}
    </div>
  );
};
export default SectionDetailsLeft;
