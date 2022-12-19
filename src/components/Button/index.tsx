import { MouseEventHandler } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface IProps {
  children: React.ReactNode
  isSubmit: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

const Button = ({ children, isSubmit, className, onClick, disabled }: IProps) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={cx(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
