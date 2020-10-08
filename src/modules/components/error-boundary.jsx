// Modules
import React from "react";
import PropTypes from "prop-types";

// Classes
class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      exception: null,
      showFallbackUi: false
    };
  }

  componentDidCatch(exception) {
    this.setState({ exception });
  }

  static getDerivedStateFromError() {
    return { showFallbackUi: true };
  }

  render() {
    const { children } = this.props;
    const { exception, showFallbackUi } = this.state;

    if (showFallbackUi) {
      return exception;
    }

    return children;
  }
}

// Prop Types
GlobalErrorBoundary.propTypes = {
  children: PropTypes.any
};

// Exports
export default GlobalErrorBoundary;
