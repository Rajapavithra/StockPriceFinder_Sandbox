import { BrowserRouter, Routes } from "react-router-dom";
import { Suspense } from "react";
import { getRouters } from "./user-routes";

export const RoutePaths = () => {
  return (
    <BrowserRouter basename={"/stock"}>
      <Suspense fallback={<>{"loading..."}</>}>
        <div>
          <Routes>{getRouters()}</Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};
