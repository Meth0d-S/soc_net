import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={styles.post}>
        <img className={styles.ava} src="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg" alt=""/>
        <p className={styles.text}>{props.text}</p>
      </div>
      <div className="likes">like {props.like}</div>
    </div>
  )
}

export default Post