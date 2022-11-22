import { useQueries } from 'react-query'
import { getBookList } from 'utils/api'

const books = [
  '기초부터 완성까지, 프런트엔드',
  'HTML+CSS+자바스크립트 웹 표준의 정석',
  '모던 자바스크립트 Deep Dive',
  '리액트를 다루는 기술',
  '개발자를 위한 글쓰기 가이드',
  '1일 1로그 100일 완성 IT 지식',
  '프로그래머의 뇌',
]

const params = {
  sort: 'accuracy',
  page: 1,
  size: 1,
}

const useRecommendationQueries = () =>
  useQueries(
    books.map((book) => {
      return {
        queryKey: ['getBook', book],
        queryFn: (v: { queryKey: any[] }) => getBookList({ query: v.queryKey[1], ...params }),
        staleTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
        suspense: true,
      }
    })
  )

export default useRecommendationQueries
