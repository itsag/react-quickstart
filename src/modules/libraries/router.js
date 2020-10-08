/* eslint-disable react/prop-types */

// Modules
import React from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

// Browser Router
export const UiBrowserRouter = props => {
  return <BrowserRouter {...props}>{props.children}</BrowserRouter>;
};

export const UiLink = props => {
  return <Link {...props}>{props.children}</Link>;
};

export const UiNavLink = props => {
  return <NavLink {...props}>{props.children}</NavLink>;
};

// Redirect
export const UiRedirect = props => {
  return <Redirect {...props} />;
};

// Route
export const UiRoute = props => {
  return <Route {...props} />;
};

// Switch
export const UiSwitch = props => {
  return <Switch {...props}>{props.children}</Switch>;
};

// With Router
export const UiWithRouter = args => {
  return withRouter(args);
};

// Exports
export default {
  UiBrowserRouter,
  UiLink,
  UiNavLink,
  UiRedirect,
  UiRoute,
  UiSwitch,
  UiWithRouter
};
