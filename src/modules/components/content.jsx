// Modules
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

// Libraries
import { UiSwitch, UiWithRouter } from "../libraries/router";
import Notifications, {
  GlobalNotificationContainer
} from "../libraries/notifications.js";

// Error Boundary
import GlobalErrorBoundary from "./error-boundary";

// Router
import Router from "./router";

// Services
import AuthService from "../services/auth-service";
import NavigationService from "../services/navigation-service";

// Classes
class Content extends React.PureComponent {
  // State
  constructor(props) {
    super(props);

    // State
    this.state = {};

    // Bindings
    this._determineAuthAndAccess = this._determineAuthAndAccess.bind(this);
    this._setNavigationReference = this._setNavigationReference.bind(this);
  }

  // Determine Auth Status
  _determineAuthAndAccess() {
    // Get location props
    const { props } = this.props.location;

    // Not found
    if (!_.isObject(props)) {
      return NavigationService.navigate("/4oh4");
    }

    const isLoggedIn = AuthService.isLoggedIn();

    // Logged In
    if (isLoggedIn) {
      // Route can be access when logged in?
      if (props.canBeAccessedWhenLoggedIn) {
        return true;
      }

      // Prevent Access to Public Routes
      if (!props.isProtected) {
        return NavigationService.navigate("/");
      }
    }

    // Not Logged In
    if (!isLoggedIn) {
      // Prevent access to Protected Routes
      if (props.isProtected) {
        const { pathname } = window.location;

        Notifications.Error({
          message: "You need to be logged in to access that page."
        });

        return NavigationService.navigate(`/?return=${pathname}`);
      }
    }
  }

  // Set Navigation Reference
  _setNavigationReference() {
    const { history } = this.props;
    return NavigationService.setReference(history);
  }

  componentDidMount() {
    // Determine Auth Status
    this._determineAuthAndAccess();
  }

  componentDidUpdate(prevProps) {
    if (_.isEqual(prevProps, this.props)) {
      return;
    }

    // Determine Auth Status
    this._determineAuthAndAccess();
  }

  render() {
    // Set Navigation Reference
    this._setNavigationReference();

    return (
      <GlobalErrorBoundary>
        {/* Routes */}
        <UiSwitch>
          <Router />
        </UiSwitch>

        {/* Notification Container */}
        <GlobalNotificationContainer
          autoClose={false}
          pauseOnFocusLoss={true}
          pauseOnHover={true}
        />
      </GlobalErrorBoundary>
    );
  }
}

// Prop Types
Content.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    props: PropTypes.shape({
      canBeAccessedWhenLoggedIn: PropTypes.bool,
      isProtected: PropTypes.bool
    })
  }).isRequired
};

// Exports
export default UiWithRouter(Content);
