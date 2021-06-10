import logo from "../../img/logo.png";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="cat"/>
      <div>
        {props.isAuth
          ?
          <div>
            <NavLink className={styles.login} to='/profile-settings'>{props.login}</NavLink>
            <button onClick={props.logout} className={styles.logout}>-- logout --</button>
          </div>
          : <NavLink className={styles.login} to='/login'>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header