import { useCallback, ChangeEvent, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import Input from 'components/Input'
import Button from 'components/Button'

import styles from './login.module.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowEmailText, setIsShowEmailText] = useState(true)
  const [isDisabledBtn, setIsDisabledBtn] = useState(true)

  const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>, isEmail: boolean) => {
    const { value } = e.currentTarget
    if (isEmail) {
      const regex =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      if (regex.test(value)) setIsShowEmailText(true)
      else setIsShowEmailText(false)
      setEmail(value)
    } else {
      setPassword(value)
    }
  }, [])

  useEffect(() => {
    const passLen = password.length
    if (isShowEmailText && passLen > 8 && passLen < 20) setIsDisabledBtn(false)
    else setIsDisabledBtn(true)
  }, [isShowEmailText, password.length])

  return (
    <main className={styles.loginWrapper}>
      <article className={styles.whiteBox}>
        <div>
          <h3>Welcome Back !</h3>
          <span className={styles.loginText}>
            We happy to see you again. <br />
            To use your account, you should log in first.
          </span>
        </div>
        <form className={styles.loginForm}>
          <Input
            type='text'
            className={styles.input}
            value={email}
            placeholder='Email'
            onChange={(e) => inputChangeHandler(e, true)}
          />
          {!isShowEmailText && <p className={styles.validate}>이메일 형식이 틀렸습니다.</p>}
          <Input
            type='password'
            className={styles.input}
            value={password}
            placeholder='Password'
            onChange={(e) => inputChangeHandler(e, false)}
          />
          <Button
            isSubmit
            className={cx(styles.loginBtn, !isDisabledBtn && styles.disabledBtn)}
            disabled={isDisabledBtn}
          >
            <p>LOGIN</p>
          </Button>
        </form>
        <div className={styles.signUpTextWrapper}>
          <p className={styles.signUpAccountText}>Don&apos;t have an account?</p>
          <NavLink to='/signUp' className={styles.signUpText}>
            Sign Up
          </NavLink>
        </div>
      </article>
    </main>
  )
}

export default Login
