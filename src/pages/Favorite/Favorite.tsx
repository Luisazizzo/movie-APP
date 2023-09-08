import { useSelector } from "react-redux";
import { ListCard } from "../../components/index";
import styles from "./styles.module.scss";
import { RootState } from "../../store/store";
import { useMemo } from "react";

const Favorite = () => {
  const stateFavorite = useSelector(
    ({ favoriteSlice }: RootState) => favoriteSlice
  );
  const controlledFavorite = useMemo(() => {
    if (stateFavorite.length) {
      return <ListCard movies={stateFavorite} />;
    }
    return (
      <div className={styles.notPrefer}>
        <p>There are no favorite</p>
      </div>
    );
  }, [stateFavorite]);
  return (
    <div className={styles.Preferiti}>
      <h2 className={styles.title}>Favorite page</h2>
      {controlledFavorite}
    </div>
  );
};
export default Favorite;
