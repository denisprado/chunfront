import { combineReducers } from "redux";

import pages from "./pages";
import pageDetails from "./pageDetails";
import albums from "./albums";
import albumDetails from "./albumDetails";
import error from "./error";

const reducers = combineReducers({
  pages,
  albums,
  pageDetails,
  albumDetails,
  error
});

export default reducers;
