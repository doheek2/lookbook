import { FaBook, FaHeart } from 'react-icons/fa'
import { BsFillPeopleFill, BsPlusLg } from 'react-icons/bs'

import styles from './noDataForm.module.scss'
import Button from 'components/Button'

interface IProps {
  menu: string
}

const NoDataForm = ({ menu }: IProps) => {
  const svgIcon = {
    책일기장: <FaBook />,
    LOOKBOOK: <BsFillPeopleFill />,
    즐겨찾기: <FaHeart />,
  }[menu]

  return (
    <main className={styles.noDataWrapper}>
      <div className={styles.iconBackground}>{svgIcon}</div>
      <p>등록된 {menu}이 없습니다.</p>
      {menu === '책일기장' && (
        <Button isSubmit={false} className={styles.openFormBtn}>
          <BsPlusLg />
        </Button>
      )}
    </main>
  )
}

export default NoDataForm
