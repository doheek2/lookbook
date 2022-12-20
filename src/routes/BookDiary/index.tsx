import Container from 'components/Container'
import NotLoginForm from 'components/NotLoginForm'
import useAuth from 'hooks/useAuth'

import styles from './bookDiary.module.scss'

const BookDiary = () => {
  const { user } = useAuth()

  return (
    <Container>
      <main className={styles.diaryWrapper}>
        {user && <p>로그인</p>}
        {!user && <NotLoginForm pageName='책일기장' />}
      </main>
    </Container>
  )
}

export default BookDiary
