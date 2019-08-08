import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Creators as ActionAlbums } from "../../store/ducks/albums";
import { Container, Section, Column, Row, Grid } from "../../styles/components";
import { BrowserRouter as Router } from "react-router-dom";

class AlbumFiles extends Component {
  render() {
    const { albums, match } = this.props;

    let albumSelected = albums
      .filter(album => album.id === parseInt(match.params.id, 10))

    let images = albumSelected[0].Files && albumSelected[0].Files.map(file => ({
      original: file.url,
      thumbnail: file.url
    }));

    return (
      <Container>
        <Section center>
          <Row col={10}>
            <Column col={1}>
              <Grid col={1}>
                {albums
                  ? albums.map(album => (
                    <Link
                      key={album.id}
                      to={`/albums/${album.id}`}

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
            <Column col={1}></Column>
            <Column col={8}>
              <ImageGallery items={images} thumbnailPosition="right" />
            </Column>
          </Row>
        </Section>
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
