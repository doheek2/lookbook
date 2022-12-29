import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { debounce } from 'lodash'

import { IKakaoAPI } from 'types/lookbook'
import useKeywordQuery from './useKeywordQuery'

const useSearchBook = () => {
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

  return { books, query, searchBookHandler }
}

export default useSearchBook
