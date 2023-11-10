import { API_URL } from '../config'
import '../styles/posts.css'
const loadPost = (id) => {
  return fetch(`${API_URL}/posts/${id}`)
    .then((response) => response.json())
}
const Page = async ({ params }) => {
  const { id } = params
  const datos = await loadPost(id)
  return (
    <div className='post'>
      <h1>{datos.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: datos.content }} />
      <img src={datos.image.url} alt='imagen' />
    </div>
  )
}

export default Page
