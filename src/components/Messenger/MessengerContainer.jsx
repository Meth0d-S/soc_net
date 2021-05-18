import React from "react";
import Messenger from "./Messenger";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/messengerReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.messengerPage.dialogs,
    messages: state.messengerPage.messages,
    newMessageText: state.messengerPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    updateMessage: (text) => dispatch(updateMessageActionCreator(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger)