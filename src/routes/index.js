import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Page from "../pages/Page";
import Albums from "../pages/Albums";
import AlbumFiles from "../pages/AlbumFiles";
import ContactForm from "../components/ContactForm";

class Routes extends Component {
  render() {
    return (
      <div>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={800}
                classNames={"fade"}
              >
                <Switch>
                  <Redirect exact from="/" to="/pages/1" />
                  <Route path="/pages/:id" component={Page} />
                  <Route exact path="/albums" component={Albums} />
                  <Route exact path="/albums/:id" component={AlbumFiles} />
                  <Route exact path="/contato" component={ContactForm} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}
export default Routes;
