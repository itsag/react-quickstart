// Modules
import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Text } from "./logo.styles";

// Assets
import Constants from "../../constants";

// Classes
class Logo extends React.PureComponent {
  render() {
    const { to } = this.props;

    return (
      <Wrapper to={to}>
        <Text>{Constants.APP_NAME}</Text>
      </Wrapper>
    );
  }
}

// Prop Types
Logo.propTypes = {
  to: PropTypes.string
};

// Exports
export default Logo;
