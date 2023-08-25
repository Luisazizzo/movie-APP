import { memo } from "react";
import { idClass } from "../../commons/utils/record";
import { GenresId } from "../../constants";
import styles from "./styles.module.scss";
import { IGenresListProps } from "../../interface";

const GenresList = memo(({ genresList }: IGenresListProps) => (
  <div className={styles.genres}>
    {genresList?.map(({ name, id }) => (
      <p
        style={{
          background:
            idClass[GenresId[name.toUpperCase() as keyof typeof GenresId]],
        }}
        key={id}
      >
        {name}
      </p>
    ))}
  </div>
));
export default GenresList;
