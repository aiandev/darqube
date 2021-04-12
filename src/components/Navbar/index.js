import { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { SEARCH_ACTION } from "store/actions"
import "./style.scss"

function Navbar() {
  const c = "navbar"
  const dispatch = useDispatch()
  const [searchTermState, setSearchTermState] = useState("")
  const handleSearch = () => dispatch({ type: SEARCH_ACTION, searchTermState })

  return (
    <div className={c}>
      <div className={`${c}__links`}>
        <NavLink exact to="/" className={`${c}__link`}>
          News
        </NavLink>
        <NavLink to="/bookmarks" className={`${c}__link`}>
          Bookmarks
        </NavLink>
      </div>
      <div className={`${c}__search-container`}>
        <i className="fas fa-search icon" ></i>
        <input
          type="text"
          value={searchTermState}
          onKeyDown={(e)=>{
            console.log(e);
            handleSearch()
          }}
          onChange={e => setSearchTermState(e.target.value)}
          className={`${c}__search`}
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default Navbar
