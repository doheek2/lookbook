import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { FaHome, FaBook, FaHeart } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
import { HiLogin, HiLogout } from 'react-icons/hi'

import { storeType } from 'store'
import { IUserState } from 'types/firebaseAuth'
import DarkModeBtn from 'components/DarkModeBtn'
import NavItem from './NavItem'
import SignItem from './SignItem'

import styles from './menu.module.scss'

interface IProps {
  isMobile: boolean
}

const Menu = ({ isMobile }: IProps) => {
  const navigate = useNavigate()
  const user: IUserState | null = useSelector((state: storeType) => state.auth.user)

  const logoBtnClickHandler = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <nav className={styles.sideBarContainer}>
      <button type='button' className={styles.logo} onClick={logoBtnClickHandler}>
        LOOKBOOK
      </button>
      <ul className={styles.menuContainer}>
        <NavItem isMobile={isMobile} route='/' svg={<FaHome />} name='홈' />
        <NavItem isMobile={isMobile} route='/bookdiary' svg={<FaBook />} name='책일기장' />
        <NavItem isMobile={isMobile} route='/lookbook' svg={<BsFillPeopleFill />} name='LOOKBOOK' />
        <NavItem isMobile={isMobile} route='/favorites' svg={<FaHeart />} name='즐겨찾기' />
        <div className={styles.line} />
        <li>
          {!user && <SignItem isMobile={isMobile} isLogin svg={<HiLogin />} name='로그인' />}
          {user && <SignItem isMobile={isMobile} isLogin={false} svg={<HiLogout />} name='로그아웃' />}
        </li>
      </ul>
      <div className={styles.darkModeBtnContainer}>
        <DarkModeBtn />
      </div>
    </nav>
  )
}

export default Menu
