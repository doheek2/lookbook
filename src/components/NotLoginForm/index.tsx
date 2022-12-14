import { useNavigate } from 'react-router-dom'

import Button from 'components/Button'
import styles from './notLoginForm.module.scss'

interface IProps {
  pageName: string
}
const NotLoginForm = ({ pageName }: IProps) => {
  const navigate = useNavigate()

  const loginBtnClickHandler = () => navigate('/login')
  const signUpBtnClickHandler = () => navigate('/signUp')

  return (
    <div className={styles.notLoginFormWrapper}>
      <h3>
        {pageName}은 <span>로그인</span> 후 이용 가능합니다.
      </h3>
      <Button isSubmit={false} className={styles.loginBtn} onClick={loginBtnClickHandler}>
        로그인
      </Button>
      <Button isSubmit={false} className={styles.signUpBtn} onClick={signUpBtnClickHandler}>
        회원가입
      </Button>
    </div>
  )
}

export default NotLoginForm
