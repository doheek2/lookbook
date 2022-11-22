import { useCallback, MouseEvent, useState } from 'react'
import { isMobile } from 'react-device-detect'
import cx from 'classnames'

import useRecommendationQueries from 'hooks/useRecommendationQueries'
import styles from './recommendation.module.scss'

const Recommendation = () => {
  const [originX, setOriginX] = useState(0)
  const [afterX, setAfterX] = useState(0)
  const [position, setPosition] = useState(0)
  const [isScroll, setIsScroll] = useState(false)
  const books = useRecommendationQueries().filter((book) => book.data?.data.documents[0] !== undefined)
  const isGetDataSuccess = books.every((data) => data.isSuccess === true)

  const scrollHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>, scroll: string) => {
      switch (scroll) {
        case 'start':
          setOriginX(e.clientX)
          setIsScroll(true)
          break
        case 'end':
          setAfterX(position)
          setIsScroll(false)
          break
        case 'leave':
          setIsScroll(false)
          break
        default:
          break
      }
    },
    [position]
  )

  const slideHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (isMobile) {
        setIsScroll(false)
      } else {
        const newPosition = e.clientX - originX + afterX
        const hiddenLength = e.currentTarget.offsetWidth - 166 * books.length

        if (isScroll === false) return

        newPosition < 10 && newPosition > hiddenLength && setPosition(newPosition)
      }
    },
    [afterX, books.length, isScroll, originX]
  )

  const numberCommas = useCallback((price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }, [])

  return (
    <section className={styles.recommendationContainer}>
      <p className={styles.title}>Front-end 책 추천</p>
      <button
        type='button'
        className={cx(styles.bookListContainer, isMobile && styles.scroll)}
        style={{ transform: isMobile ? '0px' : `translateX(${position}px)` }}
        onMouseDown={(e) => scrollHandler(e, 'start')}
        onMouseUp={(e) => scrollHandler(e, 'end')}
        onMouseLeave={(e) => scrollHandler(e, 'leave')}
        onMouseMove={slideHandler}
      >
        {isGetDataSuccess &&
          books.map((book, i) => {
            const key = `recommendation${i}`
            const data = book.data?.data.documents[0]
            const priceCommas = numberCommas(data.price)

            return (
              <div key={key} title={key} itemID={key} className={styles.data}>
                <img src={data.thumbnail} alt={data.title} />
                <div className={styles.metaData}>
                  <p className={styles.bookTitle}>{data.title}</p>
                  <p>{data.publisher}</p>
                  <p>{priceCommas}원</p>
                </div>
              </div>
            )
          })}
      </button>
    </section>
  )
}

export default Recommendation
