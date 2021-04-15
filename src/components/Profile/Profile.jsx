import styles from './Profile.module.css'
import Wall from "./Wall/Wall";
import Description from "./Wall/Description/Description";

const Profile = () => {
  return (
    <div>
      <div>
        <img className={styles.img} src="http://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt=""/>
      </div>
      <Description/>
      <Wall/>
    </div>
  )
}

export default Profile