import moment from "moment"
import { useDispatch } from "react-redux"
import { TOGGLE_BOOKMARK_ACTION } from "store/actions"
import "./style.scss"

function News({ item }) {
  const c = "list__item"
  const dispatch = useDispatch()
  const style = { backgroundImage: `url(${item.image})` }

  const date = moment.unix(item.datetime / 1000).format("DD MMM")

  const toggleBookmark = () =>
    dispatch({
      type: TOGGLE_BOOKMARK_ACTION,
      id: item.id,
    })

  return (
    <div className={c} style={style}>
      <div className={`${c}-overlay`} />
      <div className={`${c}-header`}>
        <span className={`${c}-brief`}>Weekly Brief</span>
      </div>
      <div className={`${c}-content`}>
        <p className={`${c}-headline`}>{item.headline}</p>
        <div className={`${c}-footer`}>
          <div className={`${c}-details`}>
            <span className="publish-date">{date}</span>
            <span className="read-time">5 min read</span>
          </div>
          <div className={`${c}-actions`}>
            <a href={item.url} target='_blank' rel="noreferrer" >
              <i className="fas fa-directions" />

            </a>
            <i
              className={`${item.bookmark ? "fas" : "far"} fa-bookmark`}
              onClick={toggleBookmark}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default News
