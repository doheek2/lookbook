import Check from 'components/Check'
import styles from './checkboxContainer.module.scss'

interface IProps {
  id: string
  text: string
}

// TODO: isChecked 변경
const CheckboxContainer = ({ id, text }: IProps) => {
  return (
    <div className={styles.checkbox}>
      <Check size='small' id={id} isChecked />
      <label htmlFor={id}>{text}</label>
    </div>
  )
}

export default CheckboxContainer
