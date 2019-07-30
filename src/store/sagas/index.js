import { all, takeLatest } from "redux-saga/effects";

import { Types as PagesTypes } from "../ducks/pages";
import { Types as pageDetailsTypes } from "../ducks/pageDetails";

import { Types as AlbumsTypes } from "../ducks/albums";
import { Types as albumDetailsTypes } from "../ducks/albumDetails";

import { getPages } from "./pages";
import { getPageDetails } from "./pageDetails";

import { getAlbums } from "./albums";
import { getAlbumsDetails } from "./albumsDetails";

export default function* rootSaga() {
  yield all(
    [
      takeLatest(PagesTypes.GET_REQUEST, getPages),
      takeLatest(pageDetailsTypes.GET_REQUEST, getPageDetails),
      takeLatest(AlbumsTypes.GET_REQUEST, getAlbums),
      takeLatest(albumDetailsTypes.GET_REQUEST, getAlbumsDetails),
    ]);
}
