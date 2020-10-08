// Modules
import { createGlobalStyle, keyframes } from "styled-components";

// Libraries
import { UiTheme } from "../modules/libraries/core-ui";

// Keyframes
const ToastifySlideInDownAnim = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;
const ToastifySlideOutUpAnim = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -100%, 0);
  }
`;

// React Toastify Styles
export const ReactToastifyStyles = createGlobalStyle`
  .Toastify {
  }
  .Toastify__toast-container {
    width: 100% !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    padding: 0 !important;
  }

  .Toastify__toast-container--top-center {
    margin-left: 0 !important;
    left: 0 !important;
    top: 0 !important;
  }

  .Toastify__toast {
    width: 100% !important;
    min-height: 50px !important;
    font-family: var(--type-font-stack) !important;
    padding: 8px 16px !important;
  }

  .Toastify__toast--success {
    background: ${UiTheme.Colors.Success} !important;
  }
  .Toastify__toast--error {
    background: ${UiTheme.Colors.Error} !important;
  }
  .Toastify__toast--info {
    background: ${UiTheme.Colors.Info} !important;
  }
  .Toastify__toast--warning {
    background: ${UiTheme.Colors.Warning} !important;
  }
  .Toastify__toast--success > a,
  .Toastify__toast--error > a,
  .Toastify__toast--info > a,
  .Toastify__toast--warning > a {
    color: ${UiTheme.Colors.White} !important;
  }

  .Toastify__toast-body {
    padding-right: 16px !important;
    font-size: 90% !important;
  }

  .Toastify__close-button {
    align-self: center !important;
  }

  .ToastifySlideInDownAnim {
    animation-name: ${ToastifySlideInDownAnim};
  }

  .ToastifySlideOutUpAnim {
    animation-name: ${ToastifySlideOutUpAnim};
  }
`;
