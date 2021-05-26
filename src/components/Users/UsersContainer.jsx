import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount, toggleFollowingIsInProgress,
  toggleIsFetching,
  unfollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
    this.props.toggleIsFetching(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(data.items)
          this.props.setUsersTotalCount(data.totalCount)
        })
    }
  }

  onPageChanged = (currentPage) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(currentPage)
    usersAPI.getUsers(currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      })
  }

  render = () => {
    return <>
      {
        this.props.isFetching
          ? <Preloader/>
          : <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                 users={this.props.users} followingIsInProgress={this.props.followingIsInProgress} onPageChanged={this.onPageChanged} follow={this.props.follow}
                 unfollow={this.props.unfollow} toggleFollowingIsInProgress={this.props.toggleFollowingIsInProgress}/>
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingIsInProgress})(UsersContainer)