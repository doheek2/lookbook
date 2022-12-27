import DarkModeBtn from 'components/DarkModeBtn'
import Logo from 'components/Logo'
import NavItem from './NavItem'
import SignItem from './SignItem'
import useAuth from 'hooks/useAuth'

import styles from './menu.module.scss'

const menus = ['main', 'bookdiary', 'lookbook', 'favorites']

interface IProps {
  isMobile: boolean
}

const Menu = ({ isMobile }: IProps) => {
  const { user } = useAuth()

  return (
    <nav className={styles.sideBarContainer}>
      <Logo className={styles.logo} />
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
