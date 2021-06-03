import React from "react";
import styles from "./Users.module.css";
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pages = []

  if (pagesCount > 10) {
    if (props.currentPage > 5) {
      for (let i = props.currentPage - 4; i <= props.currentPage + 5; i++) {
        pages.push(i)
        if (i === pagesCount) break
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i)
        if (i === pagesCount) break
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
  }

  return (
    <div>

      <div>
        {pages.map(page => <span onClick={() => {
          props.onPageChanged(page)
        }} className={props.currentPage === page ? styles.currentUser : styles.user}>{page}</span>)}
      </div>

      {
        props.users.map(user => <div>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img className={styles.ava} src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
            </NavLink>

            {user.followed

              ? <button disabled={props.followingIsInProgress.some(id => id === user.id)} onClick={() => {props.unfollow(user.id)}} className={styles.followButton}>Unfollow</button>

              : <button disabled={props.followingIsInProgress.some(id => id === user.id)} onClick={() => {props.follow(user.id)}} className={styles.followButton}>Follow</button>}

          </div>
          <div>
            <div>
              {user.name} -
              {' user.country'},
            </div>
            <div>
              {user.status}
              {' user.city'}
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Users