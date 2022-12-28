import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'

import { CheckIcon } from 'assets/svgs'
import { storeType } from 'store'
import styles from './check.module.scss'
import { diaryActions } from 'store/diary-slice'

interface IProps {
  size: string
  id: string
  value: number
}
const Check = ({ size, id, value }: IProps) => {
  const dispatch = useDispatch()
  const isdiaryOpens = useSelector((state: storeType) => state.diary.isdiaryOpens)

  const inputChangeHandler = useCallback(() => {
    const initArr = [false, false]
    initArr[value] = true
    dispatch(diaryActions.isdiaryOpens(initArr))
  }, [dispatch, value])

  return (
    <div
      className={cx(
        size === 'small' && styles.small,
        size === 'medium' && styles.medium,
        size === 'large' && styles.large
      )}
    >
      <input type='checkbox' id={id} checked={isdiaryOpens[value]} onChange={inputChangeHandler} />
      <CheckIcon fill='#ffffff' stroke='#ffffff' strokeWidth='15' />
    </div>
  )
}

export default Check
