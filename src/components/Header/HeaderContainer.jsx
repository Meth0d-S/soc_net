import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUser} from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        let {id, email, login} = response.data.data
        if (response.data.resultCode === 0) {
          this.props.setUser(id, email, login)
        }
      })
  }

  render() {
    return <Header {...this.props}/>
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {setUser})(HeaderContainer)