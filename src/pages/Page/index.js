import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PageData from "./PageData";
import { Creators as AlbumsActions } from "../../store/ducks/albums";
import { Creators as PagesActions } from "../../store/ducks/pages";

class Page extends Component {
  componentDidMount() {
    if (this.props.match) {
      this.loadPageDetails();
    }
    const { getAlbumsRequest } = this.props;
    getAlbumsRequest();
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
  bindActionCreators({ ...PagesActions, ...AlbumsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
