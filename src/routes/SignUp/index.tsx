import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import cx from 'classnames'

import SignContainer from 'components/SignContainer'
import Input from 'components/Input'
import Button from 'components/Button'
import LoadingIcon from 'components/LoadingIcon'
import useSignUp from 'hooks/useSignUp'

import styles from './signUp.module.scss'

const SignUp = () => {
  const navigate = useNavigate()
  const { error, isPending, signupHandler } = useSignUp()

  // 값 저장
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // 에러메세지 저장
  const [displayNameMsg, setdisplayNameMsg] = useState<string | null>(null)
  const [emailMsg, setemailMsg] = useState<string | null>(null)
  const [passwordMsg, setPasswordMsg] = useState<string | null>(null)

  // 유효성 검사
  const [isDisplayName, setIsDisplayName] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isPassWord, setIsPassWord] = useState(false)

  const logoBtnClickHandler = useCallback(() => navigate('/'), [navigate])

  const displayNameChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    const displayNameLength = value.length

    if (displayNameLength < 2 || displayNameLength > 10) {
      setdisplayNameMsg('닉네임은 2~10자로 입력해주세요.')
      setIsDisplayName(false)
    } else {
      setdisplayNameMsg(null)
      setIsDisplayName(true)
    }

    setDisplayName(value)
  }, [])

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

  const submitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      signupHandler(email, password, displayName)
    },
    [displayName, email, password, signupHandler]
  )

  return (
    <SignContainer logoBtnClickHandler={logoBtnClickHandler}>
      <article className={styles.wrapper}>
        <div>
          <h3>회원가입</h3>
          <button type='button' className={styles.mobileLogo} onClick={logoBtnClickHandler}>
            LOOKBOOK
          </button>
        </div>
        <form className={styles.signUpForm} onSubmit={submitHandler}>
          <Input
            type='text'
            isAutocomplete
            placeholder='닉네임'
            validateText={displayNameMsg}
            onChange={displayNameChangeHandler}
          />
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
            className={cx(styles.signUpBtn, isDisplayName && isEmail && isPassWord && styles.disabledBtn)}
            disabled={!(isDisplayName && isEmail && isPassWord)}
          >
            <>
              {isPending && <LoadingIcon />}
              {!isPending && <p>가입하기</p>}
            </>
          </Button>
        </form>
        <div className={styles.loginWrapper}>
          <p className={styles.loginAccountText}>계정이 있으신가요?</p>
          <NavLink to='/login' className={styles.loginText}>
            로그인
          </NavLink>
        </div>
      </article>
    </SignContainer>
  )
}

export default SignUp
