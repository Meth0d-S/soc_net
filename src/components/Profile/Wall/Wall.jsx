import styles from './Wall.module.css'
import Post from "./Post/Post";

const Wall = () => {

  const posts = [
    {text: 'Hi, how are you?', like: '123'},
    {text: 'Silence...', like: '1'},
    {text: 'Grow...', like: '1'},
    {text: 'OH!', like: '1'},
    {text: 'Get ready!', like: '1'},
    {text: 'You soul is my', like: '1200'}
  ]

  const postsElements = posts.map(post => <Post text={post.text} like={post.like}/>)

  return (
    <div>
      <form>
        <input className={styles.input} type="text"/>
        <button className={styles.button} type="submit">Send</button>
      </form>
      <div className="wall">
        {postsElements}
      </div>
    </div>
  )
}

export default Wall