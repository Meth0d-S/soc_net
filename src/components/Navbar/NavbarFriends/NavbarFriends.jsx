import styles from './NavbarFriends.module.css'
import NavbarFriend from "./NavbarFriend/NavbarFriend";
import {NavLink} from "react-router-dom";

const NavbarFriends = (props) => {

  const friendsElements = props.state.map((friend) => <NavbarFriend name={friend.name} avatar={friend.avatar} id={friend.id}/>)

  return (
    <div>
      <NavLink to='/friends' className={styles.link} activeClassName={styles.active}>Friends</NavLink>
      <div className={styles.friendsField}>
        {friendsElements}
      </div>
    </div>
  )
}

export default NavbarFriends