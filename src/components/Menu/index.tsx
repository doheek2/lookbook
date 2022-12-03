import { useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'

import { FaHome, FaBook, FaHeart } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
import { HiLogin, HiLogout } from 'react-icons/hi'

import { storeType } from 'store'
import { menuActions } from 'store/menu-slice'
import { IUserState } from 'types/firebaseAuth'
import useLogout from 'hooks/useLogout'
import DarkModeBtn from 'components/DarkModeBtn'
import Button from 'components/Button'

import styles from './menu.module.scss'

interface IProps {
  isMobile: boolean
}

const Menu = ({ isMobile }: IProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { logoutHandler } = useLogout()
  const user: IUserState | null = useSelector((state: storeType) => state.auth.user)

  const logoBtnClickHandler = useCallback(() => {
    navigate('/')
  }, [navigate])

  const loginBtnClickHandler = useCallback(() => {
    navigate('/login')
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
        <div className={styles.line} />
        <li>
          {!user && (
            <Button
              isSubmit={false}
              onClick={() => {
                if (isMobile) menuBarCloseHandler()
                loginBtnClickHandler()
              }}
            >
              <>
                <HiLogin />
                <span>로그인</span>
              </>
            </Button>
          )}
          {user && (
            <Button
              isSubmit={false}
              onClick={() => {
                if (isMobile) menuBarCloseHandler()
                logoutHandler()
              }}
            >
              <>
                <HiLogout />
                <span>로그아웃</span>
              </>
            </Button>
          )}
        </li>
      </ul>
      <div className={styles.darkModeBtnContainer}>
        <DarkModeBtn />
      </div>
    </nav>
  )
}

export default Menu
