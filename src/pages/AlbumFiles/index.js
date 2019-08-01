import React, { Component } from "react";
import queryString from "query-string";
import { Creators as ActionAlbumFiles } from "../../store/ducks/albumFiles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ImageGallery from "react-image-gallery";
import { Row, Content, Column } from "../../styles/components";
// import { Container } from './styles';

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
    const { getAlbumFilesRequest } = this.props;
    const { id } = this.props.match.params;

    getAlbumFilesRequest(id);
  };

  render() {
    const { files } = this.props;
    const images = files.map(file => ({
      original: file.url,
      thumbnail: file.url
    }));

    return (
      <Content>
        <Row>
          <Column col={8}>
            <ImageGallery items={images} />
          </Column>
        </Row>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  files: state.albumFiles.data,
  page: state.albumFiles.page
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionAlbumFiles, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumFiles);
