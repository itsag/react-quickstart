/* eslint-disable sort-keys */

const FONT_SIZE_UNIT = 16;
const FONT_SIZE_SMALL_UNIT = 14;
const FONT_SIZE_INCREMENT_UNIT = 4;

// Typography
export default {
  Body: "Rubik",
  Heading: "Poppins",
  Theme: "Grand Hotel",

  // Sizes
  Size1x: `${FONT_SIZE_UNIT}px`,
  Size2x: `${FONT_SIZE_UNIT + FONT_SIZE_INCREMENT_UNIT}px`,
  Size3x: `${FONT_SIZE_UNIT * 2 + FONT_SIZE_INCREMENT_UNIT}px`,
  Size4x: `${FONT_SIZE_UNIT * 3 + FONT_SIZE_INCREMENT_UNIT}px`,
  Size5x: `${FONT_SIZE_UNIT * 4 + FONT_SIZE_INCREMENT_UNIT}px`,
  Size6x: `${FONT_SIZE_UNIT * 5 + FONT_SIZE_INCREMENT_UNIT}px`,
  SizeSmall: `${FONT_SIZE_SMALL_UNIT}px`
};
