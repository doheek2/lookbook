import { debounce } from 'lodash'
import { ChangeEvent, useMemo, useState } from 'react'

import { IKakaoAPI } from 'types/lookbook'
import { getBookList } from 'utils/api'

import Bar from 'components/Bar'
import styles from './main.module.scss'
import Menu from 'components/Menu'

const Main = () => {
  const [books, setBooks] = useState<IKakaoAPI>([])
  const [query, setQuery] = useState('')

  useMemo(async () => {
    if (query.length > 0) {
      const params = {
        query,
        sort: 'accuracy',
        page: 1,
        size: 10,
      }

      const { data } = await getBookList(params)
      if (books.length === 0) setBooks(data.documents)
      // else setBooks(books.concat(data.documents))
    }
  }, [books, query])

  const debouncedSearch = debounce((searchText: string) => {
    setQuery(searchText)
  }, 300)

  const searchBookHandler = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.currentTarget.value)
  }

  console.log(books)

  return (
    <div className={styles.container}>
      <Bar />
      <nav className={styles.sideBarContainer}>
        <Menu />
      </nav>
      <div className={styles.box} />
      <main>
        <section className={styles.formContainer}>
          <form className={styles.form}>
            <input type='text' placeholder='책제목을 입력해주세요!' onChange={searchBookHandler} />
            <button type='submit'>검색</button>
          </form>
          <article className={styles.bookListContainer}>
            {books.length === 0 && <p>데이터가 없습니다.</p>}
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
        </section>
      </main>
    </div>
  )
}

export default Main
