import axios from 'axios'
import { IAPIParams } from 'types/lookbook'

const kakao = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`,
  },
})

export const getBookList = async (params: IAPIParams) => {
  return kakao.get('/v3/search/book', { params })
}
