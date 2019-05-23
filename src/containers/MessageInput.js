import React from "react";
import {
  setInputValue,
  setCursorPosition,
  setEmoji,
  sendMessage
} from "../actions";
import "./MessageInput.css";
import EmojiIcon from "./EmojiIcon";
import Icon from "../components/Icon";
import { connect } from "react-redux";

const MessageInput = ({
  sendMessage,
  setInputValue,
  setCursorPosition,
  inputValue,
  setEmoji,
  activeUserId
}) => {
  const { typingValue, cursorPosition } = inputValue;

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage(typingValue, activeUserId);
  };

  const handleChange = e => {
    const cursor = e.target.selectionStart;
    const typing = e.target.value;
    setInputValue(typing, cursor);
  };

  const handleEmojiClick = emoji => {
    const emojiString =
      typingValue.substring(0, cursorPosition) +
      emoji +
      typingValue.substring(cursorPosition);
    setEmoji(emojiString);
  };

  const handleCursorChange = e => {
    switch (e.type) {
      case "keyup":
        if (e.key.includes("Arrow")) {
          setCursorPosition(e.target.selectionStart);
        }
        break;
      case "click":
        const clickedPosition = e.target.selectionStart;
        if (typingValue.length > 0 && cursorPosition !== clickedPosition) {
          setCursorPosition(clickedPosition);
        }
        break;
      default:
        break;
    }
  };

  return (
    <form
      className={"Message" + (typingValue ? " active" : "")}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <input
        className="Message__input"
        onChange={handleChange}
        onClick={handleCursorChange}
        onKeyUp={handleCursorChange}
        value={typingValue}
        placeholder="Type your message..."
      />
      <EmojiIcon handleEmojiClick={handleEmojiClick} />
      <button className="send-button">
        <Icon icon="send" width="25px" height="25px" title="send" />
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  const { inputValue, activeUserId } = state;
  return {
    inputValue,
    activeUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInputValue: (typingValue, cursorPosition) => {
      dispatch(setInputValue(typingValue, cursorPosition));
    },
    setCursorPosition: cursorPosition => {
      dispatch(setCursorPosition(cursorPosition));
    },
    sendMessage: (typing, activeUserId) => {
      dispatch(sendMessage(typing, activeUserId));
    },
    setEmoji: emojiString => {
      dispatch(setEmoji(emojiString));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput);
