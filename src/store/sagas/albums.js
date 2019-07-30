import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as AlbumsActions } from "../ducks/albums";
import { Creators as ErrorActions } from "../ducks/error";

export function* getAlbums() {
  try {
    const response = yield call(api.get, "/albums");

    yield put(AlbumsActions.getAlbumsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possível obter as páginas"));
  }
}
