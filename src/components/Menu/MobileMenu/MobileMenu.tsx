import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import "./styles.css";
import { useCallback } from "react";
import { IMenuProps } from "../../../interface";
import { navLinks } from "../constants/mockLinks";

const MobileMenu = ({ isVisible, setIsVisible }: IMenuProps) => {
  const closeMenu = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);
  return (
    <div className={`${styles.MobileMenu} ${isVisible && styles.show}`}>
      {navLinks.map((link) => (
        <NavLink
          key={link.route}
          to={`/${link.route}`}
          data-testid={link.testId}
          className={({ isActive }) =>
            isActive ? `${link.activeClassName}` : ""
          }
        >
          <p onClick={closeMenu}>{link.label}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default MobileMenu;
