import styles from './NavbarFriend.module.css'
import {NavLink} from "react-router-dom";

const NavbarFriend = (props) => {
  return (
    <NavLink className={styles.link} activeClassName={styles.active} to={'/friends/' + props.id}>
      <div>
        <p className={styles.name}>{props.name}</p>
        <img className={styles.avatar} src={props.avatar} alt=""/>
      </div>
    </NavLink>
  )
}

export default NavbarFriend