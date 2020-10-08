// Modules
import Md5 from "md5";
import { customAlphabet } from "nanoid";
import Moment from "moment";
import _ from "lodash";

// Hash
export const hash = value => Md5(value);

// New Random Number
export const newRandomNumber = upto => {
  return Math.floor(Math.random() * upto || 9999);
};

// New Unique Key
export const newUniqueKey = ({ characters, length }) => {
  if (_.isNil(characters)) {
    characters = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  }

  if (_.isNil(length)) {
    length = 16;
  }

  return customAlphabet(characters, length)();
};

// UTC Time Stamp
export const newUtcTimestamp = () => {
  return Moment.utc().format("X");
};

// Exports
export default {
  hash,
  newRandomNumber,
  newUniqueKey,
  newUtcTimestamp
};
