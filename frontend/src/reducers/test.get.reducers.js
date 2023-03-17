import _ from "lodash";

export const getTestSuccess = (state = [], action) => {
  switch (action.type) {
    case "GET_TEST_SUCCESS":
      action.payload = { data: action.payload.data, code: action.payload.status, timeStamp: _.now() };
      return action.payload;
    default:
      return state;
  }
};

export const getTestFail = (state = "initial_value", action) => {
  switch (action.type) {
    case "GET_TEST_FAIL":
      action.payload = { ...action.payload, code: action.payload.status, timeStamp: _.now() };
      return action.payload;
    default:
      return state;
  }
};
