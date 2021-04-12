import axios from "axios"
import { API } from "./constants"

export async function fetchNews() {
  const response = await axios.get(API)

  if (response.status > 400) {
    throw new Error("API response error")
  }

  return response.data
}

export function getPaginatedNews(offset, news) {
  return news.slice(offset, offset + 6)
}

export function getSearchResults(value, news = []) {
  var search = new RegExp(value , 'i'); // prepare a regex object
  return news.filter(item => search.test(item.headline))
}
