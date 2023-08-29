import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import "./styles.css";
import { BiSearch, BiUser } from "react-icons/bi";
import { EnumRoutes } from "../../constants";
import { useCallback } from "react";
import { IMenuProps } from "../../interface";

const MobileMenu = ({ isVisible, setIsVisible }: IMenuProps) => {
  const closeMenu = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);
  return (
    <div className={`${styles.MobileMenu} ${isVisible && styles.show}`}>
      <NavLink
        data-testid="home-mobile"
        to={`/${EnumRoutes.HOME}`}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <p onClick={closeMenu}>Home</p>
      </NavLink>
      <NavLink
        data-testid="favorite-mobile"
        to={`/${EnumRoutes.FAVORITE}`}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <p onClick={closeMenu}>La mia lista</p>
      </NavLink>
      <NavLink
        data-testid="profile-mobile"
        to={`/${EnumRoutes.PROFILE}`}
        className={({ isActive }) => (isActive ? "active" : styles.authIcon)}
      >
        <p onClick={closeMenu}>
          Profilo <BiUser />
        </p>
      </NavLink>
      <NavLink
        data-testid="search-mobile"
        to={`/${EnumRoutes.SEARCH}`}
        className={({ isActive }) => (isActive ? "active" : styles.iconSearch)}
      >
        <p onClick={closeMenu}>
          Ricerca <BiSearch />
        </p>
      </NavLink>
    </div>
  );
};

export default MobileMenu;
