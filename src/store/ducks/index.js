import { combineReducers } from "redux";

import pages from "./pages";
import pageDetails from "./pageDetails";
import albums from "./albums";
import contactForm from "./contactForm";
import albumDetails from "./albumDetails";
import albumFiles from "./albumFiles";
import error from "./error";
import modal from "./modal";

const reducers = combineReducers({
  pages,
  albums,
  contactForm,
  modal,
  pageDetails,
  albumFiles,
  albumDetails,
  error
});

export default reducers;
