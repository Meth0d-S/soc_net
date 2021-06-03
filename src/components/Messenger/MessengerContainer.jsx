import React from "react";
import Messenger from "./Messenger";
import {addMessage, updateMessage} from "../../redux/messengerReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.messengerPage.dialogs,
    messages: state.messengerPage.messages,
    newMessageText: state.messengerPage.newMessageText,
  }
}

export default compose(
  connect(mapStateToProps, {addMessage, updateMessage}),
  withAuthRedirect
)(Messenger)