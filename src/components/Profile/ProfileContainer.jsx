import React from "react"
import {connect} from "react-redux"
import {getUserProfile} from "../../redux/profileReducer"
import {withRouter} from "react-router-dom"
import Profile from "./Profile"

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    userId ? userId = this.props.match.params.userId : userId = 17343
    this.props.getUserProfile(userId)
  }

  render = () => {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = state => ({
  user: state.profilePage.user,
  isAuth: state.auth.isAuth
})

let ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter)