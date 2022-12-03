import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HiLogin, HiLogout } from 'react-icons/hi'

import { menuActions } from 'store/menu-slice'
import useLogout from 'hooks/useLogout'
import Button from 'components/Button'
import { loginName } from 'dictionary/menu'

interface IProps {
  isMobile: boolean
  name: string
}

const SignItem = ({ isMobile, name }: IProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { logoutHandler } = useLogout()
  const menuName = loginName[name]

  const svgIcon = {
    login: <HiLogin />,
    logout: <HiLogout />,
  }[name]

  const menuBarCloseHandler = useCallback(() => {
    dispatch(menuActions.isOpenMenu())
  }, [dispatch])

  const loginBtnClickHandler = useCallback(() => {
    navigate('/login')
  }, [navigate])

  return (
    <Button
      isSubmit={false}
      onClick={() => {
        if (isMobile) menuBarCloseHandler()

        if (name === 'login') loginBtnClickHandler()
        else logoutHandler()
      }}
    >
      <>
        {svgIcon}
        <span>{menuName}</span>
      </>
    </Button>
  )
}

export default SignItem
