import styles from "./styles.module.scss";
import Card from "../Card/MovieCard/MovieCard";
import { IListCardProps } from "../../interface";
import { memo } from "react";

const ListCard = memo(({ movies }: IListCardProps) => (
  <div className={styles.ListCard}>
    {movies?.map((item) => (
      <Card item={item} key={item.id} />
    ))}
  </div>
));

export default ListCard;
