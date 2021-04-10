import logo from "../../img/logo.png";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="cat"/>
    </header>
  )
}

export default Header