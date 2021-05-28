import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingIsInProgress, unfollow} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
  }

  onPageChanged = (currentPage) => {
    this.props.getUsers(currentPage, this.props.pageSize)
    this.props.setCurrentPage(currentPage)
  }

  render = () => {
    return <>
      {
        this.props.isFetching
          ? <Preloader/>
          : <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                 users={this.props.users} followingIsInProgress={this.props.followingIsInProgress}
                 onPageChanged={this.onPageChanged} follow={this.props.follow}
                 unfollow={this.props.unfollow}/>
      }
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingIsInProgress: state.usersPage.followingIsInProgress,
  }
}

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})(UsersContainer)