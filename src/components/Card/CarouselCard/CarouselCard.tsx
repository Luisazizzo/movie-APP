import { ICarouselProps } from "../../../interface/ICarouselProps";
import styles from "./styles.module.scss";
import { EnumBaseUrl, EnumSizeImage } from "../../../constants";
import { useMemo } from "react";
import coverNotFound from "../../../commons/assets/images/img.png";
import useHandleClickCard from "../../../hooks/useHandleClickCard";

const CarouselCard = ({ item }: ICarouselProps) => {
  const handleClick = useHandleClickCard(item.id);

  const cover = useMemo(() => {
    if (item.backdrop_path) {
      return (
        <img
          src={`${EnumBaseUrl.BASE_IMG}${EnumSizeImage.IMG_ORIGINAL}${item.backdrop_path}`}
          alt="Locandina"
        />
      );
    }
    return <img src={coverNotFound} alt="Placeholder" />;
  }, [item.backdrop_path]);
  return (
    <div className={styles.carousel}>
      <div className={styles.box}></div>
      {cover}
      <div className={styles.info}>
        <h1>{item.title}</h1>
        <p className={styles.description}>{item.overview}</p>
        <button onClick={handleClick}>Details</button>
      </div>
    </div>
  );
};

export default CarouselCard;
