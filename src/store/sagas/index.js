import { all, takeLatest } from "redux-saga/effects";
import { Types as albumFilesTypes } from "../ducks/albumFiles";
import { Types as AlbumsTypes } from "../ducks/albums";
import { Types as contactFormTypes } from "../ducks/contactForm";
import { Types as PagesTypes } from "../ducks/pages";
import { getAlbums } from "./albums";
import { getAlbumsFiles } from "./albumsFiles";
import { getContactForm } from "./contactForm";
import { getPages } from "./pages";

export default function* rootSaga() {
  yield all([
    takeLatest(PagesTypes.GET_REQUEST, getPages),
    takeLatest(AlbumsTypes.GET_REQUEST, getAlbums),
    takeLatest(albumFilesTypes.GET_REQUEST, getAlbumsFiles),
    takeLatest(contactFormTypes.GET_REQUEST, getContactForm)
  ]);
}
