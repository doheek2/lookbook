import { useState } from 'react'
import { signOut } from 'firebase/auth'

import { appAuth } from 'firebaseApp/config'
import useAuth from './useAuth'

const useLogout = () => {
  const { userDispatch } = useAuth()
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const logoutHandler = () => {
    setError(null)
    setIsPending(true)

    signOut(appAuth)
      .then(() => {
        userDispatch(null)
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
