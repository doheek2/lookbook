import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { appAuth } from 'firebaseApp/config'
import useAuth from './useAuth'

const useSignUp = () => {
  const navigate = useNavigate()
  const { userDispatch } = useAuth()
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signupHandler = (email: string, password: string, displayName: string) => {
    setError(null)
    setIsPending(true)

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const { user } = userCredential

        if (!user) throw new Error('회원가입 실패')

        updateProfile(user, { displayName })
          .then(() => {
            userDispatch({ displayName, email, uid: user.uid })
            setError(null)
            setIsPending(false)
          })
          .catch((err) => {
            setError(err.message)
            setIsPending(false)
          })

        navigate('/')
      })
      .catch((err) => {
        setError(err.message)
        setIsPending(false)
      })
  }

  return { error, isPending, signupHandler }
}

export default useSignUp
