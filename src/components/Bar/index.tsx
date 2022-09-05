import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { HiMenu } from 'react-icons/hi'
import { MdOutlineWbSunny } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'

import { storeType } from 'store'
import { menuActions } from 'store/menu-slice'
import MenuBar from 'components/MenuBar'
import styles from './bar.module.scss'

const Bar = () => {
  const dispatch = useDispatch()
  const isMemuOpen = useSelector((state: storeType) => state.menu.isOpen)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const menuBtnClickHandler = () => dispatch(menuActions.isOpenMenu())
  const modeBtnClickHandler = () => setIsDarkTheme((prev) => !prev)

  const darkThemeHandler = () => {
    if (isDarkTheme) {
      return <BsFillMoonFill className={styles.darkBtn} color='#020100' />
    }
    return <MdOutlineWbSunny className={styles.brightBtn} color='#020100' />
  }

  return (
    <>
      <header className={styles.header}>
        <button type='button' className={styles.menuBtnWrapper} onClick={menuBtnClickHandler}>
          <HiMenu className={styles.menuBtn} color='#020100' />
        </button>
        <p className={styles.name}>LOOKBOOK</p>
        <button type='button' className={styles.modeBtn} onClick={modeBtnClickHandler}>
          {darkThemeHandler()}
        </button>
      </header>
      <div className={styles.menuBarContainer}>{isMemuOpen && <MenuBar />}</div>
    </>
  )
}

export default Bar
