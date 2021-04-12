import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { getPaginatedNews, getSearchResults } from "../../helpers"
import "./style.scss"

// COMPONENTS
import NewsList from "components/NewsList"
import Footer from "components/Footer"

function Bookmarks() {
  const [newsState, setNewsState] = useState([])
  const [offsetState, setOffsetState] = useState(0)
  const [allBookmarkState, setAllBookmarkState] = useState([])

  const bookmarksList = useSelector(state => state.bookmarks)
  const searchTerms   = useSelector(state => state.search)

  useEffect(() => {
    setAllBookmarkState(bookmarksList)
  }, [bookmarksList])

  useEffect(() => {

    const newsList = getPaginatedNews(offsetState, allBookmarkState)

    setNewsState(newsList)

  }, [offsetState, allBookmarkState])

  useEffect(() => {
    if (!searchTerms)  return setAllBookmarkState(bookmarksList); 
    const newsList = getSearchResults(searchTerms, bookmarksList)
    setAllBookmarkState(newsList)
  }, [searchTerms, bookmarksList])

  return (
    <div className="bookmark-wrapper">
      <NewsList newsData={newsState} />
      {!!newsState.length && (
        <Footer count={allBookmarkState.length} offset={offsetState} setOffset={setOffsetState} />
      )}
    </div>
  )
}

export default Bookmarks
