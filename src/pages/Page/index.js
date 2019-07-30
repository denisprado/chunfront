import _ from 'lodash';
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PageDetailsActions } from "../../store/ducks/pageDetails";
import PageData from './PageData'

// import { Container } from './styles';

class Page extends Component {
  componentDidMount() {
    if (this.props.match) {
      this.loadPageDetails();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match) {
      const { id } = this.props.match.params;
      if (prevProps.match.params.id !== id) {
        this.loadPageDetails();
      }
    }
  }

  loadPageDetails = () => {
    const { getPageDetailsRequest } = this.props;
    const { id } = this.props.match.params;
    getPageDetailsRequest(id);
  };

  render() {
    const { page } = this.props;
    console.log(page)
    return (
      <PageData pageData={page} />
    );
  }
}

const mapStateToProps = state => ({
  page: state.pageDetails.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PageDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
