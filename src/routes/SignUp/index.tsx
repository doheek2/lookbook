import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import cx from 'classnames'

import SignContainer from 'components/SignContainer'
import Input from 'components/Input'
import Button from 'components/Button'
import useSignUp from 'hooks/useSignUp'

import styles from './signUp.module.scss'

const SignUp = () => {
  const navigate = useNavigate()
  const { error, isPending, signupHandler } = useSignUp()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowEmailText, setIsShowEmailText] = useState(true)
  const [isDisabledBtn, setIsDisabledBtn] = useState(true)

  const logoBtnClickHandler = useCallback(() => navigate('/'), [navigate])

  const displayNameChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.currentTarget.value)
  }, [])

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

  const submitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      signupHandler(email, password, displayName)
    },
    [displayName, email, password, signupHandler]
  )

  useEffect(() => {
    if (isShowEmailText && displayName && password) setIsDisabledBtn(false)
    else setIsDisabledBtn(true)
  }, [displayName, isShowEmailText, password])

  return (
    <SignContainer logoBtnClickHandler={logoBtnClickHandler}>
      <article className={styles.wrapper}>
        <div>
          <h3>회원가입</h3>
          <button type='button' className={styles.mobileLogo} onClick={logoBtnClickHandler}>
            LOOKBOOK
          </button>
        </div>
        <form className={styles.loginForm} onSubmit={submitHandler}>
          <Input
            type='text'
            isAutocomplete
            className={styles.input}
            placeholder='닉네임'
            onChange={displayNameChangeHandler}
          />
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
            <p>가입하기</p>
          </Button>
        </form>
        <div className={styles.signUpTextWrapper}>
          <p className={styles.signUpAccountText}>계정이 있으신가요?</p>
          <NavLink to='/login' className={styles.signUpText}>
            로그인
          </NavLink>
        </div>
      </article>
    </SignContainer>
  )
}

export default SignUp
