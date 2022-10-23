import { useDispatch, useSelector } from 'react-redux'
import { HiMenu } from 'react-icons/hi'

import { storeType } from 'store'
import { menuActions } from 'store/menu-slice'

import MenuBar from 'components/MenuBar'
import DarkModeBtn from 'components/darkModeBtn'
import styles from './bar.module.scss'

const Bar = () => {
  const dispatch = useDispatch()
  const isMemuOpen = useSelector((state: storeType) => state.menu.isMenuOpen)
  const menuBtnClickHandler = () => dispatch(menuActions.isOpenMenu())

  return (
    <>
      <header className={styles.header}>
        <button type='button' className={styles.menuBtnWrapper} onClick={menuBtnClickHandler}>
          <HiMenu className={styles.menuBtn} color='#020100' />
        </button>
        <p className={styles.name}>LOOKBOOK</p>
        <DarkModeBtn />
      </header>
      <div className={styles.menuBarContainer}>{isMemuOpen && <MenuBar />}</div>
    </>
  )
}

export default Bar
