import styles from './Message.module.css'

const Message = (props) => {
  return (
    <p>
      {props.text}
    </p>
  )
}

export default Message