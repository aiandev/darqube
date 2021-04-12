import React ,{ useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { getPaginatedNews, getSearchResults } from "../../helpers"
import "./style.scss"

// COMPONENTS
import NewsList from "components/NewsList"
import Footer from "components/Footer"

function HomePage() {
  const [newsState, setNews] = useState([])
  const [offsetState, setOffsetState] = useState(0)
  const [allNewsState, setAllNewsState] = useState([])

  const newsList = useSelector(state => state.news)
  const searchTerms = useSelector(state => state.search)

  useEffect(() => {
    setAllNewsState(newsList)
  }, [newsList])

  useEffect(() => {
    const newsState = getPaginatedNews(offsetState, allNewsState)
    setNews(newsState)
  }, [offsetState, allNewsState])

  useEffect(() => {
    if (!searchTerms) setAllNewsState(newsList)
    else {
      const newsState = getSearchResults(searchTerms, newsList)
      setAllNewsState(newsState)
    }
  }, [searchTerms,newsList])

  return (
    <div className="news-wrapper">
      <NewsList newsData={newsState} />
      {!!newsState.length && (
        <Footer count={allNewsState.length} offset={offsetState} setOffset={setOffsetState} />
      )}
    </div>
  )
}

export default HomePage
