import { runAPI } from "../utils/apis.utils";
import getTestAPI from "../apis/test.get.apis";

const getTestAction = (inputs) => async (dispatch) => {
  const { successType, failType, config } = getTestAPI(inputs);
  await runAPI(config, dispatch, successType, failType);
};

export { getTestAction };
