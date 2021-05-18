import React from "react";
import styles from './Messenger.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Messenger = (props) => {

  const dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
  const messagesElements = props.messages.map(message => <Message text={message.text}/>)

  let textareaRefLink = React.createRef()

  let addMessage = () => {
    props.addMessage()
  }

  let updateMessage = () => {
    let text = textareaRefLink.current.value
    props.updateMessage(text)
  }

  return (
    <div className={styles.messenger}>
      <div className={styles.dialogs}>
        {dialogsElements}
      </div>
      <div className={styles.window}>
        {messagesElements}
        <form onSubmit={event => event.preventDefault()}>
          <textarea ref={textareaRefLink} onChange={updateMessage} value={props.newMessageText} className={styles.textarea}/>
          <button onClick={addMessage} className={styles.button} type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Messenger