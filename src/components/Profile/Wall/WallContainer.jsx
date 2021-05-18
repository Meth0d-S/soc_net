import React from "react";
import Wall from "./Wall";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updatePost: (text) => dispatch(updatePostActionCreator(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall)