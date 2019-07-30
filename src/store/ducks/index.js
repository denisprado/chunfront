import { combineReducers } from "redux";

import pages from "./pages";
import error from "./error";

const reducers = combineReducers({
  pages,
  error
});

export default reducers;
