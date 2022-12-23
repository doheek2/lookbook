import { CgSearch } from 'react-icons/cg'

import Button from 'components/Button'
import InputContainer from './InputContainer'
import CheckboxContainer from './CheckboxContainer'

import styles from './diaryForm.module.scss'

interface IProps {
  isEdit: boolean
}

const Form = ({ isEdit }: IProps) => {
  return (
    <form className={styles.formWrapper}>
      <article className={styles.searchBtnWrapper}>
        {/* TODO: 모달창 책 검색바 추가 */}
        <Button isSubmit={false} className={styles.searchBookBtn}>
          <CgSearch />
          <span>책 검색</span>
        </Button>
      </article>
      <InputContainer title='제목' id='title' isInput />
      <InputContainer title='내용' id='content' isInput={false} />
      <InputContainer title='코멘트' id='comment' isInput />
      <article className={styles.isShowDiaryWrapper}>
        <p>다이어리 공개 여부</p>
        <div className={styles.checkboxWrapper}>
          <CheckboxContainer id='open' text='공개' />
          <CheckboxContainer id='private' text='비공개' />
        </div>
      </article>
      {/* TODO: 컬러 팔레트 추가 */}
      <Button isSubmit className={styles.addBtn}>
        책일기장 추가
      </Button>
    </form>
  )
}

export default Form
