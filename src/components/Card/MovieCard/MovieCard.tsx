import { IMovieCardProps } from "../../../interface";
import styles from "./styles.module.scss";
import { EnumBaseUrl, EnumSizeImage } from "../../../constants";
import { useMemo } from "react";
import coverNotFound from "../../../commons/assets/images/img.png";
import useHandleClickCard from "../../../hooks/useHandleClickCard";

const Card = ({ item }: IMovieCardProps) => {
  const handleClick = useHandleClickCard(item.id);

  const cover = useMemo(() => {
    if (item.poster_path) {
      return (
        <img
          className={styles.yes_img}
          src={`${EnumBaseUrl.BASE_IMG}${EnumSizeImage.IMG_500}${item.poster_path}`}
          alt="Locandina"
        />
      );
    }
    return (
      <img className={styles.no_img} src={coverNotFound} alt="Placeholder" />
    );
  }, [item.poster_path]);
  return (
    <div onClick={handleClick} className={styles.Card}>
      {cover}
      <p className={styles.title}>{item.title}</p>
    </div>
  );
};

export default Card;
