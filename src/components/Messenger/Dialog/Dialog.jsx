import styles from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
  return (
    <NavLink to={'/messenger/' + props.id} className={styles.item} activeClassName={styles.active}>
      {props.name}
    </NavLink>
  )
}

export default Dialog