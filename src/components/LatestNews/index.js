import moment from "moment";
import { useSelector } from "react-redux";
import "./style.scss";

function LatestNews() {
  const c = "latest-news";
  const latestNews = useSelector((state) => state.latest);
  const style = { backgroundImage: `url(${latestNews.image})` };
  const newsDate = moment.unix(latestNews.datetime / 1000).format("DD MMM");

  return (
    <div className={`${c}-wrapper`}>
      <div className={c} style={style}>
        <div className={`${c}-overlay`} />
        <div className={`${c}-header`}>
          <span className={`${c}-brief`}>Weekly Brief</span>
          <span className={`${c}-badge`}>LATEST RESEARCH</span>
        </div>
        <div className={`${c}-content`}>
          <p className={`${c}-headline`}>{latestNews.headline}</p>
          <div className={`${c}-footer`}>
            <div className={`${c}-details`}>
              <a href={latestNews.url} target="_blank" rel="noreferrer">
                <span className="navigate">
                  <i className="far fa-arrow-alt-circle-right icon" />
                  Read the research
                </span>
              </a>

              <span className="publish-date">{newsDate}</span>
              <span className="read-time">read-time</span>
            </div>
            <div className={`${c}-actions`}>
              <a href={latestNews.url} target="_blank" rel="noreferrer">
                <i className="fas fa-directions" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
