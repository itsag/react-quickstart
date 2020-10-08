/* eslint-disable sort-keys */

// Modules
import _ from "lodash";

// Constants
const SPACING_UNIT = 15;
const BORDER_RADIUS_UNIT = 2;

// Animations
export const Animations = {
  Transitions: {
    SpeedFast: "0.075s",
    SpeedNormal: "0.125s",
    SpeedSlow: "0.2s",
    SpeedNx: n => {
      if (!_.isNumber(n)) {
        return "0.075s";
      }

      return `${n}s`;
    }
  }
};

// Borders
const BorderWidth = "1px";
const BorderRadius = {
  Small: `${BORDER_RADIUS_UNIT}px`,
  Default: `${BORDER_RADIUS_UNIT * 2}px`,
  Medium: `${BORDER_RADIUS_UNIT * 4}px`,
  Large: `${BORDER_RADIUS_UNIT * 6}px`,
  ExtraLarge: `${BORDER_RADIUS_UNIT * 8}px`,
  Capsule: `30px`,
  Full: `100%`
};

// Spacing
const Space1x = `${SPACING_UNIT}px`;
const Space2x = `${SPACING_UNIT * 2}px`;
const Space3x = `${SPACING_UNIT * 3}px`;
const Space4x = `${SPACING_UNIT * 4}px`;
const Space5x = `${SPACING_UNIT * 5}px`;
const Space6x = `${SPACING_UNIT * 6}px`;
const SpaceNx = n => {
  if (!_.isNumber(n)) {
    return Space1x;
  }

  return `${SPACING_UNIT * n}px`;
};

// Content Area
const ContentAreaWidth = window.innerWidth;
const ContentAreaHeight = window.innerHeight;

// Window
const WindowWidth = window.outerWidth;
const WindowHeight = window.outerHeight;

// Exports
export default {
  Animations,
  Border: {
    Radius: BorderRadius,
    Width: BorderWidth
  },
  ContentArea: {
    Height: ContentAreaHeight,
    Width: ContentAreaWidth
  },
  Spacing: {
    Space1x,
    Space2x,
    Space3x,
    Space4x,
    Space5x,
    Space6x,
    SpaceNx
  },
  Window: {
    Height: WindowHeight,
    Width: WindowWidth
  }
};
