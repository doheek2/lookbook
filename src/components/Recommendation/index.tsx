import useRecommendationQueries from 'hooks/useRecommendationQueries'
import styles from './recommendation.module.scss'

// TODO :: image slice 기능 추가
const Recommendation = () => {
  const booksData = useRecommendationQueries()
  const isGetDataSuccess = booksData.every((data) => data.isSuccess === true)

  const numberCommas = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <section className={styles.recommendationContainer}>
      <p className={styles.title}>Front-end 책 추천</p>
      <article className={styles.bookListContainer}>
        {isGetDataSuccess &&
          booksData.map((v, i) => {
            const key = `recommendation${i}`
            const data = v.data?.data.documents[0]
            const priceCommas = numberCommas(data.price)

            return (
              <div key={key} className={styles.data}>
                <img src={data.thumbnail} alt={data.title} />
                <div className={styles.metaData}>
                  <p className={styles.bookTitle}>{data.title}</p>
                  <p>{data.publisher}</p>
                  <p>{priceCommas}원</p>
                </div>
              </div>
            )
          })}
      </article>
    </section>
  )
}

export default Recommendation
