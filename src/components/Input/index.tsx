import { ChangeEventHandler } from 'react'

import styles from './input.module.scss'

interface IProps {
  type: string
  isAutocomplete: boolean
  placeholder: string
  validateText: string | null
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = ({ type, isAutocomplete, placeholder, validateText, onChange }: IProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input type={type} autoComplete={isAutocomplete ? 'on' : 'off'} placeholder={placeholder} onChange={onChange} />
      <p className={styles.validate}>{validateText}</p>
    </div>
  )
}

export default Input
