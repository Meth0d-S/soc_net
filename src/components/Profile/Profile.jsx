import styles from './Profile.module.css'
import Wall from "./Wall/Wall";
import Description from "./Description/Description";

const Profile = (props) => {

  return (
    <div>
      <div>
        <img className={styles.img} src="http://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt=""/>
      </div>
      <Description/>
      <Wall posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default Profile