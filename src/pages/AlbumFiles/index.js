import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DialogTitle from '@material-ui/core/DialogTitle';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import ImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import AlbumList from "../../components/AlbumList";
import Logo from '../../components/Logo';
import { Creators as ModalActions } from "../../store/ducks/modal";
import { Column, Grid, Row, Section } from "../../styles/components";

export default function AlbumFiles() {
  //states
  const albums = useSelector(state => state.albums.data);
  const idAlbumSelected = useSelector(state => state.albums.selected)

  // dispatch
  const dispatch = useDispatch();
  function handleCloseAlbum() {
    dispatch(ModalActions.closeModal());
  }

  // selecionando album
  let albumSelected = albums.filter(
    album => album.id === idAlbumSelected
  );

  let images =
    albumSelected[0].Files &&
    albumSelected[0].Files.map(file => ({
      original: file.url,
      thumbnail: file.url
    }));

  const [state, setState] = React.useState({
    right: false
  });

  // estilos do Drawer 
  const useStyles = makeStyles({
    list: {
      width: 250,
    }
  });
  const classes = useStyles();

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <>
      <DialogTitle disableTypography>
        <Row>
          <Column col={11}>
          <Link to="#albums" onClick={() => handleCloseAlbum()}>
            <Logo> | {albumSelected[0].title}</Logo>
            </Link>
          </Column>
          <Column col={1}>
            <Link onClick={toggleDrawer('right', true)}>OUTROS ÁLBUMS </Link>
            <Link to="#albums" onClick={() => handleCloseAlbum()}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </Link>
          </Column>
        </Row>
      </DialogTitle>
      <Section center bg={'#212121'}>
        <Row id="albums">
          <Column col={2} />
          <Column col={8}>
            <ImageGallery items={images} thumbnailPosition="right" />
          </Column>
          <Column col={2} />

          <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            <Section bg>
              <Row br>
                <Column bg>
                  <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer('right', false)}
                    onKeyDown={toggleDrawer('right', false)}
                  >
                    <Grid col={1}>
                      <AlbumList />
                    </Grid>
                  </div>
                </Column>
              </Row>
            </Section>

          </Drawer>

        </Row>
      </Section>
    </>
  );
}
