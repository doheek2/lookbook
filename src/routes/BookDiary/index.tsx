import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'

import Container from 'components/Container'
import NotLoginForm from 'components/NotLoginForm'
import Button from 'components/Button'
import NoDataForm from 'components/NoDataForm'
import useAuth from 'hooks/useAuth'

import styles from './bookDiary.module.scss'

const BookDiary = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const openFormBtnClickHandler = useCallback(() => navigate('/diaryForm', { state: { isEdit: false } }), [navigate])

  return (
    <Container>
      <main className={styles.diaryWrapper}>
        {user && (
          <div>
            <NoDataForm menu='책일기장' />
            <Button isSubmit={false} className={styles.mobileOpenFormBtn} onClick={openFormBtnClickHandler}>
              <BsPlusLg />
            </Button>
          </div>
        )}
        {!user && <NotLoginForm pageName='책일기장' />}
      </main>
    </Container>
  )
}

export default BookDiary
