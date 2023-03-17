import axios from "axios";
import _ from "lodash";
import { ADDRESS, PORT } from "../env";

function loadAPI(method, router, inputs, data) {
  if (_.isUndefined(inputs)) inputs = {};
  const config = setConfig(method, router, data);
  return { config };
}

const setConfig = (method, router, data) => {
  let url = `${ADDRESS}:${PORT}${router}`;

  return {
    method: method,
    url: url,
    headers: {
      "Access-Control-Allow-Origin": ADDRESS,
      Accept: "application/json",
      "Content-Type": "application/json",
      /* Authorization: `Bearer ${key}`, */
    },
    data: data,
  };
};

function runAPI(config, dispatch, successType, failType) {
  axios(config)
    .then((response) => {
      dispatch({
        type: successType,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: failType,
        payload: error,
      });
    });
}

export { loadAPI, runAPI };
