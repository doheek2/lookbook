import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import styles from './logo.module.scss'

interface IProps {
  className?: string
}

const Logo = ({ className }: IProps) => {
  const navigate = useNavigate()

  const logoBtnClickHandler = useCallback(() => {
    navigate('/')
  }, [navigate])
  return (
    <button type='button' className={cx(styles.logo, className)} onClick={logoBtnClickHandler}>
      LOOKBOOK
    </button>
  )
}

export default Logo
