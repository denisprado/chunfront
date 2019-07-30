import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Creators as ActionTypes } from "../../store/ducks/pages";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container } from "./styles";

class Menu extends Component {
  componentDidMount() {
    const { getPagesRequest } = this.props;
    getPagesRequest();
  }

  render() {
    const { pages } = this.props;
    return (
      <div>
        {!pages.loading
          ? pages.data.map(page => <p key={page.id}>{page.title}</p>)
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pages
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionTypes, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
