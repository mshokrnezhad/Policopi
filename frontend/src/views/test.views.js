import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getTestAction as getTest } from "../actions/test.get.actions";
import { useEffectAfterFirstRender } from "../utils/hooks.utils";

const Test = (props) => {
  const [msg, setMsg] = useState("");
  const [statusCode, setStatusCode] = useState("");

  useEffect(() => {
    props.getTest({});
  }, []);

  useEffectAfterFirstRender(() => {
    if (props.getTestResponse.data) {
      setMsg(props.getTestResponse.data.msg);
      setStatusCode(props.getTestResponse.code);
    }
  }, [props.getTestResponse]);

  useEffectAfterFirstRender(() => {
    if (props.getTestError) {
      setMsg("the server is not running :(");
    }
  }, [props.getTestError]);

  return <div style={{ color: statusCode === 200 ? "green" : "red" }}>{msg}</div>;
};

const mapStateToProps = (state) => {
  return {
    getTestResponse: state.getTestResponse,
    getTestError: state.getTestError,
  };
};

export default connect(mapStateToProps, { getTest })(Test);
