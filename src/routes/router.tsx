import React from "react";
import App from "../App";
import { EnumRoutes } from "../constants";
import {
  AuthPage,
  Details,
  ErrorPage,
  Favorite,
  Home,
  Profile,
  Search,
} from "../pages";

export const routerConfig = [
  {
    path: EnumRoutes.BASE,
    element: <App />,
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
      {
        path: EnumRoutes.HOME,
        element: <Home />,
      },
      {
        path: EnumRoutes.FAVORITE,
        element: <Favorite />,
      },
      {
        path: EnumRoutes.PROFILE,
        element: <Profile />,
      },
      {
        path: `${EnumRoutes.DETAILS}/:id`,
        element: <Details />,
      },
      {
        path: EnumRoutes.SEARCH,
        element: <Search />,
      },
    ],
  },

  {
    path: EnumRoutes.ERROR,
    element: <ErrorPage />,
  },
];
