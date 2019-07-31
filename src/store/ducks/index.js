import { combineReducers } from "redux";

import pages from "./pages";
import pageDetails from "./pageDetails";
import albums from "./albums";
import albumDetails from "./albumDetails";
import albumFiles from "./albumFiles";
import error from "./error";
import modal from "./modal";

const reducers = combineReducers({
  pages,
  albums,
  modal,
  pageDetails,
  albumFiles,
  albumDetails,
  error
});

export default reducers;
