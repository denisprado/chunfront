import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import AlbumList from "../../components/AlbumList";
import { Creators as AlbumsActions } from "../../store/ducks/albums";
import { Column, Container, Grid, Row, Section } from "../../styles/components";

export default function AlbumFiles({ match }) {
  //states
  const albums = useSelector(state => state.albums.data);

  // dispatch
  const dispatch = useDispatch();
  function handleCloseAlbum() {
    dispatch(AlbumsActions.closeAlbumFiles());
  }

  let albumSelected = albums.filter(
    album => album.id === parseInt(match.params.id, 10)
  );

  let images =
    albumSelected[0].Files &&
    albumSelected[0].Files.map(file => ({
      original: file.url,
      thumbnail: file.url
    }));

  return (
    <Container>
      <Section center>
        <Row id="albums">
          <Row bg>
            <Column col={11} />
            <Column col={1}>
              <Link to="#albums" onClick={() => handleCloseAlbum()}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </Link>
            </Column>
          </Row>
          <Column col={1} />

          <Column col={9}>
            <ImageGallery items={images} thumbnailPosition="right" />
          </Column>

          <Column col={1} />

          <Column col={1}>
            <Grid col={1}>
              <Row>
                <Column col={11}>
                  <p>Outros Albums</p>
                </Column>
              </Row>
              <AlbumList />
            </Grid>
          </Column>
        </Row>
      </Section>
    </Container>
  );
}
