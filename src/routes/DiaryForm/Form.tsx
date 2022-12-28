import { useCallback, FormEvent, MouseEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CgSearch } from 'react-icons/cg'
import cx from 'classnames'

import Button from 'components/Button'
import InputContainer from './InputContainer'
import CheckboxContainer from './CheckboxContainer'
import SearchBookModal from './SearchBookModal'

import { storeType } from 'store'
import { diaryActions } from 'store/diary-slice'

import styles from './diaryForm.module.scss'

interface IProps {
  isEdit: boolean
}

const colors = ['#F47272', '#F6B76D', '#83B987', '#6887A6', '#948ABD']
const checks = [
  {
    id: 'open',
    text: '공개',
  },
  {
    id: 'private',
    text: '비공개',
  },
]
const initSelectedColors = new Array(5).fill(false)
const firstSelectedColors = [true, ...new Array(4).fill(false)]

const Form = ({ isEdit }: IProps) => {
  const dispatch = useDispatch()
  const [isSelectedColors, setIsSelectedColors] = useState(firstSelectedColors)
  const isModalOpen = useSelector((state: storeType) => state.diary.isModalOpen)
  const title = useSelector((state: storeType) => state.diary.title)
  const content = useSelector((state: storeType) => state.diary.content)
  const comment = useSelector((state: storeType) => state.diary.comment)
  const labelColor = useSelector((state: storeType) => state.diary.labelColor)
  const isdiaryOpens = useSelector((state: storeType) => state.diary.isdiaryOpens)

  const formSubmitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // TODO: 책 이름, 이미지 추가
      console.log({ title, content, comment, labelColor, isdiaryOpens: isdiaryOpens[0] })
    },
    [title, content, comment, labelColor, isdiaryOpens]
  )

  const searchBtnClickHandler = useCallback(() => dispatch(diaryActions.isModalOpen(true)), [dispatch])

  const labelBtnClickHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>, color: string) => {
      const value = Number(e.currentTarget.value)
      const copyArr = [...initSelectedColors]
      copyArr[value] = true

      setIsSelectedColors(copyArr)
      dispatch(diaryActions.labelColor(color))
    },
    [dispatch]
  )

  return (
    <>
      <form className={styles.formWrapper} onSubmit={formSubmitHandler}>
        <article className={styles.searchBtnWrapper}>
          <Button isSubmit={false} className={styles.searchBookBtn} onClick={searchBtnClickHandler}>
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
                  value={i}
                  className={cx(isSelectedColors[i] && styles.selected, styles.labelBtn)}
                  style={{ backgroundColor: color }}
                  onClick={(e) => labelBtnClickHandler(e, color)}
                  aria-hidden
                />
              )
            })}
          </div>
        </article>
        <article className={styles.selectedWrapper}>
          <p>다이어리 공개 여부</p>
          <div className={styles.box}>
            {checks.map((check, i) => {
              const key = `check${i}`
              return <CheckboxContainer key={key} id={check.id} text={check.text} value={i} />
            })}
          </div>
        </article>
        <Button isSubmit className={styles.addBtn}>
          책일기장 추가
        </Button>
      </form>
      {isModalOpen && <SearchBookModal />}
    </>
  )
}

export default Form
