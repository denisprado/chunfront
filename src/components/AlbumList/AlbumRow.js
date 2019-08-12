import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Creators as ModalActions } from "../../store/ducks/modal";
import { Creators as AlbumsActions } from "../../store/ducks/albums";
import { Column, Row } from "../../styles/components";
// import { Container } from './styles';

function AlbumRow({ albumRow }) {

  const dispatch = useDispatch();

  function handleOpenAlbumFiles(id) {
    dispatch(AlbumsActions.selectAlbum(id))
    dispatch(ModalActions.openModal({
      modalType: 'ALBUM_FILES',
    }));
  };

  return (
    <Link
      key={albumRow.id}
      to={`/albums/${albumRow.id}`}
      onClick={() => handleOpenAlbumFiles(albumRow.id)}
    >
      <Row relative>
        <Column col={12}>
          <img
            src={albumRow.thumbImage.url}
            alt={albumRow.title}
            width="100%"
          />
        </Column>
        <Column absolute col={12} left={0} bottom={0} bg>
          <h3>{albumRow.title}</h3>
        </Column>
      </Row>
    </Link>
  );
}

export default AlbumRow;
