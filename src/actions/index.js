import {
  SET_ACTIVE_USER_ID,
  SET_INPUT_VALUE,
  SET_CURSOR_POSITION,
  SET_EMOJI,
  SEND_MESSAGE,
  SET_FILTER_VALUE,
  TOGGLE_SIDEBAR,
  TOGGLE_EMOJI_PICKER,
  ACTIVATE_SEND_BUTTON,
  DELETE_MESSAGE,
  TOGGLE_MORE
} from "../constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setInputValue = (typingValue, cursorPosition) => ({
  type: SET_INPUT_VALUE,
  payload: {
    typingValue,
    cursorPosition
  }
});

export const setCursorPosition = cursorPosition => ({
  type: SET_CURSOR_POSITION,
  payload: cursorPosition
});

export const setEmoji = (emojiString, newCursorPosition) => ({
  type: SET_EMOJI,
  payload: {
    emojiString,
    newCursorPosition
  }
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

export const toggleEmojiPicker = value => ({
  type: TOGGLE_EMOJI_PICKER,
  payload: value
});

export const activateSendButton = value => ({
  type: ACTIVATE_SEND_BUTTON,
  payload: value
});

export const deleteMessage = (activeMsgs, deletedMsg, activeUser) => ({
  type: DELETE_MESSAGE,
  payload: {
    activeMsgs,
    deletedMsg,
    activeUser
  }
});

export const toggleMore = (activeUserId, activeMsg) => ({
  type: TOGGLE_MORE,
  payload: {
    activeUserId,
    activeMsg
  }
});
