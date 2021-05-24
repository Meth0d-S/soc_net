import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items)
          this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
  }

  componentWillUnmount() {
    this.props.toggleIsFetching(false)
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render = () => {
    return <>
      {
        this.props.isFetching
          ? <Preloader/>
          : <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                 users={this.props.users} onPageChanged={this.onPageChanged} follow={this.props.follow}
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
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => dispatch(followActionCreator(userId)),
//     unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
//     setUsers: (users) => dispatch(setUsersActionCreator(users)),
//     setCurrentPage: (page) => dispatch(setCurrentPageActionCreator(page)),
//     setUsersTotalCount: (totalCount) => dispatch(setUsersTotalCountActionCreator(totalCount)),
//     toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingActionCreator(isFetching)),
//   }
// }

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersContainer)