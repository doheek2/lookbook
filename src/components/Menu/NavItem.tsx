import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import { menuActions } from 'store/menu-slice'
import styles from './menu.module.scss'

interface IProps {
  isMobile: boolean
  route: string
  svg: JSX.Element
  name: string
}

const NavItem = ({ isMobile, route, svg, name }: IProps) => {
  const dispatch = useDispatch()

  const menuBarCloseHandler = useCallback(() => {
    dispatch(menuActions.isOpenMenu())
  }, [dispatch])

  return (
    <li>
      <NavLink
        to={route}
        onClick={() => {
          if (isMobile) menuBarCloseHandler()
        }}
        className={({ isActive }) => cx({ [styles.isActive]: isActive })}
      >
        {svg}
        <span>{name}</span>
      </NavLink>
    </li>
  )
}

export default NavItem
