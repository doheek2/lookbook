import Container from 'components/Container'
import NotLoginForm from 'components/NotLoginForm'
import useAuth from 'hooks/useAuth'

import styles from './bookDiary.module.scss'
import NoDataForm from 'components/NoDataForm'

const BookDiary = () => {
  const { user } = useAuth()

  return (
    <Container>
      <main className={styles.diaryWrapper}>
        {user && <NoDataForm menu='책일기장' />}
        {!user && <NotLoginForm pageName='책일기장' />}
      </main>
    </Container>
  )
}

export default BookDiary
