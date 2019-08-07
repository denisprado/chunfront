import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ActionAlbumFiles } from "../../store/ducks/albumFiles";
import { Creators as ActionAlbums } from "../../store/ducks/albums";
import { Container, Section, Column, Row } from "../../styles/components";

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
    const { files, albums } = this.props;
    const images = files.map(file => ({
      original: file.url,
      thumbnail: file.url
    }));

    return (
      <Container>
        <Section center>
          <Row col={6} id="albums">
            <Column col={12}>
              <ImageGallery items={images} />
            </Column>
          </Row>
        </Section>
      </Container>
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
