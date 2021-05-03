import React from "react";
import styles from './Wall.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/state";

const Wall = (props) => {

  const postsElements = props.posts.map(post => <Post text={post.text} like={post.like}/>)

  let textareaRefLink = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let updatePost = () => {
    let text = textareaRefLink.current.value
    props.dispatch(updatePostActionCreator(text))
  }

  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        <textarea onChange={updatePost} value={props.newPostText} ref={textareaRefLink} className={styles.textarea}/>
        <button onClick={addPost} className={styles.button} type="submit">Send</button>
      </form>
      <div className="wall">
        {postsElements}
      </div>
    </div>
  )
}

export default Wall