import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import DarkModeBtn from 'components/DarkModeBtn'
import NavItem from './NavItem'
import SignItem from './SignItem'

import styles from './menu.module.scss'
import useAuth from 'hooks/useAuth'

const menus = ['main', 'bookdiary', 'lookbook', 'favorites']

interface IProps {
  isMobile: boolean
}

const Menu = ({ isMobile }: IProps) => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const logoBtnClickHandler = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <nav className={styles.sideBarContainer}>
      <button type='button' className={styles.logo} onClick={logoBtnClickHandler}>
        LOOKBOOK
      </button>
      <ul className={styles.menuContainer}>
        {menus.map((menu, i) => {
          const key = `menu${i}`
          return <NavItem key={key} isMobile={isMobile} menu={menu} />
        })}
        <div className={styles.line} />
        <li>
          {!user && <SignItem isMobile={isMobile} name='login' />}
          {user && <SignItem isMobile={isMobile} name='logout' />}
        </li>
      </ul>
      <div className={styles.darkModeBtnContainer}>
        <DarkModeBtn />
      </div>
    </nav>
  )
}

export default Menu
