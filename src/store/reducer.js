import { SEARCH_ACTION, TOGGLE_BOOKMARK_ACTION, UPLOAD_NEWS_ACTION } from "./actions";
const initialState = {
  news: [],
  bookmarks: [],
  latest: null,
  search: "",
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_NEWS_ACTION:
      return uploadNews(state, action);
    case TOGGLE_BOOKMARK_ACTION:
      return toggleBookmark(state, action);
    case SEARCH_ACTION:
      return {
        ...state,
        search: action.searchTermState,
      };
    default:
      return state;
  }
}

function uploadNews(state, action) {
  let { newsList } = action;

  const latest = newsList[0];

  newsList.shift();

  const news = newsList.map((news) => ({
    ...news,
    bookmark: false,
  }));

  return {
    ...state,
    latest,
    news,
  };
}

function toggleBookmark(state, action) {
  const news = [...state.news];
  let bookmarks = [...state.bookmarks];

  const item = news.find(({ id }) => action.id === id);
  const index = news.indexOf(item);
  news[index].bookmark = !news[index].bookmark;

  if (item.bookmark) bookmarks = [...bookmarks, item];
  else bookmarks = bookmarks.filter(({ id }) => action.id !== id);

  return {
    ...state,
    news,
    bookmarks,
  };
}
