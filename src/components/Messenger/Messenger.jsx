import React from "react";
import styles from './Messenger.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {Form, Field} from "react-final-form";
import {Textarea} from "../common/Forms/Textarea/Textarea";
import {composeValidators, maxLength, required} from "../../utils/validators/validators";

const Messenger = (props) => {

  const dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
  const messagesElements = props.messages.map(message => <Message text={message.text}/>)

  let addMessage = (values) => {
    props.addMessage(values.newMessage)
  }

  return (
    <div className={styles.messenger}>
      <div className={styles.dialogs}>
        {dialogsElements}
      </div>
      <div className={styles.window}>
        {messagesElements}
        <MessengerForm addMessage={addMessage}/>
      </div>
    </div>
  )
}

const MessengerForm = props => (
  <Form
    onSubmit={props.addMessage}
    render={({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <Field name={'newMessage'} component={Textarea} className={styles.textarea}
               placeholder={'input your message'} validate={composeValidators(required, maxLength(30))}/>
        <button className={styles.button} type='submit'>Send</button>
      </form>
    )}
  />
)

export default Messenger