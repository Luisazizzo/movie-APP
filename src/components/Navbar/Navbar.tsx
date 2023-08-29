import styles from "./styles.module.scss";
import "./styles.css";
import { BiSearch, BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { EnumRoutes } from "../../constants";
import { useCallback, useMemo, useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "../MobileMenu/MobileMenu";
import useHandleScroll from "./hook/useHandleScroll";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollPosition = useHandleScroll();

  const toggleMenu = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const navbarClassName = useMemo(() => {
    return `${styles.Navbar} ${scrollPosition > 0 ? "scrolled" : ""}`;
  }, [scrollPosition]);

  return (
    <div data-testid="scroll-position" className={navbarClassName}>
      <NavLink to={`/${EnumRoutes.HOME}`}>
        <h2 className={styles.logo}>FILMFLIX</h2>
      </NavLink>

      <div className={styles.navigation}>
        <NavLink
          data-testid="home-nav"
          to={`/${EnumRoutes.HOME}`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          data-testid="favorite-nav"
          to={`/${EnumRoutes.FAVORITE}`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <p>La mia lista</p>
        </NavLink>
        <NavLink
          data-testid="profile-nav"
          to={`/${EnumRoutes.PROFILE}`}
          className={({ isActive }) => (isActive ? "active" : styles.authIcon)}
        >
          <BiUser />
        </NavLink>
        <NavLink
          data-testid="search-nav"
          to={`/${EnumRoutes.SEARCH}`}
          className={({ isActive }) =>
            isActive ? "active" : styles.iconSearch
          }
        >
          <BiSearch />
        </NavLink>
      </div>
      <div className={styles.hamburgerMenu}>
        <FiMenu data-testid="hamburger-menu" onClick={toggleMenu} />
      </div>
      <MobileMenu isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

export default Navbar;
