import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as AlbumsFilesActions } from "../ducks/albumFiles";
import { Creators as ErrorActions } from "../ducks/error";

export function* getAlbumsFiles(action) {
  try {
    const response = yield call(api.get,
      `/albums/${action.payload.id}/files?page=${action.payload.initialId}`
    );

    yield put(AlbumsFilesActions.getAlbumFilesSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possível obter os detalhes da página"));
  }
}
