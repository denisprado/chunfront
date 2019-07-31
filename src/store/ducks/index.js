import { combineReducers } from "redux";

import pages from "./pages";
import pageDetails from "./pageDetails";
import albums from "./albums";
import albumDetails from "./albumDetails";
import error from "./error";
import modal from "./modal";

const reducers = combineReducers({
  pages,
  albums,
  modal,
  pageDetails,
  albumDetails,
  error
});

export default reducers;
