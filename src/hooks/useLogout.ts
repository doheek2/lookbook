import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'

import { appAuth } from 'firebaseApp/config'
import { authActions } from 'store/auth-slice'

const useLogout = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const logoutHandler = () => {
    setError(null)
    setIsPending(true)

    signOut(appAuth)
      .then(() => {
        dispatch(authActions.user(null))
        setError(null)
        setIsPending(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsPending(false)
      })
  }

  return { error, isPending, logoutHandler }
}

export default useLogout
