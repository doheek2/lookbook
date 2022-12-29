import { FormEvent, Suspense, useCallback } from 'react'

import useAuth from 'hooks/useAuth'
import useSearchBook from 'hooks/useSearchBook'

import Container from 'components/Container'
import BookItem from 'components/BookItem'
import Button from 'components/Button'
import Recommendation from './Recommendation'

import styles from './main.module.scss'

const Main = () => {
  const { user } = useAuth()
  const { books, query, searchBookHandler } = useSearchBook()

  const formSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }, [])

  return (
    <Container>
      <main className={styles.mainContainer}>
        <header>
          <form className={styles.form} onSubmit={formSubmitHandler}>
            <input type='text' placeholder='책제목을 입력해주세요!' onChange={searchBookHandler} />
            <Button isSubmit>검색</Button>
          </form>
          {/* eslint-disable-next-line dot-notation */}
          {user && <p className={styles.user}>{user['displayName']}님 환영합니다!</p>}
        </header>
        <Suspense fallback={<div>loading</div>}>
          {books && query.length === 0 && <Recommendation />}
          {books.length === 0 && query.length !== 0 && <p>검색한 책이 없습니다</p>}
          <article className={styles.bookListContainer}>
            {books.length !== 0 &&
              books.map((book, i) => {
                const key = `books-${i}`
                return (
                  <BookItem
                    key={key}
                    id={key}
                    isList={false}
                    thumbnail={book.thumbnail}
                    title={book.title}
                    publisher={book.publisher}
                    price={`${book.price}`}
                  />
                )
              })}
          </article>
        </Suspense>
      </main>
    </Container>
  )
}

export default Main
