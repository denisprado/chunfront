import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ActionTypes } from "../../store/ducks/pages";
import { StyledLink } from "./styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

class Menu extends Component {
  scrollWithOffset(el, offset) {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

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
                {!(page.title === "home") && page.title}
              </StyledLink>
            ))
          : null}
        <StyledLink
          smooth
          to={"#albums"}
          scroll={el => this.scrollWithOffset(el, 110)}
        >
          portifolio
        </StyledLink>

        {
          // scroll={el => this.scrollWithOffset(el, 60)}
        }
        <StyledLink
          smooth
          to={"#contato"}
          scroll={el => this.scrollWithOffset(el, 60)}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </StyledLink>
        <Link to={"//instagram.com/chun_fotografia/"} target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to={"//facebook.com/Chunfotografia/"} target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
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
