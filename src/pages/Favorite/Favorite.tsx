import { useSelector } from "react-redux";
import ListCard from "../../components/ListCard/ListCard";
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
        <p>Non ci sono preferiti</p>
      </div>
    );
  }, [stateFavorite]);
  return (
    <div className={styles.Preferiti}>
      <h2 className={styles.title}>Pagina Preferiti</h2>
      {controlledFavorite}
    </div>
  );
};
export default Favorite;
