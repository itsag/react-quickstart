// Utils
const encode = value => value;
const decode = value => value;

// Local Storage
export const local = {
  clear: () => {
    return window.localStorage.clear();
  },
  get: key => {
    return decode(window.localStorage.getItem(encode(key)));
  },
  remove: key => {
    return window.localStorage.removeItem(encode(key));
  },
  set: (key, value) => {
    return window.localStorage.setItem(encode(key), encode(value));
  }
};

// Session Storage
export const session = {
  clear: () => {
    return window.sessionStorage.clear();
  },
  get: key => {
    return decode(window.sessionStorage.getItem(encode(key)));
  },
  remove: key => {
    return window.sessionStorage.removeItem(encode(key));
  },
  set: (key, value) => {
    return window.sessionStorage.setItem(encode(key), encode(value));
  }
};

// Exports
export default {
  local,
  session
};
