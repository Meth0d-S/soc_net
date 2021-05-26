import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom"

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    userId ? userId = this.props.match.params.userId : userId = 17343
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data)
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