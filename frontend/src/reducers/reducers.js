import { combineReducers } from "redux";
import { getTestSuccess, getTestFail } from "./test.get.reducers";

export default combineReducers({
  getTestResponse: getTestSuccess,
  getTestError: getTestFail,
});
