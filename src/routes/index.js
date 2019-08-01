import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Page from "../pages/Page";
import Albums from "../pages/Albums";
import AlbumFiles from "../pages/AlbumFiles";

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/pages/1" />
    <Route path="/pages/:id" component={Page} />
    <Route exact path="/albums" component={Albums} />
    <Route exact path="/albums/:id/files" component={AlbumFiles} />
  </Switch>
);

export default Routes;
