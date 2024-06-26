import { getPosts } from '../services/posts'
import Link from 'next/link'
import '../styles/content.css'
const Content = async () => {
  const datos = await getPosts()
  const posts = datos.docs
  const ingles = posts.filter(post => post.category === 'ingles')
  return (
    <div className='content'>
      {ingles.map((valor, indice) =>
        <Link key={indice} href={valor.id}>
          <img src={valor.image} alt={valor.title} />
          <div>
            <h5>{valor.title}</h5>
          </div>
        </Link>
      )}
    </div>
  )
}

export default Content
