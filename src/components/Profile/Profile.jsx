import styles from './Profile.module.css'
import Description from "./Description/Description";
import WallContainer from "./Wall/WallContainer";

const Profile = (props) => {

  return (
    <div>
      <div>
        <img className={styles.img} src="http://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt=""/>
      </div>
      <Description user={props.user} status={props.status} updateStatus={props.updateStatus}/>
      <WallContainer/>
    </div>
  )
}

export default Profile