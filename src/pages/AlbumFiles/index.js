import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink as Link } from "react-router-dom";
import { Creators as ActionAlbums } from "../../store/ducks/albums";
import { Container, Section, Column, Row, Grid } from "../../styles/components";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import { ContainerAlbums } from "./styles";

class AlbumFiles extends Component {
  handleCloseAlbum() {
    const { closeAlbumFiles } = this.props;
    closeAlbumFiles();
  }

  render() {
    const { albums, match } = this.props;

    let albumSelected = albums.filter(
      album => album.id === parseInt(match.params.id, 10)
    );

    let images =
      albumSelected[0].Files &&
      albumSelected[0].Files.map(file => ({
        original: file.url,
        thumbnail: file.url,
        thumbnailClass: "featured-thumb",
        media: "(max-height: 960px)"
      }));

    return (
      <Container>
        <ContainerAlbums>
          <Section center>
            <Row col={12} id="albums">
              <Column col={1}>
                <Grid col={1}>
                  {albums
                    ? albums.map(album => (
                        <Link
                          key={album.id}
                          to={`/albums/${album.id}`}
                          activeStyle={{
                            fontWeight: "bold",
                            border: "1px solid grey"
                          }}
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
              <Column col={1} />
              <Column col={8}>
                <ImageGallery items={images} thumbnailPosition="right" />
              </Column>
              <Column col={1} />
              <Column col={1}>
                <Link to="#album" onClick={() => this.handleCloseAlbum()}>
                  <FontAwesomeIcon icon={faWindowClose} />
                </Link>
              </Column>
            </Row>
          </Section>
        </ContainerAlbums>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionAlbums, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumFiles);
