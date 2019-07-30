import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Page from "../pages/Page";
import Albums from "../pages/Albums";

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/pages/1" />
    <Route path="/pages/:id" component={Page} />
    <Route path="/albums" component={Albums} />
  </Switch>
);

export default Routes;
