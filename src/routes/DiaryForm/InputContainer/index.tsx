import styles from './inputContainer.module.scss'

interface IProps {
  title: string
  id: string
  isInput: boolean
}

const InputContainer = ({ title, id, isInput }: IProps) => {
  return (
    <article className={styles.inputWrapper}>
      <label htmlFor={id}>{title}</label>
      {isInput && <input type='text' id={id} />}
      {!isInput && <textarea id={id} />}
    </article>
  )
}

export default InputContainer
