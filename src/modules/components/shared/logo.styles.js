// Modules
import Styled from "styled-components";

// Libraries
import { UiTheme } from "../../libraries/core-ui";
import { UiLink } from "../../libraries/router";

// Wrapper
export const Wrapper = Styled(UiLink)`
  text-decoration: none;
  user-select: none;

  &:hover {
    text-decoration: none;
  }
`;

// Text
export const Text = Styled.div`
  font-size: 28px;
  font-family: ${UiTheme.Fonts.Theme};
  color: ${UiTheme.Colors.Black};
`;
