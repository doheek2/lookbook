import { useSelector } from 'react-redux'

import { storeType } from 'store'
import { IUserState } from 'types/firebaseAuth'
import Container from 'components/Container'
import NotLoginForm from 'components/NotLoginForm'

import styles from './bookDiary.module.scss'

const BookDiary = () => {
  const user: IUserState | null = useSelector((state: storeType) => state.auth.user)

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
