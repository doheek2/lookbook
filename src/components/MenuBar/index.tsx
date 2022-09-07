import { useDispatch } from 'react-redux'
import { menuActions } from 'store/menu-slice'

import Menu from 'components/Menu'
import styles from './menuBar.module.scss'

const MenuBar = () => {
  const dispatch = useDispatch()
  const closeMenuHandler = () => dispatch(menuActions.isOpenMenu())

  return (
    <>
      <div>
        <button type='button' className={styles.backdrop} onClick={closeMenuHandler} aria-hidden />
      </div>
      <div className={styles.menuContainer}>
        <Menu />
      </div>
    </>
  )
}

export default MenuBar
