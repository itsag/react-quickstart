// Modules
import _ from "lodash";
import Axios from "axios";

// Assets
import Constants from "../constants";

// Services
import StorageService from "./storage-service";

// Create Instance
const Http = Axios.create({
  baseURL: Constants.BASE_URI
});

// Request Interceptor
Http.interceptors.request.use(config => {
  // Get and inject access token
  const token = StorageService.local.get({ key: "act" });
  if (!_.isEmpty(token)) {
    config.headers.Authorization = token;
  }

  return config;
});

// Response Interceptor
Http.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    error.message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "Looks like we ran into a problem there. Please try again";

    return Promise.reject(error);
  }
);

// Exports
export default Http;
