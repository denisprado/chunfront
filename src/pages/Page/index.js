import React, { Component } from "react";
import { Creators as PagesActions } from "../../store/ducks/pages";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import { Container } from './styles';

class Pages extends Component {
  componentDidMount() {
    const { getPagesRequest } = this.props;

    getPagesRequest();
  }

  render() {
    const { pages, match } = this.props;
    return (
      <div>
        {!pages.loading &&
          pages.data.map(
            page =>
              match.params.id === pages.id && <p key={page.id}>{page.index}</p>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pages
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PagesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);
