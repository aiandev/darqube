import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchNews } from "./helpers"

// PAGES
import Home from "pages/Home"
import Bookmarks from "pages/Bookmarks"
import Loading from "pages/Loading"
import LatestNews from "components/LatestNews"

// COMPONENTS
import Navbar from "components/Navbar"
import { UPLOAD_NEWS_ACTION } from "store/actions"

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  async function getNews() {
    try {
      const newsList = await fetchNews();
      dispatch({ type: UPLOAD_NEWS_ACTION, newsList })
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getNews()
  })

  if (loading) return <Loading />

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <LatestNews />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bookmarks" component={Bookmarks} />
        </Switch>
      </div>
    </div>
  )
}

export default App
