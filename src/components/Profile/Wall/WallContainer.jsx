import Wall from "./Wall";
import {addPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => dispatch(addPostActionCreator()),
//     updatePost: (text) => dispatch(updatePostActionCreator(text))
//   }
// }

export default connect(mapStateToProps, {addPost})(Wall)