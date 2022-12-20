import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { appAuth } from 'firebaseApp/config'
import useAuth from './useAuth'

const useLogin = () => {
  const navigate = useNavigate()
  const { userDispatch } = useAuth()
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const loginHandler = (email: string, password: string) => {
    setError(null)
    setIsPending(true)

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const { user } = userCredential
        userDispatch({ displayName: user.displayName, email, uid: user.uid })
        setError(null)
        setIsPending(false)

        if (!user) throw new Error('회원가입 실패')

        navigate('/')
      })
      .catch((err) => {
        setError(err.message)
        setIsPending(false)
      })
  }

  return { error, isPending, loginHandler }
}

export default useLogin
