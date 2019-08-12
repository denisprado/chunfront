import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import AlbumList from "../../components/AlbumList";
import { Creators as AlbumsActions } from "../../store/ducks/albums";
import { Column, Container, Grid, Row, Section } from "../../styles/components";
import { ContainerAlbums } from "./styles";

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
      thumbnail: file.url,
      thumbnailClass: "featured-thumb",
      media: "(max-height: 960px)"
    }));

  return (
    <Container>
      <ContainerAlbums>
        <Section center>
          <Row col={12} id="albums">
            <Column col={1} />

            <Column col={8}>
              <ImageGallery items={images} thumbnailPosition="right" />
            </Column>

            <Column col={2} />

            <Column col={1}>
              <Grid col={1}>
                <Row>
                  <Column col={11}>
                    <p>Outros Albums</p>
                  </Column>
                  <Column col={1}>
                    <Link to="#albums" onClick={() => handleCloseAlbum()}>
                      <FontAwesomeIcon icon={faTimesCircle} />
                    </Link>
                  </Column>
                </Row>
                <AlbumList />
              </Grid>
            </Column>
          </Row>
        </Section>
      </ContainerAlbums>
    </Container>
  );
}
