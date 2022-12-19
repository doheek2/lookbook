import { useCallback, ChangeEvent, useState, FormEvent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import cx from 'classnames'

import Input from 'components/Input'
import Button from 'components/Button'
import SignContainer from 'components/SignContainer'
import LoadingIcon from 'components/LoadingIcon'
import useLogin from 'hooks/useLogin'

import styles from './login.module.scss'

const Login = () => {
  const navigate = useNavigate()
  const { error, isPending, loginHandler } = useLogin()

  // 값 저장
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // 에러메세지 저장
  const [emailMsg, setemailMsg] = useState<string | null>(null)
  const [passwordMsg, setPasswordMsg] = useState<string | null>(null)

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false)
  const [isPassWord, setIsPassWord] = useState(false)

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

    if (regex.test(value)) {
      setemailMsg(null)
      setIsEmail(true)
    } else {
      setemailMsg('이메일 형식이 틀렸습니다.')
      setIsEmail(false)
    }

    setEmail(value)
  }, [])

  const passwordChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    const passwordLength = value.length

    if (passwordLength < 8 || passwordLength > 64) {
      setPasswordMsg('비밀번호는 8~64자로 입력해주세요.')
      setIsPassWord(false)
    } else {
      setPasswordMsg(null)
      setIsPassWord(true)
    }

    setPassword(value)
  }, [])

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
            placeholder='이메일'
            validateText={emailMsg}
            onChange={emailChangeHandler}
          />
          <Input
            type='password'
            isAutocomplete={false}
            placeholder='비밀번호'
            validateText={passwordMsg}
            onChange={passwordChangeHandler}
          />
          {error && <p className={styles.errorMsg}>{error}</p>}
          <Button
            isSubmit
            className={cx(styles.loginBtn, isEmail && isPassWord && styles.disabledBtn)}
            disabled={!(isEmail && isPassWord)}
          >
            {isPending && <LoadingIcon />}
            {!isPending && <p>로그인</p>}
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
