import { NOTIFY_USER } from "./types";
import PropTypes from "prop-types";

export const notifyUser = (message, messageType) => {
  return {
    type: NOTIFY_USER,
    message,
    messageType
  };
};
