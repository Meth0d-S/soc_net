import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
    this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items)
          this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
  }

  onPageChanged = (currentPage) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render = () => {
    debugger
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersContainer)