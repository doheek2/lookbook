import { useLocation } from 'react-use'

import CloseBtn from 'components/CloseBtn'
import styles from './diaryForm.module.scss'
import Form from './Form'

const DiaryForm = () => {
  const location = useLocation()
  const { isEdit } = location.state

  return (
    <main className={styles.diaryFormWrapper}>
      <CloseBtn className={styles.mobileCloseBtn} />
      {/* TODO: 수정 시 데이터 추가 */}
      {isEdit && <Form isEdit={isEdit} />}
      {!isEdit && <Form isEdit={isEdit} />}
    </main>
  )
}

export default DiaryForm
