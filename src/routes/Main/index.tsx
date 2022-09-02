import { ChangeEvent, useCallback, useState } from 'react'
import { getBookList } from 'utils/api'

const Main = () => {
  const [book, setBook] = useState([])
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
      if (reset) setBook(data.documents)
      else setBook(book.concat(data.documents))
    },
    [book]
  )

  const searchBookHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)
    if (query.length > 0) getbookAPIHandler(query, true)
  }

  return (
    <main>
      <section>
        <form>
          <input type='text' placeholder='책제목을 입력해주세요!' onChange={searchBookHandler} />
          <button type='submit'>검색</button>
        </form>
      </section>
    </main>
  )
}

export default Main
