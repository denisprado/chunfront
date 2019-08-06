import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AlbumFiles from "../pages/AlbumFiles";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Redirect exact from="/" to="/pages/1" /> */}
          {/* <Route path="/pages/:id" component={Page} /> */}
          {/* <Route exact path="/albums" component={Albums} /> */}
          <Route exact path="/albums/:id" component={AlbumFiles} />
          {/* <Route exact path="/contato" component={ContactForm} /> } */}
        </Switch>
      </div>
    );
  }
}
export default Routes;
