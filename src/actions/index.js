import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SET_EMOJI,
  SEND_MESSAGE,
  SET_FILTER_VALUE,
  TOGGLE_SIDEBAR
} from "../constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const setEmoji = value => ({
  type: SET_EMOJI,
  payload: value
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
});

export const setFilterValue = value => ({
  type: SET_FILTER_VALUE,
  payload: value
});

export const toggleSidebar = value => ({
  type: TOGGLE_SIDEBAR,
  payload: value
});
