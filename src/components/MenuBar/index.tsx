import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { menuActions } from 'store/menu-slice'

import Menu from 'components/Menu'
import styles from './menuBar.module.scss'

const MenuBar = () => {
  const dispatch = useDispatch()
  const closeMenuHandler = useCallback(() => {
    dispatch(menuActions.isOpenMenu())
  }, [dispatch])

  return (
    <>
      <div>
        <button type='button' className={styles.backdrop} onClick={closeMenuHandler} aria-hidden />
      </div>
      <div className={styles.menuContainer}>
        <Menu isMobile />
      </div>
    </>
  )
}

export default MenuBar
