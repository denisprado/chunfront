import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PagesActions } from "../ducks/pages";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPages() {
  try {
    const response = yield call(api.get, "/pages");

    yield put(PagesActions.getPagesSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possível obter as páginas"));
  }
}
