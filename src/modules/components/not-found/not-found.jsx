// Modules
import React from "react";

// Libraries
import { UiLink } from "../../libraries/router";
import { UiEmote } from "../../libraries/core-ui";

// Assets
import { newRandomNumber } from "../../methods";

// Elements
import {
  Wrapper,
  InnerWrapper,
  Emote,
  Message,
  LogoContainer
} from "./not-found.styles";

// Components
import Logo from "../shared/logo";

// Emotes
const Emotes = [
  { icon: "🤔", label: "Hmmm..." },
  { icon: "😱", label: "Aarghh!!!" },
  { icon: "😧", label: "Oh Nooo...!" },
  { icon: "🤕", label: "Ouch!" }
];

// Classes
class NotFound extends React.Component {
  render() {
    const Emoticon = Emotes[newRandomNumber(Emotes.length)];

    return (
      <Wrapper>
        <InnerWrapper>
          <Emote>
            <UiEmote emote={Emoticon.icon} />
          </Emote>
          <Message>
            {Emoticon.label} The page you were looking for is not here. It may
            have been moved or the link you followed might be broken.{" "}
            <UiLink to={"/"}>Head back home?</UiLink>
          </Message>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

// Exports
export default NotFound;
