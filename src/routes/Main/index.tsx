import { debounce } from 'lodash'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

import { IKakaoAPI } from 'types/lookbook'
import { getBookList } from 'utils/api'

import Bar from 'components/Bar'
import styles from './main.module.scss'

const Main = () => {
  const [books, setBooks] = useState<IKakaoAPI>([])
  const [query, setQuery] = useState('')

  const getbookAPIHandler = useCallback(
    async (query: string, reset: boolean) => {
      const params = {
        query,
        sort: 'accuracy',
        page: 1,
        size: 10,
      }

      const { data } = await getBookList(params)
      if (reset) setBooks(data.documents)
      else setBooks(books.concat(data.documents))
    },
    [books]
  )

  const searchBookHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)
  }

  useEffect(() => {
    if (query.length > 0) getbookAPIHandler(query, true)
  }, [getbookAPIHandler, query])

  return (
    <div className={styles.container}>
      <Bar />
      <div className={styles.box} />
      <main>
        <section>
          <form className={styles.form}>
            <input type='text' placeholder='책제목을 입력해주세요!' onChange={searchBookHandler} />
            <button type='submit'>검색</button>
          </form>
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
        </section>
      </main>
    </div>
  )
}

export default Main
