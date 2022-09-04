export interface IAPIParams {
  query: string
  sort: string
  page: number
  size: number
}

interface IKakaoProps {
  authors: [string]
  contents: string
  datetime: string
  isbn: string
  price: number
  publisher: string
  sale_price: number
  status: string
  thumbnail: string
  title: string
  translators: [string | null]
  url: string
}

export interface IKakaoAPI extends Array<IKakaoProps> {}
