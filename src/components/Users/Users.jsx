import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => this.props.setUsers(response.data.items))
    }
  }

  render = () => {
    return (
      <div>
        {
          this.props.users.map(user => <div>
            <div>
              <img className={styles.ava} src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
              {user.followed
                ? <button onClick={() => {
                  this.props.unfollow(user.id)
                }} className={styles.followButton}>Unfollow</button>
                : <button onClick={() => {
                  this.props.follow(user.id)
                }} className={styles.followButton}>Follow</button>}
            </div>
            <div>
              <div>
                {user.name} -
                {' user.country'},
              </div>
              <div>
                {user.status}
                {'user.city'}
              </div>
            </div>
          </div>)
        }
      </div>
    )
  }
}

// let Users = (props) => {
//   let follow = (userId) => {
//     props.follow(userId)
//   }
//   let unfollow = (userId) => {
//     props.unfollow(userId)
//   }
//   let usersElements = props.users.map(user => <User avatar={user.avatar} followed={user.followed}
//                                                     fullName={user.fullName} status={user.status}
//                                                     country={user.location.country} city={user.location.city}
//                                                     follow={follow} unfollow={unfollow}/>)
//   return <div>
//     {usersElements}
//   </div>
// }

export default Users