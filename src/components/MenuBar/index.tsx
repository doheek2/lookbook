import { useDispatch } from 'react-redux'
import { menuActions } from 'store/menu-slice'

import styles from './menuBar.module.scss'

const MenuBar = () => {
  const dispatch = useDispatch()

  const closeMenuHandler = () => dispatch(menuActions.isOpenMenu())
  return (
    <div>
      <button type='button' className={styles.backdrop} onClick={closeMenuHandler} aria-hidden />
      <div className={styles.menuContainer}>
        <p>Menubar</p>
        <button type='button' onClick={closeMenuHandler}>
          닫기
        </button>
      </div>
    </div>
  )
}

export default MenuBar
