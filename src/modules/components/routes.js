// Pages
import Landing from "./landing/landing";
import NotFound from "./not-found/not-found";

// Routes
const Routes = [
  // Landing
  {
    component: Landing,
    config: {
      canBeAccessedWhenLoggedIn: false,
      isProtected: false,
      title: "Sample App"
    },
    path: "/",
    props: { exact: true }
  },

  // Not Found
  {
    component: NotFound,
    config: {
      canBeAccessedWhenLoggedIn: true,
      isProtected: false,
      title: "Not Found"
    },
    path: "/4oh4",
    props: { exact: false }
  }
];

// Exports
export default Routes;
