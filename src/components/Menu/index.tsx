import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FaHome, FaBook, FaHeart } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'

import { menuActions } from 'store/menu-slice'
import DarkModeBtn from 'components/DarkModeBtn'
import styles from './menu.module.scss'

interface IProps {
  isMobile: boolean
}

const Menu = ({ isMobile }: IProps) => {
  const dispatch = useDispatch()

  const menuBarCloseHandler = () => {
    dispatch(menuActions.isOpenMenu())
  }

  return (
    <nav className={styles.sideBarContainer}>
      <p className={styles.name}>LOOKBOOK</p>
      <ul className={styles.menuContainer}>
        <li>
          <NavLink
            to='/'
            onClick={() => {
              if (isMobile) menuBarCloseHandler()
            }}
            className={({ isActive }) => cx({ [styles.isActive]: isActive })}
          >
            <FaHome />
            <span>홈</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/bookdiary'
            onClick={() => {
              if (isMobile) menuBarCloseHandler()
            }}
            className={({ isActive }) => cx({ [styles.isActive]: isActive })}
          >
            <FaBook />
            <span>책일기장</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/lookbook'
            onClick={() => {
              if (isMobile) menuBarCloseHandler()
            }}
            className={({ isActive }) => cx({ [styles.isActive]: isActive })}
          >
            <BsFillPeopleFill />
            <span>LOOKBOOK</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/favorites'
            onClick={() => {
              if (isMobile) menuBarCloseHandler()
            }}
            className={({ isActive }) => cx({ [styles.isActive]: isActive })}
          >
            <FaHeart />
            <span>즐겨찾기</span>
          </NavLink>
        </li>
      </ul>
      <div className={styles.darkModeBtnContainer}>
        <DarkModeBtn />
      </div>
    </nav>
  )
}

export default Menu
