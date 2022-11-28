import { ChangeEvent, FormEvent, Suspense, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'
import { HiLogin } from 'react-icons/hi'

import { IKakaoAPI } from 'types/lookbook'
import useKeywordQuery from 'hooks/useKeywordQuery'

import Container from 'components/Container'
import BookItem from 'components/BookItem'
import Button from 'components/Button'
import Recommendation from './Recommendation'

import styles from './main.module.scss'

const Main = () => {
  const navigate = useNavigate()
  const [books, setBooks] = useState<IKakaoAPI>([])
  const [query, setQuery] = useState('')
  const { data } = useKeywordQuery(query)

  useEffect(() => {
    if (query.length > 0 && data) setBooks(data.data.documents)
    else setBooks([])
  }, [data, query.length])

  const debouncedSearch = debounce((searchText: string) => setQuery(searchText), 300)

  const searchBookHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      debouncedSearch(e.currentTarget.value)
    },
    [debouncedSearch]
  )

  const formSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }, [])

  const loginBtnClickHandler = useCallback(() => navigate('/login'), [navigate])

  return (
    <Container>
      <main className={styles.mainContainer}>
        <header>
          <form className={styles.form} onSubmit={formSubmitHandler}>
            <input type='text' placeholder='책제목을 입력해주세요!' onChange={searchBookHandler} />
            <Button isSubmit>
              <p>검색</p>
            </Button>
          </form>
          <Button className={styles.loginBtn} isSubmit={false} onClick={loginBtnClickHandler}>
            <>
              <HiLogin />
              LOGIN
            </>
          </Button>
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
                    price={String(book.price)}
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
