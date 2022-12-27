import { CgSearch } from 'react-icons/cg'

import Button from 'components/Button'
import InputContainer from './InputContainer'
import CheckboxContainer from './CheckboxContainer'

import styles from './diaryForm.module.scss'

interface IProps {
  isEdit: boolean
}

const colors = ['#F47272', '#F6B76D', '#83B987', '#6887A6', '#948ABD']

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
      <article className={styles.selectedWrapper}>
        <p>라벨 색상 선택</p>
        <div className={styles.box}>
          {colors.map((color, i) => {
            const key = `label${i}`
            return (
              <button
                type='button'
                key={key}
                className={styles.labelBtn}
                style={{ backgroundColor: color }}
                aria-hidden
              />
            )
          })}
        </div>
      </article>
      <article className={styles.selectedWrapper}>
        <p>다이어리 공개 여부</p>
        <div className={styles.box}>
          <CheckboxContainer id='open' text='공개' />
          <CheckboxContainer id='private' text='비공개' />
        </div>
      </article>
      <Button isSubmit className={styles.addBtn}>
        책일기장 추가
      </Button>
    </form>
  )
}

export default Form
