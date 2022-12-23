import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { VscClose } from 'react-icons/vsc'
import cx from 'classnames'

import styles from './closeBtn.module.scss'

interface IProps {
  className?: string
}
const CloseBtn = ({ className }: IProps) => {
  const navigate = useNavigate()
  const closeBtnClickHandler = useCallback(() => navigate(-1), [navigate])

  return (
    <button type='button' className={cx(styles.closeBtn, className)} onClick={closeBtnClickHandler}>
      <VscClose />
    </button>
  )
}

export default CloseBtn
