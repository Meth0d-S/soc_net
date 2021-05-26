import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom"
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    userId ? userId = this.props.match.params.userId : userId = 17343
    profileAPI.getProfile(userId)
      .then(data => {
        this.props.setUserProfile(data)
      })
  }

  render = () => {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = state => ({
  user: state.profilePage.user
})

let ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)