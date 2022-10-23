import { debounce } from 'lodash'
import { ChangeEvent, useEffect, useState } from 'react'

import { IKakaoAPI } from 'types/lookbook'
import useKeywordQuery from 'hooks/useKeywordQuery'

import Bar from 'components/Bar'
import Menu from 'components/Menu'
import Recommendation from 'components/Recommendation'

import styles from './main.module.scss'
import Container from 'components/Container'

const Main = () => {
  const [books, setBooks] = useState<IKakaoAPI>([])
  const [query, setQuery] = useState('')
  const { data } = useKeywordQuery(query)

  useEffect(() => {
    if (query.length > 0 && data) setBooks(data.data.documents)
    else setBooks([])
  }, [data, query.length])

  const debouncedSearch = debounce((searchText: string) => {
    setQuery(searchText)
  }, 300)

  const searchBookHandler = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.currentTarget.value)
  }

  return (
    <Container>
      <main className={styles.mainContainer}>
        <form className={styles.form}>
          <input type='text' placeholder='책제목을 입력해주세요!' onChange={searchBookHandler} />
          <button type='submit'>검색</button>
        </form>
        {books.length === 0 && query.length === 0 && <Recommendation />}
        {books.length === 0 && query.length !== 0 && <p>검색한 책이 없습니다</p>}
        <article className={styles.bookListContainer}>
          {books.length !== 0 &&
            books.map((v, i) => {
              const key = `books-${i}`
              return (
                <div key={key}>
                  <img src={v.thumbnail} alt={v.title} />
                  <p>{v.title}</p>
                </div>
              )
            })}
        </article>
      </main>
    </Container>
  )
}

export default Main
