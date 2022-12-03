import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { appAuth } from 'firebaseApp/config'
import { authActions } from 'store/auth-slice'

const useLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const loginHandler = (email: string, password: string) => {
    setError(null)
    setIsPending(true)

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const { user } = userCredential
        dispatch(authActions.user({ displayName: user.displayName, email, uid: user.uid }))
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
