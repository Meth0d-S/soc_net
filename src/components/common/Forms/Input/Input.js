import styles from './Input.module.css'

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched
  return <>
    <input {...input} {...props} className={hasError ?`${props.className} ${styles.borderError}` : `${props.className}`}/>
    {hasError ? <span className={styles.spanError}>{meta.error}</span> : ''}
    </>
}