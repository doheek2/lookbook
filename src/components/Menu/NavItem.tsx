import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import { FaHome, FaBook, FaHeart } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'

import { menuName, menuRoute } from 'dictionary/menu'
import { menuActions } from 'store/menu-slice'
import styles from './menu.module.scss'

interface IProps {
  isMobile: boolean
  menu: string
}

const NavItem = ({ isMobile, menu }: IProps) => {
  const svgIcon = {
    main: <FaHome />,
    bookdiary: <FaBook />,
    lookbook: <BsFillPeopleFill />,
    favorites: <FaHeart />,
  }[menu]

  const route = menuRoute[menu]
  const name = menuName[menu]
  const dispatch = useDispatch()

  const menuBarCloseHandler = useCallback(() => {
    dispatch(menuActions.isOpenMenu())
  }, [dispatch])

  return (
    <li>
      <NavLink
        to={`/${route}`}
        onClick={() => {
          if (isMobile) menuBarCloseHandler()
        }}
        className={({ isActive }) => cx({ [styles.isActive]: isActive })}
      >
        {svgIcon}
        <span>{name}</span>
      </NavLink>
    </li>
  )
}

export default NavItem
