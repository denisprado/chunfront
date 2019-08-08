import { combineReducers } from "redux";

import pages from "./pages";
import albums from "./albums";
import contactForm from "./contactForm";
import error from "./error";
import modal from "./modal";

const reducers = combineReducers({
  pages,
  albums,
  contactForm,
  modal,
  error
});

export default reducers;
