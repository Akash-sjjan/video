import React from "react";
export const useValueRef = <T>(initialVal: T): ((val?: T) => T) => {
  const ref = React.useRef<T>(initialVal);
  return React.useCallback((val?: T) => {
    if (val == null) {
      return ref.current;
    }
    ref.current = val;
    return val;
  }, []);
};
