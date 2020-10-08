// Modules
import _ from "lodash";

// References
let _history;

// Set History Reference
export const setReference = reference => {
  _history = reference;
};

// Navigate
export const navigate = (path, state = {}) => {
  if (_.isObject(state)) {
    if (state.hardRefresh) {
      window.location.href = path;
      return;
    }
  }

  return _history && _history.push && _history.push(path, state);
};

// Exports
export default {
  navigate,
  setReference
};
