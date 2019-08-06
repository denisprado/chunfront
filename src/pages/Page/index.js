import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PagesActions } from "../../store/ducks/pages";
import PageData from "./PageData";

class Page extends Component {
  componentDidMount() {
    if (this.props.match) {
      this.loadPageDetails();
    }
  }

  loadPageDetails = () => {
    const { getPagesRequest } = this.props;
    getPagesRequest();
  };

  render() {
    const { pages } = this.props;
    return <PageData pageData={pages} />;
  }
}

const mapStateToProps = state => ({
  pages: state.pages.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PagesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
