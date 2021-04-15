import styles from './Messenger.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
  return (
      <NavLink to={'/messenger/' + props.id} className={styles.item} activeClassName={styles.active}>
        {props.name}
      </NavLink>
  )
}

const Message = (props) => {
  return (
    <p>
      {props.text}
    </p>
  )
}

const Messenger = () => {

  const dialogs = [
    {name: 'Ada', id: '1'},
    {name: 'Sam', id: '2'},
    {name: 'Liam', id: '3'},
    {name: 'Nox', id: '4'},
    {name: 'Andrew', id: '5'},
    {name: 'Bill', id: '6'}
  ]

  const messages = [
    {text: 'Hello, how are you?', id: 1},
    {text: 'I am fine', id: 1},
    {text: 'Good buy', id: 1}
  ]

  const dialogsElements = dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
  const messagesElements = messages.map(message => <Message text={message.text}/>)

  return (
    <div className={styles.messenger}>
      <div className={styles.dialogs}>
        {dialogsElements}
      </div>
      <div className={styles.window}>
        {messagesElements}
        <form action="#">
          <input className={styles.input} type="text"/>
          <button className={styles.button} type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Messenger