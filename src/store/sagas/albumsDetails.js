import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as AlbumsDetailsActions } from "../ducks/albumDetails";
import { Creators as ErrorActions } from "../ducks/error";

export function* getAlbumsDetails(action) {
  try {
    const response = yield call(api.get, `/albums/${action.payload.id}`);

    yield put(AlbumsDetailsActions.getAlbumDetailsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possível obter os detalhes da página"));
  }
}
