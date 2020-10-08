// Modules
import Http from "./http-service";

// Data Store
import { createStore } from "./datastore";

// Create Store
const TestStore = createStore("TestStore");

// Store Keys
const TestStoreKey = "TestStoreKey";

// Get Data
export const getData = () => {
  const data = TestStore.get(TestStoreKey);

  if (data) {
    return Promise.resolve(data);
  }

  return Http.get("/test").then(response => {
    TestStore.set(TestStoreKey, response.data);

    return response.data;
  });
};

// Exports
export default {
  getData
};
