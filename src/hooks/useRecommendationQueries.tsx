import { useQueries } from 'react-query'
import { getBookList } from 'utils/api'

interface IQueryFnParams {
  meta: undefined
  pageParam: undefined
  queryKey: string[]
  signal: AbortSignal
}

const useRecommendationQueries = () => {
  const params = {
    sort: 'accuracy',
    page: 1,
    size: 1,
  }

  // TODO :: queryFn에서 any 타입 수정
  return useQueries([
    {
      queryKey: ['getHTMLBook', 'HTML+CSS+자바스크립트 웹 표준의 정석'],
      queryFn: (v: any) => getBookList({ query: v.queryKey[1], ...params }),
      staleTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
      suspense: true,
    },
    {
      queryKey: ['getHTMLBook', '모던 자바스크립트 Deep Dive'],
      queryFn: (v: any) => getBookList({ query: v.queryKey[1], ...params }),
      staleTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  ])
}

export default useRecommendationQueries
