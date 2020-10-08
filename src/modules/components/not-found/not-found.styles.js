// Modules
import Styled from "styled-components";

// Libraries
import { UiTheme } from "../../libraries/core-ui";

// Wrapper
export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

// Inner Wrapper
export const InnerWrapper = Styled.div`
  width: 520px;
  min-width: 320px;
  user-select: none;
  padding: 30px;
`;

// Emote
export const Emote = Styled.div`
  font-size: 425%;
  margin-bottom: 40px;
`;

// Message
export const Message = Styled.div`
  margin-bottom: 40px;

  a {
    margin-top: 4px;
    color: ${UiTheme.Colors.Secondary};
    display: inline-block;
  }
`;

// Logo Container
export const LogoContainer = Styled.div`
  opacity: 0.35;
`;
