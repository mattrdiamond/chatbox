import React, { Component } from "react";
import Icon from "../components/Icon";
import "./EmojiIcon.css";
import { toggleEmojiPicker } from "../actions";
import EmojiPicker from "../components/EmojiPicker";
import { connect } from "react-redux";

class EmojiIcon extends Component {
  componentDidUpdate(prevProps) {
    const { cursorPosition, emojiOpen, inputField } = this.props;
    if (prevProps.emojiOpen === true && emojiOpen === false) {
      inputField.current.setSelectionRange(cursorPosition, cursorPosition);
      inputField.current.focus();
    }
  }

  _handlePickerBlur() {
    this.props.toggleEmojiPicker(false);
  }

  _openPicker(e) {
    e.preventDefault();
    this.props.toggleEmojiPicker(!this.props.emojiOpen);
  }

  render() {
    return (
      <div className="emoji-button-wrapper">
        {this.props.emojiOpen && (
          <EmojiPicker
            onBlur={this._handlePickerBlur.bind(this)}
            handleEmojiClick={this.props.handleEmojiClick}
            inputValue={this.props.inputValue}
            inputField={this.props.inputField}
          />
        )}
        <button
          onClick={this._openPicker.bind(this)}
          className="emoji-button"
          type="button"
        >
          <Icon icon="smile" title="add emoji" height="25px" width="25px" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { emojiOpen } = state;
  return {
    emojiOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleEmojiPicker: boolean => {
      dispatch(toggleEmojiPicker(boolean));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmojiIcon);
