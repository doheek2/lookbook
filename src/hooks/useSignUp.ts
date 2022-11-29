import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { appAuth } from 'firebaseApp/config'

const useSignUp = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signupHandler = (email: string, password: string, displayName: string) => {
    setError(null)
    setIsPending(true)

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const { user } = userCredential
        console.log(user)

        if (!user) throw new Error('회원가입 실패')

        updateProfile(user, { displayName })
          .then(() => {
            setError(null)
            setIsPending(false)
          })
          .catch((err) => {
            setError(err.message)
            setIsPending(false)
          })
      })
      .catch((err) => {
        setError(err.message)
        setIsPending(false)
      })
  }

  return { error, isPending, signupHandler }
}

export default useSignUp
