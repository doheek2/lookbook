import useRecommendationQueries from 'hooks/useRecommendationQueries'

const Recommendation = () => {
  const booksData = useRecommendationQueries()
  const isSuccess = booksData.some((result) => result.isSuccess)

  return (
    <section>
      <p>Front-end 책 추천</p>
      <article>
        {isSuccess &&
          booksData.map((v, i) => {
            const key = `recommendation${i}`
            const data = v.data?.data.documents[0]
            return (
              <div key={key}>
                <img src={data.thumbnail} alt={data.title} />
                <p>{data.title}</p>
              </div>
            )
          })}
      </article>
    </section>
  )
}

export default Recommendation
