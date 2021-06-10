import React from "react";
import styles from './Wall.module.css'
import Post from "./Post/Post";
import {Form, Field} from "react-final-form";
import {composeValidators, maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from '../../common/Forms/Textarea/Textarea'

const Wall = (props) => {

  const postsElements = props.posts.map(post => <Post text={post.text} like={post.like} key={post.id}/>)

  let addPost = (values) => {
    props.addPost(values.newPost)
  }

  return (
    <div>
      <WallForm addPost={addPost}/>
      <div className="wall">
        {postsElements}
      </div>
    </div>
  )
}

const WallForm = props => (
  <Form
    onSubmit={props.addPost}
    render={({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <Field name={'newPost'} component={Textarea} placeholder={'input your message'} className={styles.textarea} validate={composeValidators(required, maxLength(30))}/>
        <button className={styles.button} type="submit">Send</button>
      </form>
    )}
/>
)

export default Wall