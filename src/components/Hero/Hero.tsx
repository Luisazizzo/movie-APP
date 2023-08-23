import { IHeroProps } from "../../interface";
import styles from "./styles.module.scss";
import { Carousel } from "antd";
import CarouselCard from "../Card/CarouselCard/CarouselCard";
import { useMemo } from "react";

const Hero = ({ list }: IHeroProps) => {
  const mapListCarousel = useMemo(() => {
    if (list) {
      return list.map((item) => <CarouselCard item={item} key={item.id} />);
    }
  }, [list]);

  return (
    <div className={styles.Hero}>
      <Carousel autoplay dots={false}>
        {mapListCarousel}
      </Carousel>
    </div>
  );
};

export default Hero;
