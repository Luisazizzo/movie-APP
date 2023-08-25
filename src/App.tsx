import React, { useEffect, useMemo } from "react";
import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { retrieveUser } from "./store/reduxSlices/userSlice/usersSlice";
import { IUser } from "./interface/IUser";
import { EnumRoutes } from "./constants/enumRoutes";
import { retrieveFavorites } from "./store/reduxSlices/favoriteSlice/favoriteSlice";
import { IGetMovieDetails } from "./interface";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("users");
    const favorite = localStorage.getItem("favorites");

    if (user) {
      const parsedUser = JSON.parse(user) as IUser;
      dispatch(retrieveUser(parsedUser));
    }

    if (favorite) {
      const fav = JSON.parse(favorite) as IGetMovieDetails[];
      dispatch(retrieveFavorites(fav));
    }
  }, [dispatch]);

  const header = useMemo(() => {
    if (location.pathname !== EnumRoutes.BASE) {
      return <Navbar />;
    }
  }, [location.pathname]);

  return (
    <div className={styles.App}>
      {header}

      <Outlet />
    </div>
  );
}

export default App;
