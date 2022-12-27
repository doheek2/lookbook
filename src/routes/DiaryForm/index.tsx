import { useLocation } from 'react-use'

import CloseBtn from 'components/CloseBtn'
import Logo from 'components/Logo'
import Form from './Form'

import styles from './diaryForm.module.scss'

const DiaryForm = () => {
  const location = useLocation()
  const { isEdit } = location.state

  return (
    <main className={styles.diaryFormWrapper}>
      <Logo className={styles.webLogo} />
      <CloseBtn className={styles.mobileCloseBtn} />
      {/* TODO: 수정 시 데이터 추가 */}
      {isEdit && <Form isEdit={isEdit} />}
      {!isEdit && <Form isEdit={isEdit} />}
    </main>
  )
}

export default DiaryForm
