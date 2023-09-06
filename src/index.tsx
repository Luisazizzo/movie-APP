import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routerConfig } from "./routes/router";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";

const router = createBrowserRouter(routerConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={setupStore()}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
