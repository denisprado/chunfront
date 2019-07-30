import React from "react";

import { Switch, Route } from "react-router-dom";

import Page from "../pages/Page";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Page} />
    <Route path="/pages/:id" component={Page} />
  </Switch>
);

export default Routes;
