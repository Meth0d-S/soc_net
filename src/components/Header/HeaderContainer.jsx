import React from "react";
import {connect} from "react-redux";
import {setUser} from "../../redux/authReducer";
import Header from "./Header";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.authMe()
      .then(data => {
        let {id, email, login} = data.data
        if (data.resultCode === 0) {
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