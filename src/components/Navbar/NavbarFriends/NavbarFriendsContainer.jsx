import NavbarFriends from "./NavbarFriends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const NavbarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarFriends)

export default NavbarFriendsContainer