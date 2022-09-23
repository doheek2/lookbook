import { useState } from 'react'
import { useQuery } from 'react-query'
import { getBookList } from 'utils/api'

const useKeywordQuery = (keyword: string) => {
  const [page, setPage] = useState(1)

  const params = {
    query: keyword,
    sort: 'accuracy',
    page,
    size: 12,
  }

  return useQuery(['searchKeyword', keyword], () => getBookList(params), {
    enabled: !!keyword,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    suspense: true,
  })
}

export default useKeywordQuery
