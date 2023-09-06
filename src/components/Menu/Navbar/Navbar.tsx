import styles from "./styles.module.scss";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { EnumRoutes } from "../../../constants/enumRoutes";
import { useCallback, useMemo, useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "../../Menu/MobileMenu/MobileMenu";
import useHandleScroll from "./hook/useHandleScroll";
import { navLinks } from "../constants/mockLinks";

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
        {navLinks.map((link) => (
          <NavLink
            key={link.route}
            to={`/${link.route}`}
            data-testid={link.testId}
            className={({ isActive }) =>
              isActive ? `${link.activeClassName}` : ""
            }
          >
            <p>{link.label}</p>
          </NavLink>
        ))}
      </div>
      <div className={styles.hamburgerMenu}>
        <FiMenu data-testid="hamburger-menu" onClick={toggleMenu} />
      </div>
      <MobileMenu isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

export default Navbar;
