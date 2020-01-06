import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Creators as ModalActions } from "../../store/ducks/modal";
import { Creators as AlbumsActions } from "../../store/ducks/albums";
import { Column, Row } from "../../styles/components";
import Card from "../../components/Card";
// import { Container } from './styles';

function AlbumRow({ album }) {
  const dispatch = useDispatch();

  function handleOpenAlbumFiles(id) {
    dispatch(AlbumsActions.selectAlbum(id));
    dispatch(
      ModalActions.openModal({
        modalType: "ALBUM_FILES"
      })
    );
  }

  return album.thumbImage ? (
    <Link
      key={album.id}
      to={`/albums/${album.id}`}
      onClick={() => handleOpenAlbumFiles(album.id)}
    >
      <Card>
        <Row relative>
          <Column col={12} colsm={12}>
            <img src={album.thumbImage.url} alt={album.title} width="100%" />
          </Column>
          <Column
            absolute
            col={12}
            colsm={12}
            colmd={12}
            left={0}
            bottom={0}
            bg
          >
            <h3>{album.title}</h3>
          </Column>
        </Row>
      </Card>
    </Link>
  ) : null;
}

export default AlbumRow;
