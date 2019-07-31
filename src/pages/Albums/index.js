import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Creators as ActionAlbums } from '../../store/ducks/albums'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Content, Grid } from "../../styles/components";
// import { Container } from './styles';


class Albums extends Component {

  componentDidMount() {
    const { getAlbumsRequest } = this.props;
    getAlbumsRequest();
  }

  render() {
    const { albums } = this.props
    return (
      <Container>
        <Content>
          <Grid col={4}>
            {albums
              ? albums.data.map(album => (
                <Link key={album.id} to={`/albums/${album.id}`}>

                  {album.thumbImage &&
                    <>
                      <img
                        className="hero-image"
                        src={album.thumbImage.url}
                        alt={album.title}
                        width="100%"
                      />
                      <h3>{album.title}</h3>
                    </>
                  }

                </Link>
              ))
              : null}
          </Grid>
        </Content>
      </Container>);
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



