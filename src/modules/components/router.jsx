// Modules
import _ from "lodash";
import React from "react";

// Libraries
import { UiRoute, UiSwitch } from "../libraries/router";

// Routes
import Routes from "./routes";

// Classes
class Router extends React.PureComponent {
  render() {
    if (!_.isArray(Routes)) {
      return null;
    }

    return (
      <UiSwitch>
        {Routes.map((route, ndx) => {
          const { component, config, path, props } = route;

          const key = `APP_ROUTE_${ndx}`;

          const renderRoute = routeProps => {
            const Component = component;

            if (_.isObject(config)) {
              // Merge location properties
              routeProps.location.props = {
                ...routeProps.location.props,
                ...config
              };

              // Set Page Title
              if (config.title) {
                window.document.title = config.title;
              }
            }

            return <Component {...routeProps} />;
          };

          return (
            <UiRoute key={key} render={renderRoute} path={path} {...props} />
          );
        })}
      </UiSwitch>
    );
  }
}

// Exports
export default Router;
