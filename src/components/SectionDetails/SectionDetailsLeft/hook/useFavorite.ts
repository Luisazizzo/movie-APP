import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  addFavorites,
  deleteFavorites,
} from "../../../../store/reduxSlices/favoriteSlice/favoriteSlice";
import { IGetMovieDetails } from "../../../../interface";

const useFavorite = (data: IGetMovieDetails) => {
  const dispatch = useDispatch();
  const addfavorite = useCallback(() => {
    dispatch(addFavorites(data));
  }, [data, dispatch]);

  const deleteFavorite = useCallback(() => {
    dispatch(deleteFavorites(data.id));
  }, [data, dispatch]);
  return { addfavorite, deleteFavorite };
};
export default useFavorite;
