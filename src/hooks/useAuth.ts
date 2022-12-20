import { useDispatch, useSelector } from 'react-redux'

import { storeType } from 'store'
import { authActions } from 'store/auth-slice'
import { IUserState } from 'types/firebaseAuth'

interface IUserUpdateState {
  displayName: string | null
  email: string
  uid: string
}

const useAuth = () => {
  const dispatch = useDispatch()
  const user: IUserState | null = useSelector((state: storeType) => state.auth.user)

  const userDispatch = (updateData: IUserUpdateState | null) => {
    dispatch(authActions.user(updateData))
  }

  return { user, userDispatch }
}

export default useAuth
