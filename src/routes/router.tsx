import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Favorite from "../pages/Favorite/Favorite";
import AuthPage from "../pages/AuthPage/AuthPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import App from "../App";
import { EnumRoutes } from "../constants";
import Profile from "../pages/Profile/Profile";
import Details from "../pages/Details/Details";
import Search from "../pages/Search/Search";

export const router = createBrowserRouter([
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
]);
