import { useCallback, ChangeEvent, useState, useEffect, FormEvent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import cx from 'classnames'

import Input from 'components/Input'
import Button from 'components/Button'
import SignContainer from 'components/SignContainer'
import useLogin from 'hooks/useLogin'

import styles from './login.module.scss'

const Login = () => {
  const navigate = useNavigate()
  const { error, isPending, loginHandler } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowEmailText, setIsShowEmailText] = useState(true)
  const [isDisabledBtn, setIsDisabledBtn] = useState(true)

  const formSubmitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      loginHandler(email, password)
    },
    [email, loginHandler, password]
  )

  const logoBtnClickHandler = useCallback(() => navigate('/'), [navigate])

  const emailChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    const regex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (regex.test(value)) setIsShowEmailText(true)
    else setIsShowEmailText(false)

    setEmail(value)
  }, [])

  const passwordChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }, [])

  useEffect(() => {
    if (isShowEmailText && password) setIsDisabledBtn(false)
    else setIsDisabledBtn(true)
  }, [isShowEmailText, password])

  return (
    <SignContainer logoBtnClickHandler={logoBtnClickHandler}>
      <article className={styles.wrapper}>
        <div>
          <h3>로그인</h3>
          <button type='button' className={styles.mobileLogo} onClick={logoBtnClickHandler}>
            LOOKBOOK
          </button>
        </div>
        <form className={styles.loginForm} onSubmit={formSubmitHandler}>
          <Input
            type='text'
            isAutocomplete
            className={styles.input}
            placeholder='이메일'
            onChange={emailChangeHandler}
          />
          {!isShowEmailText && <p className={styles.validate}>이메일 형식이 틀렸습니다.</p>}
          <Input
            type='password'
            isAutocomplete={false}
            className={styles.input}
            placeholder='비밀번호'
            onChange={passwordChangeHandler}
          />
          <Button
            isSubmit
            className={cx(styles.loginBtn, !isDisabledBtn && styles.disabledBtn)}
            disabled={isDisabledBtn}
          >
            <p>로그인</p>
          </Button>
        </form>
        <div className={styles.signUpTextWrapper}>
          <p className={styles.signUpAccountText}>계정이 없으신가요?</p>
          <NavLink to='/signUp' className={styles.signUpText}>
            회원가입
          </NavLink>
        </div>
      </article>
    </SignContainer>
  )
}

export default Login
