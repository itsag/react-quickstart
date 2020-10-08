// Modules
import { cssTransition, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Notification
export const Notification = toast;

// Notification Container
export const GlobalNotificationContainer = ToastContainer;

// Create Notification
const CreateNotification = ({ message, type, options = {} }) => {
  // Dismiss previous notifications
  Notification.dismiss();

  // Create new notification
  return Notification[type](message, {
    ...options,
    transition: cssTransition({
      duration: 400,
      enter: "ToastifySlideInDownAnim",
      exit: "ToastifySlideOutUpAnim"
    })
  });
};

// Notification: Success
export const Success = ({ message, options }) => {
  return CreateNotification({ message, options, type: "success" });
};

// Notification: Info
export const Info = ({ message, options }) => {
  return CreateNotification({ message, options, type: "info" });
};

// Notification: Warning
export const Warning = ({ message, options }) => {
  return CreateNotification({ message, options, type: "warning" });
};

// Notification: Error
export const Error = ({ message, options }) => {
  return CreateNotification({ message, options, type: "error" });
};

// Exports
export default {
  Error,
  Info,
  Success,
  Warning
};
