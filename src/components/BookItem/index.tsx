import { SyntheticEvent, useCallback } from 'react'
import cx from 'classnames'

import notFoundImg from 'assets/pngs/notFoundImg.png'
import { getPriceToCommas } from 'utils/lookbook'

import styles from './bookItem.module.scss'

interface IProps {
  id: string
  isList: boolean
  thumbnail: string
  title: string
  publisher: string
  price: string
}

const BookItem = ({ id, isList, thumbnail, title, publisher, price }: IProps) => {
  const priceCommas = getPriceToCommas(`${price}`)
  const imgErrorHandler = useCallback((e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = notFoundImg
  }, [])

  return (
    <div title={id} itemID={id} className={cx(styles.data, isList && styles.list)}>
      <img src={thumbnail} alt={title} onError={imgErrorHandler} />
      <div className={styles.metaData}>
        <p className={styles.bookTitle}>{title}</p>
        <p>{publisher}</p>
        <p>{priceCommas}원</p>
      </div>
    </div>
  )
}

export default BookItem
