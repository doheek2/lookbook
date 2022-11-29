import { ChangeEventHandler } from 'react'
import cx from 'classnames'

import styles from './input.module.scss'

interface IProps {
  type: string
  isAutocomplete: boolean
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}
const Input = ({ type, isAutocomplete, className, onChange, placeholder }: IProps) => {
  return (
    <input
      type={type}
      autoComplete={isAutocomplete ? 'on' : 'off'}
      className={cx(styles.input, className)}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
