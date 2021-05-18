import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import NavbarFriendsContainer from "./NavbarFriends/NavbarFriendsContainer";

const Navbar = () => {
  return (
    <div className={styles.aside}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/profile" className={styles.link} activeClassName={styles.active}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/messenger" className={styles.link} activeClassName={styles.active}>Messenger</NavLink>
        </li>
        <li>
          <NavLink to="/news" className={styles.link} activeClassName={styles.active}>News</NavLink>
        </li>
        <li>
          <NavLink to="/music" className={styles.link} activeClassName={styles.active}>Music</NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={styles.link} activeClassName={styles.active}>Settings</NavLink>
        </li>
        <li>
          <NavLink to="/users" className={styles.link} activeClassName={styles.active}>Find Users</NavLink>
        </li>
      </ul>
      <NavbarFriendsContainer/>
    </div>
  )
}

export default Navbar