import Messenger from "./Messenger";
import {addMessage} from "../../redux/messengerReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.messengerPage.dialogs,
    messages: state.messengerPage.messages,
  }
}

export default compose(
  connect(mapStateToProps, {addMessage}),
  withAuthRedirect
)(Messenger)