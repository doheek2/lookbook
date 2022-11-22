import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineWbSunny } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'

import { storeType } from 'store'
import { menuActions } from 'store/menu-slice'

import styles from './darkModeBtn.module.scss'

const DarkModeBtn = () => {
  const dispatch = useDispatch()
  const isDarkModeBtnClicked = useSelector((state: storeType) => state.menu.isDarkModeBtnClicked)
  const modeBtnClickHandler = useCallback(() => {
    dispatch(menuActions.isDarkModeBtnClicked())
  }, [dispatch])

  return (
    <button type='button' className={styles.modeBtn} onClick={modeBtnClickHandler}>
      {isDarkModeBtnClicked && <BsFillMoonFill className={styles.darkBtn} color='#020100' />}
      {!isDarkModeBtnClicked && <MdOutlineWbSunny className={styles.brightBtn} color='#020100' />}
    </button>
  )
}

export default DarkModeBtn
