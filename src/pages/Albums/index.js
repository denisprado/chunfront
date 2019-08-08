import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Creators as ActionAlbums } from "../../store/ducks/albums";
import { Column, Grid, Row, Section } from "../../styles/components";
import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes";

class Albums extends Component {
  componentDidMount() {
    const { getAlbumsRequest } = this.props;
    getAlbumsRequest();
  }

  async handleOpenAlbumFiles() {
    const { openAlbumFiles } = this.props;
    await openAlbumFiles();

  }

  render() {
    const { albums, isOpen } = this.props;

    return (
      <>
        {!isOpen &&
          <Container>
            <Section center>
              <Row col={6} id="albums">
                <Column col={12}>
                  <Grid col={2}>
                    {albums
                      ? albums.data.map(album => (
                        <Link
                          key={album.id}
                          to={`/albums/${album.id}`}
                          onClick={() => this.handleOpenAlbumFiles()}
                        >
                          {album.thumbImage && (
                            <Row relative>
                              <Router>
                                <Column col={12}>
                                  <img
                                    className="hero-image"
                                    src={album.thumbImage.url}
                                    alt={album.title}
                                    width="100%"
                                  />
                                </Column>
                                <Column
                                  absolute
                                  col={12}
                                  left={0}
                                  bottom={0}
                                  bg
                                >
                                  <h3>{album.title}</h3>
                                </Column>
                              </Router>
                            </Row>
                          )}
                        </Link>
                      ))
                      : null}
                  </Grid>
                </Column>
              </Row>
            </Section>
          </Container>
        }
        {isOpen && (
          <Container>
            <Section center>
              <Row bg col={12} id="albumsFiles">
                <Column col={12}>
                  <Routes />
                </Column>
              </Row>
            </Section>
          </Container>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
  isOpen: state.albums.open
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionAlbums, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
