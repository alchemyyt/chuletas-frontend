import { API_URL } from "../config"

const getPosts = () => {
  return fetch(`${API_URL}/posts/`)
    .then((response) => response.json())
}


module.exports = {getPosts}