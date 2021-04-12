import News from "components/News"
import "./style.scss"

function NewsList({ newsData = [] }) {
  const c = "list"

  return (
    <div className={c}>
      {newsData.map(news => (
        <News key={news.id} item={news} />
      ))}
    </div>
  )
}

export default NewsList
