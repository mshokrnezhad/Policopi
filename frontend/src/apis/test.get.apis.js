import _ from "lodash";
import { loadAPI } from "../utils/apis.utils";

const getTestAPI = function (inputs) {
  const method = "get";
  const router = "/v1/test";
  const data = !(_.isUndefined(inputs) || _.isUndefined(inputs.data)) ? JSON.stringify(inputs.data) : JSON.stringify({});
  const successType = "GET_TEST_SUCCESS";
  const failType = "GET_TEST_FAIL";

  const { config } = loadAPI(method, router, inputs, data);
  return { method, router, data, successType, failType, config };
};

export default getTestAPI;
