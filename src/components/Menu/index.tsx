import { useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import cx from 'classnames'

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
  const navigate = useNavigate()

  const logoBtnClickHandler = useCallback(() => {
    navigate('/')
  }, [navigate])

  const menuBarCloseHandler = useCallback(() => {
    dispatch(menuActions.isOpenMenu())
  }, [dispatch])

  return (
    <nav className={styles.sideBarContainer}>
      <button type='button' className={styles.logo} onClick={logoBtnClickHandler}>
        LOOKBOOK
      </button>
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
