import React from "react";
import styles from './Messenger.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/messengerReducer";

const Messenger = (props) => {

  const dialogsElements = props.messengerPage.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
  const messagesElements = props.messengerPage.messages.map(message => <Message text={message.text}/>)

  let textareaRefLink = React.createRef()

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let updateMessage = () => {
    let text = textareaRefLink.current.value
    props.dispatch(updateMessageActionCreator(text))
  }

  return (
    <div className={styles.messenger}>
      <div className={styles.dialogs}>
        {dialogsElements}
      </div>
      <div className={styles.window}>
        {messagesElements}
        <form onSubmit={event => event.preventDefault()}>
          <textarea ref={textareaRefLink} onChange={updateMessage} value={props.messengerPage.newMessageText} className={styles.textarea}/>
          <button onClick={addMessage} className={styles.button} type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Messenger