// Modules
import React from "react";
import PropTypes from "prop-types";

// Classes
class Emote extends React.PureComponent {
  render() {
    const { emote } = this.props;

    return <span role="img">{emote}</span>;
  }
}

// Prop Types
Emote.propTypes = {
  emote: PropTypes.string.isRequired
};

// Exports
export default Emote;
