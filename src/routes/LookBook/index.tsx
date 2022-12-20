import Container from 'components/Container'
import NoDataForm from 'components/NoDataForm'
import NotLoginForm from 'components/NotLoginForm'
import useAuth from 'hooks/useAuth'

import styles from './lookbook.module.scss'

const LookBook = () => {
  const { user } = useAuth()

  return (
    <Container>
      <main className={styles.lookbookWrapper}>
        {user && <NoDataForm menu='LOOKBOOK' />}
        {!user && <NotLoginForm pageName='LOOKBOOK' />}
      </main>
    </Container>
  )
}

export default LookBook
