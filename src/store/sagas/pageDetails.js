import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PageDetailsActions } from "../ducks/pageDetails";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPageDetails(action) {
  try {
    const response = yield call(api.get, `/pages/${action.payload.id}`);

    yield put(PageDetailsActions.getPageDetailsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possível obter os detalhes da página"));
  }
}
