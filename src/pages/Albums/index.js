import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Creators as ActionAlbums } from "../../store/ducks/albums";
import { Column, Grid, Row, Section } from "../../styles/components";
import AlbumFiles from "../AlbumFiles";

class Albums extends Component {
  componentDidMount() {
    const { getAlbumsRequest } = this.props;
    getAlbumsRequest();
  }

  render() {
    const { albums } = this.props;
    return (
      <Section>
        <Row col={6} id="albums">
          <Column col={12}>
            <Grid col={2}>
              {albums
                ? albums.data.map(album => (
                    <Link key={album.id} to={`/albums/${album.id}?files=true`}>
                      {album.thumbImage && (
                        <Row relative>
                          <Column col={12}>
                            <img
                              className="hero-image"
                              src={album.thumbImage.url}
                              alt={album.title}
                              width="100%"
                            />
                          </Column>
                          <Column absolute col={12} left={0} bottom={0} bg>
                            <h3>{album.title}</h3>
                          </Column>
                        </Row>
                      )}
                    </Link>
                  ))
                : null}
            </Grid>
          </Column>
        </Row>
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionAlbums, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
