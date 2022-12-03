import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { menuActions } from 'store/menu-slice'
import useLogout from 'hooks/useLogout'
import Button from 'components/Button'

interface IProps {
  isMobile: boolean
  isLogin: boolean
  svg: JSX.Element
  name: string
}

const SignItem = ({ isMobile, isLogin, svg, name }: IProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { logoutHandler } = useLogout()

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

        if (isLogin) loginBtnClickHandler()
        else logoutHandler()
      }}
    >
      <>
        {svg}
        <span>{name}</span>
      </>
    </Button>
  )
}

export default SignItem
