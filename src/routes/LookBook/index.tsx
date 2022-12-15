import { useSelector } from 'react-redux'

import { storeType } from 'store'
import { IUserState } from 'types/firebaseAuth'
import Container from 'components/Container'
import NotLoginForm from 'components/NotLoginForm'

import styles from './lookbook.module.scss'

const LookBook = () => {
  const user: IUserState | null = useSelector((state: storeType) => state.auth.user)

  return (
    <Container>
      <main className={styles.lookbookWrapper}>
        {user && <p>로그인</p>}
        {!user && <NotLoginForm pageName='LOOKBOOK' />}
      </main>
    </Container>
  )
}

export default LookBook
