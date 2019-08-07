import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AlbumFiles from "../pages/AlbumFiles";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/albums/:id" component={AlbumFiles} />
        </Switch>
      </div>
    );
  }
}
export default Routes;
