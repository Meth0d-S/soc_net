import styles from './Profile.module.css'
import Description from "./Description/Description";
import WallContainer from "./Wall/WallContainer";
import { Redirect } from "react-router-dom"

const Profile = (props) => {

  if (!props.isAuth) return <Redirect to='/login'/>

  return (
    <div>
      <div>
        <img className={styles.img} src="http://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt=""/>
      </div>
      <Description user={props.user}/>
      <WallContainer/>
    </div>
  )
}

export default Profile