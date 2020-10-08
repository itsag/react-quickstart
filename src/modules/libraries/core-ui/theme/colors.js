/* eslint-disable sort-keys */

// Opaque
export const Opaque = (hex, alpha = 1) => {
  const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

  if (HEX_REGEX.test(hex)) {
    const converted = HEX_REGEX.exec(hex);
    const color = {
      b: parseInt(converted[3], 16),
      g: parseInt(converted[2], 16),
      r: parseInt(converted[1], 16)
    };

    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  }

  return hex;
};

// Brand
export const Primary = "#a55eea";
export const Secondary = "#8854d0";

// Mono
export const Black = "#263137";
export const IntenseBlack = "#1d2529";
export const Gray = "#e4e7eb";
export const White = "#ffffff";

// States
export const Error = "#fe4266";
export const Info = "#5eb5d7";
export const Success = "#37ca44";
export const Warning = "#f2ac34";

// Palette
export default {
  // Brand
  Primary,
  Secondary,

  // Mono
  Black,
  IntenseBlack,
  Gray,
  White,

  // States
  Error,
  Info,
  Success,
  Warning,

  // Utils
  Opaque
};
