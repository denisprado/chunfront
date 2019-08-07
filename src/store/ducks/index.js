import { combineReducers } from "redux";

import pages from "./pages";
import albums from "./albums";
import contactForm from "./contactForm";
import albumFiles from "./albumFiles";
import error from "./error";
import modal from "./modal";

const reducers = combineReducers({
  pages,
  albums,
  contactForm,
  modal,
  albumFiles,
  error
});

export default reducers;
