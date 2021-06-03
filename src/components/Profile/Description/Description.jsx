import styles from './Description.module.css'
import Preloader from "../../common/Preloader/Preloader";
import user from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const Description = (props) => {

  if (!props.user) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <h3 className={styles.name}>
          {props.user.fullName}
        </h3>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        {props.user.photos.large
          ? <img className={styles.avatar} src={props.user.photos.large}/>
          : <img className={styles.avatar} src={user}/>}
        <div className="descr">
          <p>About Me: {props.user.aboutMe}</p>
          <p>Contacts:</p>
          <ul className={styles.list}>
            <li>Web Site: {props.user.contacts.website ? props.user.contacts.website : <span>&#129296;</span>}</li>
            <li>Facebook: {props.user.contacts.facebook ? props.user.contacts.facebook : <span>&#129296;</span>}</li>
            <li>VK: {props.user.contacts.vk ? props.user.contacts.vk : <span>&#129296;</span>}</li>
            <li>Twitter: {props.user.contacts.twitter ? props.user.contacts.twitter : <span>&#129296;</span>}</li>
            <li>Instagram: {props.user.contacts.instagram ? props.user.contacts.instagram : <span>&#129296;</span>}</li>
            <li>YouTube: {props.user.contacts.youtube ? props.user.contacts.youtube : <span>&#129296;</span>}</li>
            <li>Github: {props.user.contacts.github ? props.user.contacts.github : <span>&#129296;</span>}</li>
            <li>MainLink: {props.user.contacts.mainLink ? props.user.contacts.mainLink : <span>&#129296;</span>}</li>
          </ul>
          <div className={styles.jobHeader}>JOB:</div>
          {props.user.lookingForAJob
            ? <div>
              <div>Looking for a job!</div>
              <div>{props.user.lookingForAJobDescription}</div>
            </div>
            : <div>Not looking for a job...</div>}
        </div>
      </div>
    </div>
  )
}

export default Description