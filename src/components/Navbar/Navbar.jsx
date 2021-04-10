import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.aside}>
      <ul className={styles.list}>
        <li>
          <a href="#" className={`${styles.link} ${styles.active}`}>Profile</a>
        </li>
        <li>
          <a href="#" className={styles.link}>Messages</a>
        </li>
        <li>
          <a href="#" className={styles.link}>News</a>
        </li>
        <li>
          <a href="#" className={styles.link}>Music</a>
        </li>
        <li>
          <a href="#" className={styles.link}>Settings</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar