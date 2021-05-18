// import styles from './User.module.css'
//
// const User = (props) => {
//
//   return (
//     <div>
//       <div>
//         <div>
//           <img className={styles.ava} src={props.avatar} alt=""/>
//           {props.followed
//             ? <button onClick={() => {props.unfollow(props.id)}} className={styles.followButton}>Unfollow</button>
//             : <button onClick={() => {props.follow(props.id)}} className={styles.followButton}>Follow</button>}
//         </div>
//         <div>
//           <div>
//             {props.fullName}
//             {props.country},
//           </div>
//           <div>
//             {props.status}
//             {props.city}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default User