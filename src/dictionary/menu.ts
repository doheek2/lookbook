export type TMenuTag = {
  [index: string]: string
  main: string
  bookdiary: string
  lookbook: string
  favorites: string
}

export const menuRoute: TMenuTag = {
  main: '',
  bookdiary: 'bookdiary',
  lookbook: 'lookbook',
  favorites: 'favorites',
}

export const menuName: TMenuTag = {
  main: '홈',
  bookdiary: '책일기장',
  lookbook: 'LOOKBOOK',
  favorites: '즐겨찾기',
}

export type TLoginMenu = {
  [index: string]: string
  login: string
  logout: string
}

export const loginName: TLoginMenu = {
  login: '로그인',
  logout: '로그아웃',
}
