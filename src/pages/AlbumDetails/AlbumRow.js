import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Column, Container, Content, Row, Grid } from '../../styles/components';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom'
import { Creators as ModalActions } from '../../store/ducks/modal';

class AlbumRow extends Component {

  openAlbumModal() {
    const { openModal, closeModal } = this.props;
    openModal({
      modalType: 'ALBUM_FILES',
      open: true,
      closeModal,
    });
  }

  render() {
    const { albumRow } = this.props;
    return (
      <Container>
        <Content>
          <Row key={albumRow.id}>
            <Column col={1}>
              <img
                src={albumRow.thumbImage.url}
                alt={albumRow.thumbImage.path}
                width='100%'
              />
              {ReactHtmlParser(albumRow.title)}
            </Column>
            <Column col={7}>
              <Grid col={4}>
                {albumRow.Files.map((file, index) => (
                  <Link
                    onClick={() => this.openAlbumModal()}
                    to={{
                      pathname: `/albums/${albumRow.id}/files`,
                      search: `?page=${index + 1}`
                    }}
                    key={file.id}
                  >
                    <img src={file.url} alt={file.path} width="100%" />
                  </Link>
                ))}
              </Grid>
            </Column>
          </Row>
        </Content>
      </Container >
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  ModalActions,
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(AlbumRow);