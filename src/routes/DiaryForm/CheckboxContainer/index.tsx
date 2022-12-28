import Check from 'components/Check'
import styles from './checkboxContainer.module.scss'

interface IProps {
  id: string
  text: string
  value: number
}

const CheckboxContainer = ({ id, text, value }: IProps) => {
  return (
    <div className={styles.checkbox}>
      <Check size='small' id={id} value={value} />
      <label htmlFor={id}>{text}</label>
    </div>
  )
}

export default CheckboxContainer
