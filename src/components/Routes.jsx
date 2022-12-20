import React from "react";
import { Routes as GlobalRoutes, Route, Navigate } from "react-router-dom";

import { Results } from "./Results";

export const Routes = () => (
  <div className="p-4">
    <GlobalRoutes>
      <Route exact path="/">
        <Navigate to="/search" />
      </Route>
      <Route exact path="/search">
        <Results />
      </Route>
      <Route path="/images">
        <Results />
      </Route>
      <Route path="/news">
        <Results />
      </Route>
      <Route path="/videos">
        <Results />
      </Route>
    </GlobalRoutes>
  </div>
);
