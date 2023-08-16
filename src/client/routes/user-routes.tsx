import { Routes } from "./constant";
import { LandingPage } from "../pages/landingPage";
import { SearchResult } from "../pages/searchResult";
import { Route } from "react-router-dom";

const getRoutes = (routes) => {
  return routes.map((route) => {
    return (
      <Route key={route.path} path={route.path} element={route.component} />
    );
  });
};

export const getRouters = () => {
  const routes = [
    {
      path: Routes.STOCK_HOME_SEARCH,
      component: <LandingPage />
    },
    {
      path: Routes.SEARCH_RESULT,
      component: <SearchResult />
    }
  ];
  return getRoutes(routes);
};
