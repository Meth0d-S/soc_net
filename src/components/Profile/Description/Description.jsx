import styles from './Description.module.css'

const Description = () => {
  return (
    <div>
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
    </div>
  )
}

export default Description