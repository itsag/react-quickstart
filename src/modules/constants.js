/* eslint-disable sort-keys */

const CURRENT_YEAR = new Date().getFullYear();
const RELEASE_YEAR = 2020;
const APP_COPYRIGHT_YEAR =
  RELEASE_YEAR === CURRENT_YEAR
    ? CURRENT_YEAR
    : `${RELEASE_YEAR} - ${CURRENT_YEAR}`;

// Constants
export default {
  // Application
  APP_NAME: "Sample App",
  APP_DEVELOPER_NAME: "The Developer",
  APP_DEVELOPER_LINK: "https://developer.com",
  APP_COPYRIGHT_YEAR,

  // Network
  BASE_URI: process.env.REACT_APP_API_BASE_URI
};
