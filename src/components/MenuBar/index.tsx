import cx from 'classnames'
import { NavLink } from 'react-router-dom'

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
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              홈
            </NavLink>
          </li>
          <li>
            <NavLink to='bookdiary' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              책일기장
            </NavLink>
          </li>
          <li>
            <NavLink to='lookbook' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              모두의 LOOKBOOK
            </NavLink>
          </li>
          <li>
            <NavLink to='favorites' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              즐겨찾기
            </NavLink>
          </li>
        </ul>
        <button type='button' onClick={closeMenuHandler}>
          닫기
        </button>
      </div>
    </div>
  )
}

export default MenuBar
