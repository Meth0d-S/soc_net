import React from "react";
import {connect} from "react-redux";
import {getUser} from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return <Header {...this.props}/>
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {getUser})(HeaderContainer)