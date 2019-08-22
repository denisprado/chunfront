import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DialogTitle from "@material-ui/core/DialogTitle";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Gallery from "react-grid-gallery";
import { useDispatch, useSelector } from "react-redux";
import AlbumList from "../../components/AlbumList";
import Navbar from '../../components/Navbar';
import { Creators as ModalActions } from "../../store/ducks/modal";
import { Column, Grid, Row, Section, StyledHashLink } from "../../styles/components";

export default function AlbumFiles() {
  //states
  const albums = useSelector(state => state.albums.data);
  const idAlbumSelected = useSelector(state => state.albums.selected);

  // dispatch
  const dispatch = useDispatch();
  function handleCloseAlbum() {
    dispatch(ModalActions.closeModal());
  }

  // selecionando album
  let albumSelected = albums.filter(album => album.id === idAlbumSelected);

  let images =
    albumSelected[0].Files &&
    albumSelected[0].Files.map(file => ({
      src: file.url,
      thumbnail: file.url,
      thumbnailWidth: 20,
      thumbnailHeight: 12
    }));

  const [state, setState] = React.useState({
    right: false
  });

  // estilos do Drawer
  const useStyles = makeStyles({
    list: {
      width: 250
    }
  });
  const classes = useStyles();

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <>
      <DialogTitle disableTypography>

        <Navbar logo={albumSelected[0].title} menu={
          <>
            <StyledHashLink to="#"
              onClick={toggleDrawer("right", true)}
            >OUTROS ÁLBUMS
            </StyledHashLink>
            <StyledHashLink to="#albums" onClick={() => handleCloseAlbum()}>
              <FontAwesomeIcon icon={faTimes} />
            </StyledHashLink>
          </>
        }></Navbar>

      </DialogTitle>
      <Section bg={"#212121"}>
        <Row relative id="albums">
          <Column col={8} top={2} left={2} absolute>
            <Gallery
              images={images}
              enableImageSelection={false}
              maxRows={3}
              showLightboxThumbnails={true}
            />
          </Column>

          <Drawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer("right", false)}
          >
            <Section bg>
              <Row br>
                <Column bg>
                  <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer("right", false)}
                    onKeyDown={toggleDrawer("right", false)}
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
