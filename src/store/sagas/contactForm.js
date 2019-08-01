import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as ContactFormActions } from "../ducks/contactForm";
import { Creators as ErrorActions } from "../ducks/error";

export function* getContactForm(action) {
  const { data } = action.payload;
  try {
    const response = yield call(api.post, "/send", data);

    yield put(ContactFormActions.getContactFormSuccess(response.data));
    yield put(ErrorActions.setError("Email enviado com sucess", true));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possível enviar seu email"));
  }
}
