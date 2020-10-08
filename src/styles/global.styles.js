// Modules
import { createGlobalStyle } from "styled-components";

// Libraries
import { UiTheme } from "../modules/libraries/core-ui";

// Global Styles
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    color: ${UiTheme.Colors.Black};
    font-size: ${UiTheme.Fonts.Size1x};
    font-family: "${UiTheme.Fonts.Body}", "Helvetica Neue", "Arial", sans-serif;
    line-height: 1.65rem;
    overflow-x: hidden;
    cursor: default;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    color: ${UiTheme.Colors.Black};
    background: transparent;
    text-decoration: none;
  }
  a:active,
  a:hover {
    outline: 0;
    color: ${UiTheme.Colors.Primary};
    text-decoration: underline;
  }

  abbr[title] {
    border-bottom: 0.1rem dotted;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  mark {
    background: #f7d154;
    color: #234361;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  img {
    border: 0;
  }

  figure {
    margin: 1em 4rem;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code,
  pre {
    font-family: monospace;
  }

  pre {
    overflow: auto;
  }

  hr {
    height: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  input,
  textarea,
  optgroup,
  select,
  button {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button {
    background: transparent;
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }
  button,
  input[type="button"],
  input[type="submit"],
  input[type="reset"] {
    cursor: pointer;
    -webkit-appearance: button;
  }

  input[disabled],
  button[disabled] {
    cursor: default;
  }

  input::-moz-focus-inner,
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  input {
    line-height: normal;
  }

  input[type="radio"],
  input[type="checkbox"] {
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  fieldset {
    margin: 0 0.2rem;
    padding: 0.35em 0.625em 0.75em;
    border: 0.1rem solid #f1f2f3;
  }

  legend {
    padding: 0;
    border: 0;
  }

  textarea {
    overflow: auto;
  }

  optgroup {
    font-weight: bold;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }
`;
