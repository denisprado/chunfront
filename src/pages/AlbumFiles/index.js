import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Creators as ActionAlbumFiles } from "../../store/ducks/albumFiles";
import { Creators as ActionAlbums } from "../../store/ducks/albums";
import { Section, Column, Row } from "../../styles/components";

class AlbumFiles extends Component {
  componentDidMount() {
    if (this.props.match) {
      this.loadAlbumFiles();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match) {
      const { id } = this.props.match.params;
      if (prevProps.match.params.id !== id) {
        this.loadAlbumFiles();
      }
    }
  }

  loadAlbumFiles = () => {
    const { getAlbumFilesRequest, getAlbumsRequest } = this.props;
    const { id } = this.props.match.params;
    getAlbumsRequest(id);
    getAlbumFilesRequest(id);
  };

  render() {
    console.log(this.props.files);
    const { files, albums } = this.props;
    const images = files.map(file => ({
      original: file.url,
      thumbnail: file.url
    }));

    return (
      <Section>
        <Row id="albumsFiles">
          <Column col={2}>
            {albums &&
              albums.map(album => (
                <Link to={`/albums/${album.id}?files=true`}>
                  <Row>
                    <Column col={2}>
                      <img
                        className="hero-image"
                        src={album.thumbImage.url}
                        alt={album.title}
                        width="100%"
                      />
                    </Column>
                    <Column col={6}>
                      <h3>{album.title}</h3>
                    </Column>
                  </Row>
                </Link>
              ))}
          </Column>
          <Column col={6}>
            <ImageGallery items={images} />
          </Column>
        </Row>
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums.data,
  files: state.albumFiles.data,
  page: state.albumFiles.page
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ActionAlbumFiles, ...ActionAlbums }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumFiles);
