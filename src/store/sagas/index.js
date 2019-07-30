import { all, takeLatest } from "redux-saga/effects";

import { Types as PagesTypes } from "../ducks/pages";

import { getPages } from "./pages";

export default function* rootSaga() {
  yield all([takeLatest(PagesTypes.GET_REQUEST, getPages)]);
}
