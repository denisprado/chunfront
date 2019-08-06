import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ActionTypes } from "../../store/ducks/pages";
import { StyledLink } from "./styles";

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
          ? pages.data.map(page => (
              <StyledLink key={page.id} smooth to={`#${page.title}`}>
                {page.title}
              </StyledLink>
            ))
          : null}
        <StyledLink smooth to={"#albums"}>
          albums
        </StyledLink>
        <StyledLink smooth to={"#contato"}>
          contato
        </StyledLink>
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
