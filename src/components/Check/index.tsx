import cx from 'classnames'

import { CheckIcon } from 'assets/svgs'
import styles from './check.module.scss'

interface IProps {
  size: string
  id: string
  isChecked: boolean
}
const Check = ({ size, id, isChecked }: IProps) => {
  return (
    <div
      className={cx(
        size === 'small' && styles.small,
        size === 'medium' && styles.medium,
        size === 'large' && styles.large
      )}
    >
      <input type='checkbox' id={id} checked={isChecked} />
      <CheckIcon fill='#ffffff' stroke='#ffffff' strokeWidth='15' />
    </div>
  )
}

export default Check
