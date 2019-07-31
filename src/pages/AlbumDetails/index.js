import React, { Component } from 'react';
import { Creators as ActionAlbumDetails } from '../../store/ducks/albumDetails'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AlbumData from './AlbumData'
// import { Container } from './styles';

class AlbumDetails extends Component {
  componentDidMount() {
    if (this.props.match) {
      this.loadAlbumDetails();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match) {
      const { id } = this.props.match.params;
      if (prevProps.match.params.id !== id) {
        this.loadAlbumDetails();
      }
    }
  }

  loadAlbumDetails = () => {
    const { getAlbumDetailsRequest } = this.props;
    const { id } = this.props.match.params;
    getAlbumDetailsRequest(id);
  };

  render() {
    const { album } = this.props;
    return <AlbumData albumData={album} />;
  }
}

const mapStateToProps = state => ({
  album: state.albumDetails.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionAlbumDetails, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetails);
