import React from "react";
import styles from './Messenger.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Messenger = (props) => {

  const dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
  const messagesElements = props.state.messages.map(message => <Message text={message.text}/>)

  let textareaRefLink = React.createRef()

  let addMessage = () => {
    let text = textareaRefLink.current.value
    alert(text)
  }

  return (
    <div className={styles.messenger}>
      <div className={styles.dialogs}>
        {dialogsElements}
      </div>
      <div className={styles.window}>
        {messagesElements}
        <form onSubmit={event => event.preventDefault()}>
          <textarea ref={textareaRefLink} className={styles.textarea}/>
          <button onClick={addMessage} className={styles.button} type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Messenger