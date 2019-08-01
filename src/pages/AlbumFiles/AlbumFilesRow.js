import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ActionAlbumFiles } from "../../store/ducks/albumFiles";
import { Column, Container, Content, Row } from "../../styles/components";

class AlbumRow extends Component {
  render() {
    const { albumFilesRow, getNextFile, getPrevFile } = this.props;
    return (
      <Container>
        <Content>
          <Row>
            <Column col={2}>
              <button
                onClick={() => {
                  getNextFile();
                }}
              >
                Next
              </button>
            </Column>
            <Column col={8}>
              <img
                src={albumFilesRow.url}
                alt={albumFilesRow.path}
                width="100%"
              />
            </Column>
            <Column col={2}>
              <button
                onClick={() => {
                  getPrevFile();
                }}
              >
                Previous
              </button>
            </Column>
          </Row>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  page: state.albumFiles
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionAlbumFiles, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumRow);
