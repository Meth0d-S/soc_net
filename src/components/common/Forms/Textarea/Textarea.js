import styles from './Textarea.module.css'

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched
  return <>
    <textarea {...input} {...props} className={hasError ?`${props.className} ${styles.borderError}` : `${props.className}`}/>
    {hasError ? <span className={styles.spanError}>{meta.error}</span> : ''}
  </>
}