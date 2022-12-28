import { useCallback, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { diaryActions } from 'store/diary-slice'
import styles from './inputContainer.module.scss'

interface IProps {
  title: string
  id: string
  isInput: boolean
}

const InputContainer = ({ title, id, isInput }: IProps) => {
  const dispatch = useDispatch()

  const inputChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget
      if (id === 'title') dispatch(diaryActions.title(value))
      else if (id === 'comment') dispatch(diaryActions.content(value))
    },
    [dispatch, id]
  )

  const textareaChangeHandler = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(diaryActions.comment(e.currentTarget.value))
    },
    [dispatch]
  )

  return (
    <article className={styles.inputWrapper}>
      <label htmlFor={id}>{title}</label>
      {isInput && <input type='text' id={id} onChange={inputChangeHandler} />}
      {!isInput && <textarea id={id} onChange={textareaChangeHandler} />}
    </article>
  )
}

export default InputContainer
