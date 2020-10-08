// Modules
import _ from "lodash";

// Container
const __Datastore = {};

// Get Data
const getStoreData = (storeName, key) => {
  if (_.isNil(storeName)) {
    throw new Error(`A store name is required when using store.get().`);
  }

  if (_.isNil(__Datastore[storeName])) {
    throw new Error(`Store ${storeName} does not exists.`);
  }

  if (_.isNil(key)) {
    return __Datastore[storeName];
  }

  return __Datastore[storeName][key];
};

// Set Data
const setStoreData = (storeName, key, value) => {
  if (_.isNil(storeName)) {
    throw new Error(`A store name is required when using store.set().`);
  }

  if (_.isNil(__Datastore[storeName])) {
    throw new Error(`Store ${storeName} does not exists.`);
  }

  __Datastore[storeName][key] = value;

  return __Datastore[storeName];
};

// Update Data
const updateStoreData = (storeName, key, value) => {
  if (_.isNil(storeName)) {
    throw new Error(`A store name is required when using store.update().`);
  }

  if (_.isNil(__Datastore[storeName])) {
    throw new Error(`Store ${storeName} does not exists.`);
  }

  __Datastore[storeName][key] = value;

  return __Datastore[storeName];
};

// Remove Data
const removeStoreData = (storeName, key) => {
  if (_.isNil(storeName)) {
    throw new Error(`A store name is required when using store.remove().`);
  }

  if (_.isNil(__Datastore[storeName])) {
    throw new Error(`Store ${storeName} does not exists.`);
  }

  delete __Datastore[storeName][key];

  return __Datastore[storeName];
};

// Create Store
export const createStore = name => {
  if (_.isNil(name) || !_.isString(name)) {
    throw new Error(`Each store should have a unique name.`);
  }
  if (__Datastore[name]) {
    throw new Error(`A store named "${name}" already exists.`);
  }

  __Datastore[name] = {};

  return {
    get: key => getStoreData(name, key),
    remove: key => removeStoreData(name, key),
    set: (key, value) => setStoreData(name, key, value),
    update: (key, value) => updateStoreData(name, key, value)
  };
};

// Exports
export default {
  createStore
};
