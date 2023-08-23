import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { BiSearch, BiUser } from "react-icons/bi";
import { EnumRoutes } from "../../constants";
import { useCallback } from "react";
import { IMenuProps } from "../../interface";

const TendinaMenu = ({ menu, setMenu }: IMenuProps) => {
  const closeMenu = useCallback(() => {
    setMenu(false);
  }, [setMenu]);
  return (
    <div className={`${styles.TendinaMenu} ${menu && styles.show}`}>
      <NavLink
        to={`/${EnumRoutes.HOME}`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <p onClick={closeMenu}>Home</p>
      </NavLink>
      <NavLink
        to={`/${EnumRoutes.FAVORITE}`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <p onClick={closeMenu}>La mia lista</p>
      </NavLink>
      <NavLink
        to={`/${EnumRoutes.PROFILE}`}
        className={({ isActive }) =>
          isActive ? styles.active : styles.authIcon
        }
      >
        <p onClick={closeMenu}>
          Profilo <BiUser />
        </p>
      </NavLink>
      <NavLink
        to={`/${EnumRoutes.SEARCH}`}
        className={({ isActive }) =>
          isActive ? styles.active : styles.iconSearch
        }
      >
        <p onClick={closeMenu}>
          Ricerca <BiSearch />
        </p>
      </NavLink>
    </div>
  );
};

export default TendinaMenu;
