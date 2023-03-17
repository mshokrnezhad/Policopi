import { useState, useEffect, useRef } from "react";

const useEffectAfterFirstRender = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export { useEffectAfterFirstRender };
