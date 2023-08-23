import styles from "./styles.module.scss";
import { BiSearch, BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { EnumRoutes } from "../../constants";
import { useCallback, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import TendinaMenu from "../TendinaMenu/TendinaMenu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, []);

  return (
    <div
      className={`${styles.Navbar} ${
        scrollPosition > 0 ? styles.scrolled : ""
      }`}
    >
      <NavLink to={`/${EnumRoutes.HOME}`}>
        <h2 className={styles.logo}>FILMFLIX</h2>
      </NavLink>

      <div className={styles.navigation}>
        <NavLink
          to={`/${EnumRoutes.HOME}`}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to={`/${EnumRoutes.FAVORITE}`}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <p>La mia lista</p>
        </NavLink>
        <NavLink
          to={`/${EnumRoutes.PROFILE}`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.authIcon
          }
        >
          <BiUser />
        </NavLink>
        <NavLink
          to={`/${EnumRoutes.SEARCH}`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.iconSearch
          }
        >
          <BiSearch />
        </NavLink>
      </div>
      <div className={styles.hamburgerMenu}>
        <FiMenu onClick={toggleMenu} />
      </div>
      <TendinaMenu menu={menu} setMenu={setMenu} />
    </div>
  );
};

export default Navbar;
