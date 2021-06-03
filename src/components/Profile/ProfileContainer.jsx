import React from "react"
import Profile from "./Profile"
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    userId ? userId = this.props.match.params.userId : userId = 17343
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render = () => {
    debugger
    return <Profile {...this.props} />
  }
}

let mapStateToProps = state => ({
  user: state.profilePage.user,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withAuthRedirect,
  withRouter
)(ProfileContainer)