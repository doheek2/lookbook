import { ChangeEventHandler } from 'react'
import cx from 'classnames'

import styles from './input.module.scss'

interface IProps {
  type: string
  className?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}
const Input = ({ type, className, value, onChange, placeholder }: IProps) => {
  return (
    <input
      type={type}
      className={cx(styles.input, className)}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
