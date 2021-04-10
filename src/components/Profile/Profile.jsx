import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img className={styles.img} src="http://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt=""/>
      </div>
      <div className={styles.descr}>
        <img className={styles.avatar} src="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg" alt=""/>
        <div className="descr">
          <h3 className="name">
            Slavik Balashov
          </h3>
          <ul className={styles.list}>
            <li>Date of Birth: December, 30</li>
            <li>City: Rostov-on-Don</li>
            <li>Education: SFU'07</li>
            <li>Web Site: <a href="https://vk.com/daemon_l">https://vk.com/daemon_l</a></li>
          </ul>
        </div>
      </div>
      <form>
        <input className={styles.input} type="text"/>
        <button type="submit" className={styles.button}>Send</button>
      </form>
      <div className="wall">
        <div className={styles.post}>
          <img className={styles.ava} src="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg" alt=""/>
          <p className={styles.text}>Hey, why nobody loves me?</p>
        </div>
        <div className={styles.post}>
          <img className={styles.ava} src="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg" alt=""/>
          <p className={styles.text}>It's our new program! Hey!</p>
        </div>
      </div>
    </div>
  )
}

export default Profile