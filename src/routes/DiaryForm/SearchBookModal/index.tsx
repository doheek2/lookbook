import { useCallback, FormEvent, Suspense } from 'react'
import { useDispatch } from 'react-redux'

import Modal from 'components/Modal'
import { diaryActions } from 'store/diary-slice'
import useSearchBook from 'hooks/useSearchBook'

import styles from './searchBookModal.module.scss'

const SearchBookModal = () => {
  const dispatch = useDispatch()
  const { books, query, searchBookHandler } = useSearchBook()

  const modalCloseHandler = useCallback(() => dispatch(diaryActions.isModalOpen(false)), [dispatch])

  const formSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }, [])

  return (
    <Modal modalCloseHandler={modalCloseHandler} size='large' title='책 검색'>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <input type='text' placeholder='책제목을 입력해주세요!' onChange={searchBookHandler} />
      </form>
      <Suspense fallback={<div>loading</div>}>
        {books.length === 0 && query.length !== 0 && (
          <article className={styles.noBookWrapper}>
            <p>검색한 책이 없습니다</p>
          </article>
        )}
        {books.length !== 0 && (
          <article className={styles.resultWrapper}>
            {books.map((book, i) => {
              const key = `book${i}`
              return (
                <button key={key} type='button'>
                  {book.title}
                </button>
              )
            })}
          </article>
        )}
      </Suspense>
    </Modal>
  )
}

export default SearchBookModal
