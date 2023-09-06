import { EnumRoutes } from "../../../constants";
import { BiSearch, BiUser } from "react-icons/bi";

export const navLinks = [
  {
    label: "Home",
    route: EnumRoutes.HOME,
    testId: "home-nav",
    activeClassName: "active",
  },
  {
    label: "La mia lista",
    route: EnumRoutes.FAVORITE,
    testId: "favorite-nav",
    activeClassName: "active",
  },
  {
    label: <BiUser />,
    route: EnumRoutes.PROFILE,
    testId: "profile-nav",
    activeClassName: "active",
  },
  {
    label: <BiSearch />,
    route: EnumRoutes.SEARCH,
    testId: "search-nav",
    activeClassName: "active",
  },
];
