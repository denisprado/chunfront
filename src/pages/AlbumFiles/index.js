import React, { Component } from 'react';
import { Creators as ActionAlbumFiles } from '../../store/ducks/albumFiles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AlbumFilesData from './AlbumFilesData'
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
    const { id, initialId } = this.props.match.params;
    getAlbumFilesRequest(id, initialId);
  };

  render() {
    const { files } = this.props;
    console.log(files)
    return <AlbumFilesData albumData={files} />;
  }
}

const mapStateToProps = state => ({
  files: state.albumFiles.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionAlbumFiles, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumFiles);
