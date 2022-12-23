import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBook, FaHeart } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'

import Button from 'components/Button'
import styles from './noDataForm.module.scss'

interface IProps {
  menu: string
}

const NoDataForm = ({ menu }: IProps) => {
  const svgIcon = {
    책일기장: <FaBook />,
    LOOKBOOK: <BsFillPeopleFill />,
    즐겨찾기: <FaHeart />,
  }[menu]

  const navigate = useNavigate()
  const openFormBtnClickHandler = useCallback(() => navigate('/diaryForm', { state: { isEdit: false } }), [navigate])

  return (
    <main className={styles.noDataWrapper}>
      <div className={styles.iconBackground}>{svgIcon}</div>
      <p>등록된 {menu}이 없습니다.</p>
      {menu === '책일기장' && (
        <Button isSubmit={false} className={styles.writeDiaryBtn} onClick={openFormBtnClickHandler}>
          일기쓰기
        </Button>
      )}
    </main>
  )
}

export default NoDataForm
